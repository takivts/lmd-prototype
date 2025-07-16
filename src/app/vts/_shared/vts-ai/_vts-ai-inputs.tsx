"use client";

import Select from "react-select";
import {
  industriesOptions,
  submarketOptions,
  marketOptions,
} from "../data/vts-ai-inputs";
import { useState } from "react";

export default function VtsAiInputs() {
  const [market, setMarket] = useState<string | null>("all");
  const [submarket, setSubmarket] = useState<string | null>("any");
  const [industry, setIndustry] = useState<string | null>("all");

  return (
    <div className="flex gap-2">
      <label className="flex flex-1 flex-col text-xs">
        Market
        <Select
          instanceId="market-select"
          className="mb-2 flex-1 rounded-lg text-gray-700 focus:outline-none"
          options={marketOptions}
          placeholder="Select market"
          value={marketOptions.find((o) => o.value === market) || null}
          onChange={(e) => setMarket(e?.value ?? null)}
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
          onChange={(e) => setSubmarket(e?.value ?? null)}
        />
      </label>

      <label className="flex flex-1 flex-col text-xs">
        Industries
        <Select
          instanceId="industries-select"
          className="mb-2 flex-1 rounded-lg text-gray-700 focus:outline-none"
          options={industriesOptions}
          placeholder="Select industry"
          value={industriesOptions.find((o) => o.value === industry) || null}
          onChange={(e) => setIndustry(e?.value ?? null)}
        />
      </label>
    </div>
  );
}
