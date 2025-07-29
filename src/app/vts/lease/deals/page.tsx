"use client";

import { dealData } from "./_data";
import DealsTable from "./deals-table";

export default function DealsPage() {
  // useEffect(() => {
  //   const paneContainer = document.createElement("div");
  //   paneContainer.className = "fixed bottom-6 left-16 z-50";
  //   document.body.appendChild(paneContainer);

  //   const PARAMS = {
  //     isUpsell: false,
  //   };

  //   const pane = new Pane({
  //     title: "Prototype Controls",
  //     container: paneContainer,
  //     expanded: false,
  //   });

  //   pane.addBinding(PARAMS, "isUpsell", {
  //     view: "boolean",
  //   });

  //   pane.on("change", (e) => {
  //     setIsUpsell(e.value as boolean);
  //   });

  //   return () => {
  //     pane.dispose();
  //     if (paneContainer.parentNode) {
  //       paneContainer.parentNode.removeChild(paneContainer);
  //     }
  //   };
  // }, [setIsUpsell]);

  return (
    <div className="flex flex-col gap-4 overflow-hidden p-8">
      <div className="">
        <div className="text-xs text-gray-500">
          <span className="">VTS Lease</span> &gt; <span className="font-bold text-gray-700">Deals</span>
        </div>
        <h1 className="text-4xl font-bold">Deals</h1>
      </div>
      <div className="bg-vts-purple-300 flex rounded-lg p-4">Filters</div>
      <div className="flex w-full">
        <div className="w-2/3 pr-6">
          <div className="bg-vts-purple-300 rounded-lg p-4 text-sm">Deal pipeline Chart</div>
          {/* <DealPipelineChart data={pipelineData} /> */}
        </div>
        <div className="w-1/3 pl-6">
          <div className="bg-vts-purple-300 rounded-lg p-4 text-sm">Last updated Chart</div>
          {/* <LastUpdatedChart data={lastUpdatedData} /> */}
        </div>
      </div>
      <DealsTable data={dealData.map((deal) => ({ ...deal, isChecked: false }))} />
    </div>
  );
}
