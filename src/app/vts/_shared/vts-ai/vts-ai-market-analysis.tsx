import VtsAiDataGrid from "./_vts-ai-data-grid";
import VtsAiHeader from "./_vts-ai-header";
import VtsAiKeyInsights from "./_vts-ai-key-insights";
import VtsAiSummary from "./vts-ai-summary";
import VtsAiSuggestedFollowUps from "./_vts-ai-suggested-follow-ups";

export default function VtsAiMarketAnalysis({
  className,
  isOpen,
  setIsOpen,
}: {
  className?: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const marketData = [
    { label: "Avg. Gross NER", value: "description" },
    { label: "Avg. TI", value: "description" },
    { label: "Avg. Free Rent", value: "description" },
    { label: "# active proposals", value: "description" },
  ];

  const keyInsights = [
    "New York is a city in the United States.",
    "New York is a city in the United States.",
    "New York is a city in the United States.",
    "New York is a city in the United States.",
    "New York is a city in the United States.",
  ];

  const suggestedFollowUps = [
    "How is active demand trending up the past quarter in New York?",
    "How is active demand trending up the past quarter in New York?",
    "How is active demand trending up the past quarter in New York?",
  ];

  const marketSummary =
    "New York is a city in the United States. New York is a city in the United States. New York is a city in the United States. New York is a city in the United States. New York is a city in the United States.";

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
          <div className="flex h-fit flex-col gap-4">
            <h5 className="text-lg font-bold">New York</h5>
            <VtsAiDataGrid data={marketData} className="mb-4" />
            <VtsAiKeyInsights data={keyInsights} className="mb-4" />
            <VtsAiSummary
              data={{ title: "Market Summary", summary: marketSummary }}
              className="mb-4"
            />
            <VtsAiSuggestedFollowUps
              data={suggestedFollowUps}
              className="mb-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
