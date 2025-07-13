import { useState, useEffect, useCallback } from "react";
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
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const marketData = vtsAiData?.marketData;
  const marketMetadata = vtsAiData?.marketMetadata;
  const keyInsights = vtsAiData?.keyInsights;
  const suggestedFollowUps = vtsAiData?.suggestedFollowUps;
  const marketSummary = vtsAiData?.summary;

  const handleStepComplete = useCallback((stepName: string) => {
    setCompletedSteps((prev) => {
      if (!prev.includes(stepName)) {
        const newCompleted = [...prev, stepName];
        return newCompleted;
      }
      return prev;
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      setCompletedSteps([]);

      const timer = setTimeout(() => {
        setIsLoading(false);
        setCompletedSteps(["start"]);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const shouldShowMetadata = completedSteps.includes("start");
  const shouldShowDataGrid = completedSteps.includes("metadata");
  const shouldShowKeyInsights = completedSteps.includes("dataGrid");
  const shouldShowSummary = completedSteps.includes("keyInsights");
  const shouldShowFollowUps = completedSteps.includes("summary");

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
            <div className="flex flex-col gap-4">
              <div
                className={`transition-all duration-500 ${shouldShowMetadata ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              >
                {marketMetadata && shouldShowMetadata && (
                  <VtsAiMetadata
                    data={marketMetadata}
                    onComplete={() => handleStepComplete("metadata")}
                  />
                )}
              </div>

              <div
                className={`transition-all duration-500 ${shouldShowDataGrid ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              >
                {marketData && marketData.length > 0 && shouldShowDataGrid && (
                  <VtsAiDataGrid
                    data={marketData}
                    className="mb-4"
                    onComplete={() => handleStepComplete("dataGrid")}
                  />
                )}
              </div>

              <div
                className={`transition-all duration-500 ${shouldShowKeyInsights ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              >
                {keyInsights &&
                  keyInsights.length > 0 &&
                  shouldShowKeyInsights && (
                    <VtsAiKeyInsights
                      data={keyInsights}
                      className="mb-4"
                      shouldTypewrite={shouldShowKeyInsights}
                      onComplete={() => handleStepComplete("keyInsights")}
                    />
                  )}
              </div>

              <div
                className={`transition-all duration-500 ${shouldShowSummary ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              >
                {marketSummary && shouldShowSummary && (
                  <VtsAiSummary
                    data={{
                      title: "Market Summary",
                      summary: marketSummary,
                    }}
                    className="mb-4"
                    shouldTypewrite={shouldShowSummary}
                    onComplete={() => handleStepComplete("summary")}
                  />
                )}
              </div>

              <div
                className={`transition-all duration-500 ${shouldShowFollowUps ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
              >
                {suggestedFollowUps &&
                  suggestedFollowUps.length > 0 &&
                  shouldShowFollowUps && (
                    <VtsAiSuggestedFollowUps
                      data={suggestedFollowUps}
                      className="mb-4"
                    />
                  )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
