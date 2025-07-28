"use client";

import Select from "react-select";
import {
  industriesOptions,
  submarketOptions,
  marketOptions,
  buildingClassOptions,
  sizeOptions,
  marketSubmarketMap,
} from "../data/vts-ai-inputs";
import { useMemo } from "react";

export default function VtsAiInputs({
  className,
  market,
  onMarketChange,
  submarket,
  onSubmarketChange,
  industry,
  onIndustryChange,
  buildingClass,
  onBuildingClassChange,
  size,
  onSizeChange,
}: {
  className?: string;
  market: string;
  onMarketChange: (value: string) => void;
  submarket: string;
  onSubmarketChange: (value: string) => void;
  industry: string;
  onIndustryChange: (value: string) => void;
  buildingClass: string;
  onBuildingClassChange: (value: string) => void;
  size: string;
  onSizeChange: (value: string) => void;
}) {
  const availableSubmarkets = useMemo(() => {
    return submarketOptions.filter((s) => s.value === "all" || marketSubmarketMap[market]?.includes(s.value));
  }, [market]);

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <div className="mb-2 flex gap-2">
        <label className="flex flex-1 flex-col text-xs">
          Market
          <Select
            instanceId="market-select"
            classNamePrefix="vts-ai-select"
            className="flex-1 rounded-lg text-gray-700"
            isClearable
            options={marketOptions}
            placeholder="Select market"
            value={marketOptions.find((o) => o.value === market) || null}
            onChange={(e) => onMarketChange(e?.value ?? "all")}
          />
        </label>

        <label className="flex flex-1 flex-col text-xs">
          Submarket
          <Select
            instanceId="submarket-select"
            classNamePrefix="vts-ai-select"
            className="flex-1 rounded-lg text-gray-700"
            options={availableSubmarkets}
            isClearable
            placeholder="Select submarket"
            value={availableSubmarkets.find((o) => o.value === submarket) || null}
            onChange={(e) => onSubmarketChange(e?.value ?? "all")}
          />
        </label>
      </div>
      <div className="flex gap-2">
        <label className="flex flex-1 flex-col text-xs">
          Industries
          <Select
            instanceId="industries-select"
            classNamePrefix="vts-ai-select"
            className="flex-1 rounded-lg text-gray-700"
            isClearable
            options={industriesOptions}
            placeholder="Select industry"
            value={industriesOptions.find((o) => o.value === industry) || null}
            onChange={(e) => onIndustryChange(e?.value ?? "all")}
          />
        </label>
        <label className="flex flex-1 flex-col text-xs">
          Building Class
          <Select
            instanceId="building-class-select"
            classNamePrefix="vts-ai-select"
            className="flex-1 rounded-lg text-gray-700"
            isClearable
            options={buildingClassOptions}
            placeholder="Select class"
            value={buildingClassOptions.find((o) => o.value === buildingClass) || null}
            onChange={(e) => onBuildingClassChange(e?.value ?? "all")}
          />
        </label>
        <label className="flex flex-1 flex-col text-xs">
          Size
          <Select
            instanceId="size-select"
            classNamePrefix="vts-ai-select"
            className="flex-1 rounded-lg text-gray-700"
            isClearable
            options={sizeOptions}
            placeholder="Select size"
            value={sizeOptions.find((o) => o.value === size) || null}
            onChange={(e) => onSizeChange(e?.value ?? "all")}
          />
        </label>
      </div>
    </div>
  );
}
