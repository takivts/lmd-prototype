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
        <div className="flex items-center border-b border-gray-300 px-4 py-4">
          <img
            src="/logo-starbucks.svg"
            alt="Starbucks Logo"
            className="mr-3 h-12 w-12 rounded-full"
          />
          <div className="flex flex-col">
            <h5 className="text-lg">Market</h5>
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
          <p className="mb-6 text-base text-gray-600">
            Hi, I'm Max. Let me know how I can help you with the options below
          </p>
          <div className="flex flex-col gap-2">
            {vtsAiPrompts.map((prompt) => (
              <button
                key={prompt}
                className="border-vts-purple-200 bg-vts-purple-100 text-vts-purple-700 hover:bg-vts-purple-200 cursor-pointer rounded-lg border px-3 py-2 text-left transition-all duration-300"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
