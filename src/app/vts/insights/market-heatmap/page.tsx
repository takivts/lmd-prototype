"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { mockData } from "./data/mockData.js";
import type { Feature, FeatureCollection, Point } from "geojson";

// Define property data type for mockData
interface PropertyData {
  Coordinates: string;
  "Count of Deals": string;
  "Industry Name Tier 1": string;
  "Industry Name Tier 2": string;
  "Industry Name Tier 3": string;
  "Is Office (Yes / No)": string;
  "Property Name": string;
  "Street Address": string;
  [key: string]: any; // For any other fields that might exist
}

// Define property properties type
interface PropertyProps {
  name: string;
  address: string;
  type: string;
  owner: string;
  propertyId: string;
  typeCategory: number;
  idCount: number; // Count of properties with this ID
  city: string; // Added city field to track property location
}

// Enhanced heatmap parameters
const HEATMAP_COLOR_STOPS = [
  [0, "rgba(80,0,0,0)"], // Transparent dark red
  [0.1, "rgba(100,0,0,0.2)"], // Very dark red, low opacity
  [0.3, "rgba(150,0,0,0.3)"], // Dark red, more visible
  [0.5, "rgba(180,0,0,0.5)"], // Medium red, medium opacity
  [0.7, "rgba(220,0,0,0.7)"], // Bright red, high opacity
  [0.9, "rgba(255,0,0,0.9)"], // Vibrant red, highest opacity
];

