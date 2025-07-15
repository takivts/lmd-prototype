"use client";

import {
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
  useCallback,
} from "react";
import {
  vtsAiPromptsWithContext,
  vtsAiPromptsWithoutContext,
} from "../data/vts-ai-prompts";
import VtsAiHeader from "./_vts-ai-header";
import { usePathname } from "next/navigation";
import VtsAiLoader from "./_vts-ai-loader";
import VtsAiKeyInsights from "./_vts-ai-key-insights";
import VtsAiSummary from "./vts-ai-summary";
import VtsAiSuggestedFollowUps from "./_vts-ai-suggested-follow-ups";
import VtsAiMetadata from "./_vts-ai-metadata";
import { VtsAiPrompt } from "../data/vts-ai-prompts";
import VtsAiDataGrid from "./_vts-ai-data-grid";
import { useAppContext } from "@/app/context/AppContext";

export interface VtsAiDefaultRef {
  resetConversation: () => void;
}

const VtsAiDefault = forwardRef<
  VtsAiDefaultRef,
  {
    className?: string;
    isOpen: boolean;
  }
>(({ className, isOpen }, ref) => {
  const pathname = usePathname();
  const { vtsAiData, setVtsAiContentType } = useAppContext();
  const [selectedPrompt, setSelectedPrompt] = useState<VtsAiPrompt | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prompts, setPrompts] = useState<VtsAiPrompt[]>([]);
  const [isUpsell] = useState(false);

  useEffect(() => {
    setPrompts(
      pathname === "/vts/lease/deals/profile"
        ? vtsAiPromptsWithContext
        : vtsAiPromptsWithoutContext,
    );
  }, [pathname]);

  const resetConversation = () => {
    setSelectedPrompt(null);
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
        setIsLoading(false);
        setIsTransitioning(false);
      }, 500);
    }
  }, [isOpen]);

  const handlePromptClick = useCallback((prompt: VtsAiPrompt) => {
    setIsTransitioning(true);
    setSelectedPrompt(prompt);
    setPrompts((prev) => prev.filter((p) => p.prompt !== prompt.prompt));
    setTimeout(() => {
      setIsTransitioning(false);
    }, 0);
  }, []);

  useEffect(() => {
    if (isOpen && vtsAiData) {
      const allPrompts =
        pathname === "/vts/lease/deals/profile"
          ? vtsAiPromptsWithContext
          : vtsAiPromptsWithoutContext;

      const matchedPrompt = allPrompts.find(
        (p) => JSON.stringify(p.payload) === JSON.stringify(vtsAiData),
      );

      if (matchedPrompt) {
        setSelectedPrompt(matchedPrompt);
        setPrompts((prev) =>
          prev.filter((p) => p.prompt !== matchedPrompt.prompt),
        );
      }
    }
  }, [isOpen, vtsAiData, pathname, setVtsAiContentType]);

  useEffect(() => {
    if (selectedPrompt) {
      setIsLoading(true);

      const timer = setTimeout(
        () => {
          setIsLoading(false);
        },
        Math.random() * 2000 + 2000,
      );

      return () => clearTimeout(timer);
    }
  }, [selectedPrompt]);

  const handleFollowUpClick = (followUp: string) => {
    const allPrompts =
      pathname === "/vts/lease/deals/profile"
        ? vtsAiPromptsWithContext
        : vtsAiPromptsWithoutContext;

    const prompt = allPrompts.find((p) => p.prompt === followUp);

    if (prompt) {
      handlePromptClick(prompt);
    }
  };

  const responsePayload = selectedPrompt?.payload;

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
            {!selectedPrompt && (
              <>
                <p className="mb-2 text-left">
                  Hi, I&apos;m Max. Let me know how I can help you:
                </p>
                <div className={`mb-2 flex flex-col gap-2`}>
                  {prompts.map((prompt) => (
                    <div
                      key={prompt.prompt}
                      className={`rounded-lg border px-3 py-2 text-left duration-300 ease-in-out ${
                        isTransitioning ? `opacity-0` : "opacity-100"
                      } bg-vts-purple-100 text-vts-purple-700 border-vts-purple-300 hover:bg-vts-purple-200 hover:border-vts-purple-400 cursor-pointer`}
                      onClick={() => handlePromptClick(prompt)}
                    >
                      {prompt.prompt}
                    </div>
                  ))}
                </div>
              </>
            )}

            {selectedPrompt && (
              <>
                {isUpsell && (
                  <div className="bg-vts-purple-100 border-vts-purple-300 mb-2 flex flex-col gap-2 rounded-lg border p-4">
                    <h3 className="font-bold">
                      Unlock the full potential of VTS AI
                    </h3>
                    <p>
                      You are seeing a preview of VTS AI. To get full access to
                      AI-powered market data and insights{" "}
                      <a
                        className="underline"
                        href="https://www.vts.com/vts-data"
                        target="_blank"
                      >
                        upgrade to VTS
                      </a>
                      .
                    </p>
                  </div>
                )}
                <div
                  className={`bg-vts-gray-200 text-vts-gray-700 hover:bg-vts-gray-200 float-right mb-2 max-w-4/5 self-end rounded-lg border border-gray-200 px-3 py-2 text-left duration-300 ease-in-out ${
                    isTransitioning ? `opacity-0` : "opacity-100"
                  }`}
                >
                  {selectedPrompt.prompt}
                </div>
              </>
            )}
            {isLoading ? (
              <VtsAiLoader
                className={` ${isTransitioning ? "opacity-0" : "opacity-100"}`}
              />
            ) : (
              selectedPrompt &&
              responsePayload && (
                <div className="flex flex-col gap-2">
                  {responsePayload.marketMetadata?.category &&
                    responsePayload.marketMetadata.category.length > 0 && (
                      <VtsAiMetadata
                        data={{
                          ...responsePayload.marketMetadata,
                          category: responsePayload.marketMetadata.category,
                        }}
                      />
                    )}

                  {responsePayload.marketData &&
                    responsePayload.marketData.length > 0 && (
                      <VtsAiDataGrid
                        isUpsell={isUpsell}
                        data={responsePayload.marketData || []}
                        className="mb-4"
                      />
                    )}

                  {responsePayload.summary &&
                    responsePayload.summary.length > 0 && (
                      <VtsAiSummary
                        data={{
                          summary: responsePayload.summary,
                        }}
                        className="mb-4"
                      />
                    )}

                  {responsePayload.keyInsights &&
                    responsePayload.keyInsights.length > 0 && (
                      <VtsAiKeyInsights
                        isUpsell={isUpsell}
                        data={{
                          insights: responsePayload.keyInsights,
                        }}
                        className="mb-4"
                      />
                    )}

                  <VtsAiSuggestedFollowUps
                    data={responsePayload.suggestedFollowUps || []}
                    onFollowUpClick={handleFollowUpClick}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

VtsAiDefault.displayName = "VtsAiDefault";

export default VtsAiDefault;
