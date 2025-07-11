import { useEffect, useState } from "react";
import { vtsAiPrompts } from "./data/vts-ai-prompts";

export default function VtsAiDefault({
  className,
  isOpen,
  setIsOpen,
}: {
  className?: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);
  const [response, setResponse] = useState<string | null>();
  const [isLoading, setIsLoading] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (selectedPrompt) {
      setIsLoading(true);
      console.log(selectedPrompt);
      setResponse(
        "Total requirements dropped by 8.3%, with total square footage demand down 12.1%. This suggests a cooling in tenant activity, particularly in the 50k+ SF segment, which saw the steepest decline. While demand remains above 2023 lows, the current trajectory points to increasing tenant selectivity and extended decision timelines.",
      );
    }
  }, [selectedPrompt]);

  const handlePromptClick = (prompt: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedPrompt(prompt);
      setIsTransitioning(false);
    }, 1000);
  };

  return (
    <div
      className={`w-lg text-gray-700 shadow-lg transition-all duration-300 select-none ${className} ${
        isOpen
          ? "opacity-100 select-text"
          : "pointer-events-none opacity-0 select-none"
      }`}
    >
      <div
        className="fixed top-0 left-0 h-full w-full bg-black/0"
        onClick={() => setIsOpen(false)}
      />
      <div className="relative z-50 rounded-lg border border-gray-300 bg-white text-sm">
        <div className="bg-vts-purple-700 flex items-center border-b border-gray-300 px-4 py-4 text-white">
          <span className="bg-vts-purple-100 mr-3 h-12 w-12 rounded-full" />
          <div className="flex flex-col">
            <h5 className="text-lg font-bold">VTS MAX AI</h5>
            <span className="text-vts-primary"></span>
          </div>
          <div className="flex grow justify-end">
            <span className="hover:bg-vts-purple-100 text-vts-purple-700 flex cursor-pointer justify-end rounded-lg px-1 py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="flex h-156 flex-col overflow-auto rounded-br-lg rounded-bl-lg p-4">
          <div className="flex h-full flex-col gap-2">
            <p className="mb-2 text-left">
              Hi, I'm Max. Let me know how I can help you with the options
              below:
            </p>
            {selectedPrompt ? (
              <div
                className={`border-vts-purple-200 bg-vts-purple-100 text-vts-purple-700 rounded-lg border px-3 py-2 text-left transition-all duration-300 ease-in-out ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                {selectedPrompt}
              </div>
            ) : (
              <div className={`flex flex-col gap-2`}>
                {vtsAiPrompts.map((prompt, index) => (
                  <button
                    key={prompt}
                    className={`border-vts-purple-200 bg-vts-purple-100 text-vts-purple-700 hover:bg-vts-purple-200 transform cursor-pointer rounded-lg border px-3 py-2 text-left transition-all duration-500 ease-in-out ${
                      isTransitioning
                        ? `delay-[${index * 200}ms] translate-x-1 opacity-0`
                        : "opacity-100"
                    }`}
                    onClick={() => handlePromptClick(prompt)}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}
            {isLoading ? (
              <div className="h-fill flex grow items-center justify-center">
                <svg
                  className={`text-vts-purple-300 animate-spin ${
                    isTransitioning ? "opacity-0" : "opacity-100"
                  }`}
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <path
                    d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-vts-purple-700"
                  ></path>
                </svg>
              </div>
            ) : (
              <p className="mb-6 text-base text-gray-600">{response}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
