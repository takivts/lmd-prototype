import { useEffect, useState, useImperativeHandle, forwardRef } from "react";
import {
  vtsAiPromptsWithContext,
  vtsAiPromptsWithoutContext,
} from "../data/vts-ai-prompts";
import Typewriter from "typewriter-effect";
import VtsAiHeader from "./_vts-ai-header";
import { usePathname } from "next/navigation";

export interface VtsAiDefaultRef {
  resetConversation: () => void;
}

const VtsAiDefault = forwardRef<
  VtsAiDefaultRef,
  {
    className?: string;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
  }
>(({ className, isOpen, setIsOpen }, ref) => {
  const pathname = usePathname();
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);
  const [response, setResponse] = useState<string | null>();
  const [isLoading, setIsLoading] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prompts, setPrompts] = useState<string[]>(
    pathname === "/vts/lease/deals/profile"
      ? vtsAiPromptsWithContext
      : vtsAiPromptsWithoutContext,
  );

  const resetConversation = () => {
    setSelectedPrompt(null);
    setResponse(null);
    setIsLoading(false);
    setIsTransitioning(false);
    setPrompts(
      pathname === "/vts/lease/deals/profile"
        ? vtsAiPromptsWithContext
        : vtsAiPromptsWithoutContext,
    );
  };

  useEffect(() => {}, [pathname]);

  useImperativeHandle(ref, () => ({
    resetConversation,
  }));

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setSelectedPrompt(null);
        setResponse(null);
        setIsLoading(false);
        setIsTransitioning(false);
      }, 500);
    }
  }, [isOpen]);

  useEffect(() => {
    if (selectedPrompt) {
      setIsLoading(true);
      setResponse(
        "Total requirements dropped by 8.3%, with total square footage demand down 12.1%. This suggests a cooling in tenant activity, particularly in the 50k+ SF segment, which saw the steepest decline. While demand remains above 2023 lows, the current trajectory points to increasing tenant selectivity and extended decision timelines.",
      );
    }
  }, [selectedPrompt]);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [isLoading]);

  const handlePromptClick = (prompt: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedPrompt(prompt);
      setPrompts(vtsAiPromptsWithContext.filter((p) => p !== prompt));
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div
      className={`w-lg rounded-lg text-gray-700 shadow-lg transition-all duration-300 select-none ${className} ${
        isOpen
          ? "opacity-100 select-text"
          : "pointer-events-none opacity-0 select-none"
      }`}
    >
      <div className="relative z-50 rounded-lg border border-gray-300 bg-white text-sm">
        <VtsAiHeader onReset={resetConversation} />
        <div className="flex h-156 flex-col overflow-auto rounded-br-lg rounded-bl-lg p-4">
          <div className="flex h-fit flex-col gap-2">
            <p className="mb-2 text-left">
              Hi, I'm Max. Let me know how I can help you:
            </p>
            <div className={`mb-2 flex flex-col gap-2`}>
              {(selectedPrompt ? [selectedPrompt] : prompts).map((prompt) => (
                <div
                  key={prompt}
                  className={`rounded-lg border px-3 py-2 text-left duration-1000 ease-in-out ${
                    isTransitioning && !selectedPrompt
                      ? `opacity-0`
                      : "opacity-100"
                  } ${
                    selectedPrompt === prompt
                      ? "bg-vts-gray-200 text-vts-gray-700 hover:bg-vts-gray-200 float-right w-4/5 self-end border-gray-200"
                      : "bg-vts-purple-100 text-vts-purple-700 border-vts-purple-300 hover:bg-vts-purple-200 cursor-pointer"
                  }`}
                  onClick={() => handlePromptClick(prompt)}
                >
                  {prompt}
                </div>
              ))}
            </div>
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
              <div className="mb-4 text-sm text-gray-700">
                <Typewriter
                  options={{
                    strings: response ? [response] : [],
                    autoStart: true,
                    loop: false,
                    deleteSpeed: Infinity,
                    delay: 0,
                    cursorClassName: "hidden",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

VtsAiDefault.displayName = "VtsAiDefault";

export default VtsAiDefault;
