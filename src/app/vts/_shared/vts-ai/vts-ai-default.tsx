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
    setIsOpen: (isOpen: boolean) => void;
  }
>(({ className, isOpen, setIsOpen }, ref) => {
  const pathname = usePathname();
  const { vtsAiData, setVtsAiContentType } = useAppContext();
  const [selectedPrompt, setSelectedPrompt] = useState<VtsAiPrompt | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prompts, setPrompts] = useState<VtsAiPrompt[]>([]);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);

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
    setCompletedSteps([]);
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
        setCompletedSteps([]);
      }, 500);
    }
  }, [isOpen]);

  const handlePromptClick = useCallback((prompt: VtsAiPrompt) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedPrompt(prompt);
      setPrompts((prev) => prev.filter((p) => p.prompt !== prompt.prompt));
      setIsTransitioning(false);
    }, 500);
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
        setVtsAiContentType("default");
      }
    }
  }, [isOpen, vtsAiData, pathname, setVtsAiContentType]);

  useEffect(() => {
    if (selectedPrompt) {
      setIsLoading(true);
      setCompletedSteps([]);

      const timer = setTimeout(() => {
        setIsLoading(false);
        setCompletedSteps(["start"]);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [selectedPrompt]);

  const handleStepComplete = useCallback((stepName: string) => {
    setCompletedSteps((prev) => {
      if (!prev.includes(stepName)) {
        return [...prev, stepName];
      }
      return prev;
    });
  }, []);

  // Auto-advance steps for missing components
  useEffect(() => {
    if (!selectedPrompt || !completedSteps.includes("start")) return;

    const payload = selectedPrompt.payload;

    // Auto-advance metadata step if no metadata
    if (
      completedSteps.includes("start") &&
      !completedSteps.includes("metadata")
    ) {
      if (!payload.marketMetadata) {
        setTimeout(() => handleStepComplete("metadata"), 100);
      }
    }

    // Auto-advance dataGrid step if no marketData
    if (
      completedSteps.includes("metadata") &&
      !completedSteps.includes("dataGrid")
    ) {
      if (!payload.marketData || payload.marketData.length === 0) {
        setTimeout(() => handleStepComplete("dataGrid"), 100);
      }
    }

    // Auto-advance keyInsights step if no keyInsights
    if (
      completedSteps.includes("dataGrid") &&
      !completedSteps.includes("keyInsights")
    ) {
      if (!payload.keyInsights || payload.keyInsights.length === 0) {
        setTimeout(() => handleStepComplete("keyInsights"), 100);
      }
    }

    // Auto-advance summary step if no summary
    if (
      completedSteps.includes("keyInsights") &&
      !completedSteps.includes("summary")
    ) {
      if (!payload.summary) {
        setTimeout(() => handleStepComplete("summary"), 100);
      }
    }
  }, [selectedPrompt, completedSteps, handleStepComplete]);

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
        <VtsAiHeader onReset={resetConversation} />
        <div className="flex h-156 flex-col overflow-auto rounded-br-lg rounded-bl-lg p-4">
          <div className="flex h-fit flex-col gap-2">
            {!selectedPrompt && (
              <>
                <p className="mb-2 text-left">
                  Hi, I'm Max. Let me know how I can help you:
                </p>
                <div className={`mb-2 flex flex-col gap-2`}>
                  {prompts.map((prompt) => (
                    <div
                      key={prompt.prompt}
                      className={`rounded-lg border px-3 py-2 text-left duration-1000 ease-in-out ${
                        isTransitioning ? `opacity-0` : "opacity-100"
                      } bg-vts-purple-100 text-vts-purple-700 border-vts-purple-300 hover:bg-vts-purple-200 cursor-pointer`}
                      onClick={() => handlePromptClick(prompt)}
                    >
                      {prompt.prompt}
                    </div>
                  ))}
                </div>
              </>
            )}

            {selectedPrompt && (
              <div
                className={`bg-vts-gray-200 text-vts-gray-700 hover:bg-vts-gray-200 float-right mb-4 max-w-4/5 self-end rounded-lg border border-gray-200 px-3 py-2 text-left duration-1000 ease-in-out`}
              >
                {selectedPrompt.prompt}
              </div>
            )}
            {isLoading ? (
              <VtsAiLoader isVisible={!isTransitioning} />
            ) : (
              selectedPrompt &&
              responsePayload && (
                <div className="flex flex-col gap-4">
                  {responsePayload.marketMetadata && shouldShowMetadata && (
                    <div
                      className={`transition-all duration-500 ${
                        shouldShowMetadata
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      }`}
                    >
                      <VtsAiMetadata
                        data={responsePayload.marketMetadata}
                        onComplete={() => handleStepComplete("metadata")}
                      />
                    </div>
                  )}
                  {responsePayload.marketData &&
                    responsePayload.marketData.length > 0 &&
                    shouldShowDataGrid && (
                      <div
                        className={`transition-all duration-500 ${
                          shouldShowDataGrid
                            ? "translate-y-0 opacity-100"
                            : "translate-y-4 opacity-0"
                        }`}
                      >
                        <VtsAiDataGrid
                          data={responsePayload.marketData}
                          onComplete={() => handleStepComplete("dataGrid")}
                        />
                      </div>
                    )}
                  {responsePayload.keyInsights &&
                    responsePayload.keyInsights.length > 0 &&
                    shouldShowKeyInsights && (
                      <div
                        className={`transition-all duration-500 ${
                          shouldShowKeyInsights ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <VtsAiKeyInsights
                          data={responsePayload.keyInsights}
                          shouldTypewrite={true}
                          onComplete={() => handleStepComplete("keyInsights")}
                        />
                      </div>
                    )}
                  {responsePayload.summary && shouldShowSummary && (
                    <div
                      className={`transition-all duration-500 ${
                        shouldShowSummary ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <VtsAiSummary
                        data={{
                          title: "Summary",
                          summary: responsePayload.summary,
                        }}
                        shouldTypewrite={true}
                        onComplete={() => handleStepComplete("summary")}
                      />
                    </div>
                  )}
                  {responsePayload.suggestedFollowUps &&
                    responsePayload.suggestedFollowUps.length > 0 &&
                    shouldShowFollowUps && (
                      <div
                        className={`transition-all duration-500 ${
                          shouldShowFollowUps
                            ? "translate-y-0 opacity-100"
                            : "translate-y-4 opacity-0"
                        }`}
                      >
                        <VtsAiSuggestedFollowUps
                          data={responsePayload.suggestedFollowUps}
                          onFollowUpClick={handleFollowUpClick}
                        />
                      </div>
                    )}
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
