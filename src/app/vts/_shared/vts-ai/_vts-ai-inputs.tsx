"use client";

import Select from "react-select";
import {
  industriesOptions,
  submarketOptions,
  marketOptions,
  buildingClassOptions,
  sizeOptions,
} from "../data/vts-ai-inputs";
import { useEffect, useState } from "react";

export default function VtsAiInputs({
  marketContext,
  submarketContext,
  industryContext,
  buildingClassContext,
  sizeContext,
}: {
  marketContext: string;
  submarketContext: string;
  industryContext: string;
  buildingClassContext: string;
  sizeContext: string;
}) {
  const [market, setMarket] = useState<string>(marketContext);
  const [submarket, setSubmarket] = useState<string>(submarketContext);
  const [industry, setIndustry] = useState<string>(industryContext);
  const [buildingClass, setBuildingClass] =
    useState<string>(buildingClassContext);
  const [size, setSize] = useState<string>(sizeContext);

  useEffect(() => {
    setMarket(marketContext);
    setSubmarket(submarketContext);
    setIndustry(industryContext);
    setBuildingClass(buildingClassContext);
    setSize(sizeContext);
  }, [
    marketContext,
    submarketContext,
    industryContext,
    buildingClassContext,
    sizeContext,
  ]);

  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-2">
        <label className="flex flex-1 flex-col text-xs">
          Market
          <Select
            instanceId="market-select"
            className="mb-2 flex-1 rounded-lg text-gray-700 focus:outline-none"
            options={marketOptions}
            placeholder="Select market"
            value={marketOptions.find((o) => o.value === market) || null}
            onChange={(e) => setMarket(e?.value ?? "all")}
          />
        </label>

        <label className="flex flex-1 flex-col text-xs">
          Submarket
          <Select
            instanceId="submarket-select"
            className="mb-2 flex-1 rounded-lg text-gray-700 focus:outline-none"
            options={submarketOptions}
            placeholder="Select submarket"
            value={submarketOptions.find((o) => o.value === submarket) || null}
            onChange={(e) => setSubmarket(e?.value ?? "any")}
          />
        </label>
      </div>
      <div className="flex gap-2">
        <label className="flex flex-1 flex-col text-xs">
          Industries
          <Select
            instanceId="industries-select"
            className="mb-2 flex-1 rounded-lg text-gray-700 focus:outline-none"
            options={industriesOptions}
            placeholder="Select industry"
            value={industriesOptions.find((o) => o.value === industry) || null}
            onChange={(e) => setIndustry(e?.value ?? "all")}
          />
        </label>
        <label className="flex flex-1 flex-col text-xs">
          Building Class
          <Select
            instanceId="building-class-select"
            className="mb-2 flex-1 rounded-lg text-gray-700 focus:outline-none"
            options={buildingClassOptions}
            placeholder="Select class"
            value={
              buildingClassOptions.find((o) => o.value === buildingClass) ||
              null
            }
            onChange={(e) => setBuildingClass(e?.value ?? "all")}
          />
        </label>
        <label className="flex flex-1 flex-col text-xs">
          Size
          <Select
            instanceId="size-select"
            className="mb-2 flex-1 rounded-lg text-gray-700 focus:outline-none"
            options={sizeOptions}
            placeholder="Select size"
            value={sizeOptions.find((o) => o.value === size) || null}
            onChange={(e) => setSize(e?.value ?? "all")}
          />
        </label>
      </div>
    </div>
  );
}