export default function MapPage() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [city, setCity] = useState<"toronto" | "new-york">("new-york");

  // Use refs for coordinates that are only for display
  const lngRef = useRef(-73.984);
  const latRef = useRef(40.7549);
  const zoomRef = useRef(12);

  // Keep state versions only for display updates
  const [displayCoords, setDisplayCoords] = useState({
    lng: -73.984,
    lat: 40.7549,
    zoom: 12,
  });

  const [propertyCount, setPropertyCount] = useState(0);
  const [showPoints, setShowPoints] = useState(false);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_KEY;

  // Toggle point visibility
  const togglePointVisibility = () => {
    if (!map.current) return;

    setShowPoints(!showPoints);

    if (map.current.getLayer("property-point")) {
      const visibility = !showPoints ? "visible" : "none";
      map.current.setLayoutProperty("property-point", "visibility", visibility);
    }
  };

  // Toggle between cities
  const toggleCity = () => {
    const newCity = city === "new-york" ? "toronto" : "new-york";
    setCity(newCity);

    const newCoords = newCity === "toronto" ? { lng: -79.3832, lat: 43.6532 } : { lng: -73.984, lat: 40.7549 };

    // Update refs
    lngRef.current = newCoords.lng;
    latRef.current = newCoords.lat;

    // Update display
    setDisplayCoords((prev) => ({ ...prev, ...newCoords }));

    // Update map center
    if (map.current) {
      // Update maxZoom based on selected city
      map.current.setMaxZoom(newCity === "toronto" ? 15 : 14.5);

      map.current.flyTo({
        center: [newCity === "toronto" ? -79.3832 : -73.984, newCity === "toronto" ? 43.6532 : 40.7549],
        duration: 1500,
      });

      // Remove existing layers and source
      if (map.current.getLayer("heatmap-layer")) {
        map.current.removeLayer("heatmap-layer");
      }
      if (map.current.getLayer("property-point")) {
        map.current.removeLayer("property-point");
      }
      if (map.current.getSource("properties-source")) {
        map.current.removeSource("properties-source");
      }

      // Reload data with new city
      loadCityData(map.current, newCity);
    }
  };

  // Helper function to categorize property types (for heatmap weighting)
  const getPropertyTypeCategory = useCallback((propertyType: string): number => {
    if (!propertyType) return 0;

    if (propertyType.includes("Finance")) {
      return 1; // Finance
    } else if (propertyType.includes("Retail") || propertyType.includes("Consumer")) {
      return 2; // Retail
    } else if (propertyType.includes("Healthcare")) {
      return 3; // Healthcare
    } else if (propertyType.includes("Technology")) {
      return 4; // Technology
    }

    return 0; // Other/Unknown
  }, []);

  // Function to load city data
  const loadCityData = useCallback(
    (mapInstance: mapboxgl.Map, cityName: "toronto" | "new-york") => {
      // Filter data by city based on coordinates
      const filteredData = mockData.filter((property: PropertyData) => {
        if (!property.Coordinates) return false;

        const [lat, lng] = property.Coordinates.split(",").map(parseFloat);
        if (isNaN(lat) || isNaN(lng)) return false;
        // Determine city based on coordinates
        if (cityName === "toronto" && lat > 43.0 && lng < -79.0) {
          return true;
        } else if (cityName === "new-york" && lat < 41.0 && lng > -75.0) {
          return true;
        }

        return false;
      });

      // Count occurrences of each property name/address as ID
      const propertyIdCounts: Record<string, number> = {};

      filteredData.forEach((property: PropertyData) => {
        const id = property["Property Name"] || "unknown";
        propertyIdCounts[id] = (propertyIdCounts[id] || 0) + 1;
      });

      const countValues = Object.values(propertyIdCounts);
      const maxCount = Math.max(1, ...countValues);

      const sortedCounts = [...countValues].sort((a, b) => a - b);
      const median = sortedCounts[Math.floor(sortedCounts.length / 2)];

      const p75Index = Math.floor(sortedCounts.length * 0.75);
      const p90Index = Math.floor(sortedCounts.length * 0.9);
      const p75Value = sortedCounts[p75Index] || maxCount;
      const p90Value = sortedCounts[p90Index] || maxCount;

      // Convert data to GeoJSON format with ID counts
      const points: Feature<Point, PropertyProps>[] = filteredData.map((property: PropertyData) => {
        // Parse coordinates from "lat,lng" format to [lng, lat] format required by mapbox
        const [latStr, lngStr] = property.Coordinates.split(",");
        const latitude = parseFloat(latStr);
        const longitude = parseFloat(lngStr);
        const id = property["Property Name"] || "unknown";
        const countOfDeals = parseInt(property["Count of Deals"] || "1", 10);

        return {
          type: "Feature" as const,
          properties: {
            name: property["Property Name"] || "",
            address: property["Street Address"] || "",
            type: property["Industry Name Tier 2"] || "",
            owner: property["Industry Name Tier 1"] || "",
            propertyId: id,
            typeCategory: getPropertyTypeCategory(property["Industry Name Tier 2"] || ""),
            idCount: countOfDeals || 1,
            city: cityName,
          },
          geometry: {
            type: "Point" as const,
            coordinates: [longitude, latitude],
          },
        };
      });

      setPropertyCount(points.length);

      // Add source for heatmap
      const geoJsonData: FeatureCollection<Point, PropertyProps> = {
        type: "FeatureCollection",
        features: points,
      };

      mapInstance.addSource("properties-source", {
        type: "geojson",
        data: geoJsonData,
      });

      // Add heatmap layer with optimized settings
      mapInstance.addLayer({
        id: "heatmap-layer",
        type: "heatmap",
        source: "properties-source",
        paint: {
          "heatmap-weight": [
            "interpolate",
            ["exponential", 2],
            ["get", "idCount"],
            1,
            0.2,
            median,
            0.4,
            p75Value,
            0.6,
            p90Value,
            0.8,
            maxCount,
            1.0,
          ],
          "heatmap-intensity": ["interpolate", ["exponential", 2], ["zoom"], 12, 0.8, 14, 1.0, 16, 1.2],
          "heatmap-color": ["interpolate", ["exponential", 2], ["heatmap-density"], ...HEATMAP_COLOR_STOPS.flat()],
          "heatmap-radius": ["interpolate", ["exponential", 2], ["zoom"], 12, 32, 14, 48, 16, 64],
          "heatmap-opacity": ["interpolate", ["exponential", 2], ["zoom"], 12, 0.4, 14, 0.45, 16, 0.5],
        },
      });

      // Add enhanced circle layer for individual properties
      mapInstance.addLayer({
        id: "property-point",
        type: "circle",
        source: "properties-source",
        minzoom: 12,
        layout: {
          visibility: showPoints ? "visible" : "none",
        },
        paint: {
          "circle-radius": [
            "interpolate",
            ["exponential", 1.5],
            ["zoom"],
            12,
            ["*", 6, ["sqrt", ["get", "idCount"]]],
            16,
            ["*", 4, ["sqrt", ["get", "idCount"]]],
          ],
          "circle-color": [
            "match",
            ["get", "typeCategory"],
            1,
            "rgba(33, 150, 243, 1)",
            2,
            "rgba(76, 175, 80, 1)",
            3,
            "rgba(244, 67, 54, 1)",
            4,
            "rgba(255, 152, 0, 1)",
            "rgba(156, 39, 176, 1)",
          ],
          "circle-opacity": ["interpolate", ["linear"], ["zoom"], 12, 1, 16, 1],
          "circle-blur": ["interpolate", ["linear"], ["zoom"], 12, 1, 16, 1],
        },
      });

      // Helper function to calculate percentile rank
      function calculatePercentile(value: number, sortedArr: number[]): number {
        const index = sortedArr.findIndex((x) => x >= value);
        if (index === -1) return 100;
        return Math.floor((index / sortedArr.length) * 100);
      }

      // Add popup on circle click with enhanced info
      mapInstance.on("click", "property-point", (e) => {
        if (!e.features || !e.features[0] || !e.features[0].properties) return;

        const props = e.features[0].properties as PropertyProps;
        const percentile = calculatePercentile(props.idCount, sortedCounts);

        new mapboxgl.Popup({
          closeButton: true,
          closeOnClick: true,
          maxWidth: "300px",
          className: "custom-popup",
        })
          .setLngLat(e.lngLat)
          .setHTML(
            `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: white; padding: 12px; border-radius: 6px;">
            <div style="font-weight: 600; font-size: 14px; margin-bottom: 5px; color: #fff;">${props.name || props.address}</div>
            <div style="font-size: 12px; color: #aaa; margin-bottom: 10px;">${props.address}</div>
            
            <div style="display: flex; margin-bottom: 5px;">
              <div style="width: 80px; font-size: 12px; color: #888;">Type:</div>
              <div style="font-size: 12px; color: #ddd;">${props.type || "Unknown"}</div>
            </div>
            
            <div style="display: flex; margin-bottom: 5px;">
              <div style="width: 80px; font-size: 12px; color: #888;">Owner:</div>
              <div style="font-size: 12px; color: #ddd;">${props.owner || "Unknown"}</div>
            </div>
            
            <div style="display: flex; margin-bottom: 5px;">
              <div style="width: 80px; font-size: 12px; color: #888;">Property ID:</div>
              <div style="font-size: 12px; color: #ddd;">${props.propertyId}</div>
            </div>
            
            <div style="background: rgba(255,204,0,0.15); padding: 8px; border-radius: 4px; margin-top: 8px;">
              <div style="font-size: 12px; color: #fc0; margin-bottom: 5px;">
                Number of Deals: <b>${props.idCount}</b>
              </div>
              <div style="font-size: 11px; color: #fc0;">
                This is in the ${percentile}th percentile of property frequencies
              </div>
            </div>
          </div>
        `,
          )
          .addTo(mapInstance);
      });

      // Change cursor on hover
      mapInstance.on("mouseenter", "property-point", () => {
        mapInstance.getCanvas().style.cursor = "pointer";
      });

      mapInstance.on("mouseleave", "property-point", () => {
        mapInstance.getCanvas().style.cursor = "";
      });
    },
    [showPoints, getPropertyTypeCategory],
  );

  // Main map initialization effect
  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    // Ensure container has dimensions
    if (mapContainer.current.offsetWidth === 0 || mapContainer.current.offsetHeight === 0) {
      // Retry after a short delay if container isn't ready
      const timer = setTimeout(() => {
        if (mapContainer.current && mapContainer.current.offsetWidth > 0) {
          initializeMap();
        }
      }, 100);
      return () => clearTimeout(timer);
    }

    const initializeMap = () => {
      mapboxgl.accessToken = MAPBOX_TOKEN;
      map.current = new mapboxgl.Map({
        container: mapContainer.current!,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [lngRef.current, latRef.current],
        zoom: zoomRef.current,
        maxZoom: city === "toronto" ? 16 : 14.5,
        minZoom: 12,
      });

      const mapInstance = map.current;

      mapInstance.on("load", () => {
        setIsMapLoaded(true);
        loadCityData(mapInstance, city);
      });
    };

    initializeMap();

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [MAPBOX_TOKEN, city, loadCityData]);

  // Separate effect for move handler
  useEffect(() => {
    if (!map.current) return;

    const handleMove = () => {
      const center = map.current!.getCenter();
      setDisplayCoords((prev) => ({
        ...prev,
        lng: Number(center.lng.toFixed(4)),
        lat: Number(center.lat.toFixed(4)),
        zoom: Number(map.current!.getZoom().toFixed(2)),
      }));
    };

    map.current.on("move", handleMove);

    return () => {
      if (map.current) {
        map.current.off("move", handleMove);
      }
    };
  }, [isMapLoaded]); // Only run when map is loaded

  return (
    <div className="mx-auto flex h-[calc(100dvh-50px)] w-full flex-col rounded-lg bg-white/25 p-16">
      <div className="mb-4">
        <h1 className="text-xl font-bold">{city === "toronto" ? "Toronto" : "New York"} Properties Heat Map</h1>
        <h3 className="mb-2 text-sm opacity-80">Based on deals created in the last 6 months</h3>
        <div className="flex justify-between rounded border border-slate-200 bg-slate-100 px-2 py-1 text-sm">
          <span>
            Longitude: {displayCoords.lng} | Latitude: {displayCoords.lat} | Zoom: {displayCoords.zoom}
          </span>
          <span>Displaying {propertyCount} properties</span>
        </div>

        {/* Toggle buttons for point visibility and city */}
        <div className="mt-2 flex justify-between">
          <button
            onClick={toggleCity}
            className="flex items-center rounded bg-blue-600 px-3 py-1 text-sm text-white transition-colors hover:bg-blue-500"
          >
            Switch to {city === "new-york" ? "Toronto" : "New York"}
          </button>

          <button
            onClick={togglePointVisibility}
            className="flex items-center rounded bg-blue-600 px-3 py-1 text-sm text-white transition-colors hover:bg-blue-500"
          >
            {showPoints ? (
              <>
                <span className="mr-2 w-20 text-left">Hide Points</span>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                  <line x1="3" y1="3" x2="21" y2="21" strokeLinecap="round"></line>
                </svg>
              </>
            ) : (
              <>
                <span className="mr-2 w-20 text-left">Show Points</span>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </>
            )}
          </button>
        </div>
      </div>
      <div ref={mapContainer} className="h-[800px] w-full rounded-lg">
        {!isMapLoaded && (
          <div className="flex h-full items-center justify-center rounded-lg bg-gray-100">
            <div className="text-center">
              <div className="mx-auto mb-2 h-8 w-8 animate-spin rounded-full border-b-2 border-blue-600"></div>
              <p className="text-sm text-gray-600">Loading map...</p>
            </div>
          </div>
        )}
      </div>
      <div className="mt-3 rounded-lg border border-slate-200 bg-slate-100 p-2">
        <div className="flex items-center justify-between">
          <div className="text-xs font-medium">Heat Map Density (Based on Deal Counts)</div>
          <div className="text-xs opacity-80">{showPoints ? "Points visible" : "Points hidden (heat map only)"}</div>
        </div>
        <div className="mt-1 flex h-6 w-full overflow-hidden rounded-md border border-gray-300">
          <div className="relative h-6 w-full bg-gradient-to-r from-transparent via-red-700/50 to-red-600/90"></div>
        </div>
        <div className="mt-1 flex justify-between text-[10px]">
          <span>Low density</span>
          <span>High density</span>
        </div>
      </div>
    </div>
  );
}
