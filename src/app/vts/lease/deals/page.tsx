"use client";

import { dealData, lastUpdatedData, pipelineData } from "./_data";
import DealPipelineChart from "./deal-pipeline-chart";
import DealsTable from "./deals-table";
import LastUpdatedChart from "./last-updated-chart";

export default function DealsPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl font-bold">Deals</h1>
      <div className="bg-vts-purple-300 flex h-10"></div>
      <div className="flex w-full gap-4">
        <div className="w-2/3">
          <DealPipelineChart data={pipelineData} />
        </div>
        <div className="w-1/3">
          <LastUpdatedChart data={lastUpdatedData} />
        </div>
      </div>
      <DealsTable data={dealData} />
    </div>
  );
}
