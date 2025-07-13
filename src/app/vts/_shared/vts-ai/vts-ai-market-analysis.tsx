import { useState, useEffect } from "react";
import VtsAiDataGrid from "./_vts-ai-data-grid";
import VtsAiHeader from "./_vts-ai-header";
import VtsAiKeyInsights from "./_vts-ai-key-insights";
import VtsAiSummary from "./vts-ai-summary";
import VtsAiSuggestedFollowUps from "./_vts-ai-suggested-follow-ups";
import VtsAiMetadata from "./_vts-ai-metadata";
import VtsAiLoader from "./_vts-ai-loader";
import { useAppContext } from "@/app/context/AppContext";

export default function VtsAiMarketAnalysis({
  className,
  isOpen,
  setIsOpen,
}: {
  className?: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const { vtsAiData } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);

  const marketData = vtsAiData?.marketData;
  const marketMetadata = vtsAiData?.marketMetadata;
  const keyInsights = vtsAiData?.keyInsights;
  const suggestedFollowUps = vtsAiData?.suggestedFollowUps;
  const marketSummary = vtsAiData?.summary;

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <div
      className={`w-lg rounded-lg text-gray-700 shadow-lg transition-all duration-300 select-none ${className} ${
        isOpen
          ? "opacity-100 select-text"
          : "pointer-events-none opacity-0 select-none"
      }`}
    >
      <div className="relative z-50 rounded-lg border border-gray-300 bg-white text-sm">
        <VtsAiHeader />
        <div className="flex h-156 flex-col overflow-auto rounded-br-lg rounded-bl-lg p-4 text-gray-700">
          <div
            className={`bg-vts-gray-200 text-vts-gray-700 hover:bg-vts-gray-200 float-right mb-4 max-w-4/5 self-end rounded-lg border border-gray-200 px-3 py-2 text-left duration-1000 ease-in-out`}
          >
            Give me a market overview for New York
          </div>
          {isLoading ? (
            <VtsAiLoader isVisible={true} />
          ) : (
            <div className="flex h-fit flex-col gap-4">
              <VtsAiMetadata data={marketMetadata} />
              <VtsAiDataGrid data={marketData || []} className="mb-4" />
              <VtsAiKeyInsights data={keyInsights || []} className="mb-4" />
              <VtsAiSummary
                data={{
                  title: "Market Summary",
                  summary: marketSummary || "",
                }}
                className="mb-4"
              />
              <VtsAiSuggestedFollowUps
                data={suggestedFollowUps || []}
                className="mb-4"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
