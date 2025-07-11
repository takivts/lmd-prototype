import VtsAiHeader from "./_vts-ai-header";

export default function VtsAiMarketAnalysis({
  className,
  isOpen,
  setIsOpen,
}: {
  className?: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
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
          <div className="flex h-fit flex-col gap-4">
            <h5 className="text-lg font-bold">New York</h5>
            <div className="mb-4 flex flex-col gap-1">
              <div className="flex justify-between">
                <span className="text-sm font-bold">title</span>
                <span className="text-sm">description</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-bold">title</span>
                <span className="text-sm">description</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-bold">title</span>
                <span className="text-sm">description</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-bold">title</span>
                <span className="text-sm">description</span>
              </div>
            </div>
            <div className="mb-4 rounded-lg bg-yellow-300/25 p-3">
              <h5 className="mb-1 text-sm font-bold">Key Insights</h5>
              <ul>
                <li>New York is a city in the United States.</li>
                <li>New York is a city in the United States.</li>
                <li>New York is a city in the United States.</li>
                <li>New York is a city in the United States.</li>{" "}
                <li>New York is a city in the United States.</li>
              </ul>
            </div>
            <div className="mb-4">
              <h5 className="mb-1 text-sm font-bold">Market Summary</h5>
              <p>
                New York is a city in the United States. New York is a city in
                the United States. New York is a city in the United States. New
                York is a city in the United States. New York is a city in the
                United States.
              </p>
            </div>
            <div className="mb-4">
              <h5 className="mb-1 text-sm font-bold">Suggested Follow-Ups</h5>
              <p>
                New York is a city in the United States. New York is a city in
                the United States. New York is a city in the United States. New
                York is a city in the United States. New York is a city in the
                United States.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
