import { useEffect, useState, useImperativeHandle, forwardRef } from "react";
import {
  vtsAiPromptsWithContext,
  vtsAiPromptsWithoutContext,
} from "../data/vts-ai-prompts";
import Typewriter from "typewriter-effect";
import VtsAiHeader from "./_vts-ai-header";
import { usePathname } from "next/navigation";
import VtsAiLoader from "./_vts-ai-loader";

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
  const [prompts, setPrompts] = useState<string[]>([]);

  useEffect(() => {
    setPrompts(
      pathname === "/vts/lease/deals/profile"
        ? vtsAiPromptsWithContext
        : vtsAiPromptsWithoutContext,
    );
  }, [pathname]);

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
      setPrompts(prompts.filter((p) => p !== prompt));
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
                      ? "bg-vts-gray-200 text-vts-gray-700 hover:bg-vts-gray-200 float-right max-w-4/5 self-end border-gray-200"
                      : "bg-vts-purple-100 text-vts-purple-700 border-vts-purple-300 hover:bg-vts-purple-200 cursor-pointer"
                  }`}
                  onClick={() => handlePromptClick(prompt)}
                >
                  {prompt}
                </div>
              ))}
            </div>
            {isLoading ? (
              <VtsAiLoader isVisible={!isTransitioning} />
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
