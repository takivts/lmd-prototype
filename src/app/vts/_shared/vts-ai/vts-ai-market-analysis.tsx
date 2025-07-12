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
          <div
            className={`bg-vts-gray-200 text-vts-gray-700 hover:bg-vts-gray-200 float-right mb-4 max-w-4/5 self-end rounded-lg border border-gray-200 px-3 py-2 text-left duration-1000 ease-in-out`}
          >
            Give me a market overview for New York
          </div>
          <div className="flex h-fit flex-col gap-4">
            <h5 className="text-lg font-bold">New York</h5>
            <div className="mb-4 flex w-full flex-wrap gap-x-4 gap-y-2 text-sm text-gray-700">
              <div className="bg-vts-gray-200 flex flex-auto justify-between rounded-lg border border-gray-300 px-3 py-2 text-left duration-1000 ease-in-out">
                <span className="font-bold">title</span>
                <span className="">description</span>
              </div>
              <div className="bg-vts-gray-200 flex flex-auto justify-between rounded-lg border border-gray-300 px-3 py-2 text-left duration-1000 ease-in-out">
                <span className="font-bold">title</span>
                <span className="">description</span>
              </div>
              <div className="bg-vts-gray-200 flex flex-auto justify-between rounded-lg border border-gray-300 px-3 py-2 text-left duration-1000 ease-in-out">
                <span className="font-bold">title</span>
                <span className="">description</span>
              </div>
              <div className="bg-vts-gray-200 flex flex-auto justify-between rounded-lg border border-gray-300 px-3 py-2 text-left duration-1000 ease-in-out">
                <span className="font-bold">title</span>
                <span className="">description</span>
              </div>
              <div className="bg-vts-gray-200 flex flex-auto justify-between rounded-lg border border-gray-300 px-3 py-2 text-left duration-1000 ease-in-out">
                <span className="font-bold">title</span>
                <span className="">description</span>
              </div>
              <div className="bg-vts-gray-200 flex flex-auto justify-between rounded-lg border border-gray-300 px-3 py-2 text-left duration-1000 ease-in-out">
                <span className="font-bold">title</span>
                <span className="">description</span>
              </div>
            </div>

            <div className="mb-4 rounded-lg bg-yellow-300/25 p-3">
              <h5 className="mb-1 text-sm font-bold">Key Insights</h5>
              <ul className="flex list-disc flex-col gap-0.5 pl-5">
                <li>New York is a city in the United States.</li>
                <li>New York is a city in the United States.</li>
                <li>New York is a city in the United States.</li>
                <li>New York is a city in the United States.</li>
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
              <h5 className="mb-2 text-sm font-bold">Suggested Follow-Ups</h5>
              <div className="flex flex-col gap-2">
                <div className="bg-vts-purple-100 text-vts-purple-700 border-vts-purple-300 hover:bg-vts-purple-200 cursor-pointer rounded-lg border px-3 py-2 text-left duration-1000 ease-in-out">
                  How is active demand trending up the past quarter in New York?
                </div>
                <div className="bg-vts-purple-100 text-vts-purple-700 border-vts-purple-300 hover:bg-vts-purple-200 cursor-pointer rounded-lg border px-3 py-2 text-left duration-1000 ease-in-out">
                  How is active demand trending up the past quarter in New York?
                </div>
                <div className="bg-vts-purple-100 text-vts-purple-700 border-vts-purple-300 hover:bg-vts-purple-200 cursor-pointer rounded-lg border px-3 py-2 text-left duration-1000 ease-in-out">
                  How is active demand trending up the past quarter in New York?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
