"use client";

import { useEffect, useState, useImperativeHandle, forwardRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { vtsAiPromptsWithContext, vtsAiPromptsWithoutContext } from "../data/vts-ai-prompts";
import VtsAiHeader from "./_vts-ai-header";
import { usePathname } from "next/navigation";
import VtsAiLoader from "./_vts-ai-loader";
import VtsAiKeyInsights from "./_vts-ai-key-insights";
import VtsAiSummary from "./vts-ai-summary";
import VtsAiSuggestedFollowUps from "./_vts-ai-suggested-follow-ups";
import { VtsAiPrompt } from "../data/vts-ai-prompts";
import VtsAiDataGrid from "./_vts-ai-data-grid";
import { useAppContext } from "@/app/context/AppContext";
import VtsAiInputs from "./_vts-ai-inputs";
import { marketSubmarketMap } from "../data/vts-ai-inputs";
import VtsAiUpsell from "./_vts-ai-upsell";

const submarketToMarketMap: Record<string, string> = Object.entries(marketSubmarketMap).reduce(
  (acc, [market, submarkets]) => {
    submarkets.forEach((submarket) => {
      acc[submarket] = market;
    });
    return acc;
  },
  {} as Record<string, string>,
);

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
  const { vtsAiData, setVtsAiContentType, isUpsell, isPromptError, showChatInput } = useAppContext();
  const [selectedPrompt, setSelectedPrompt] = useState<VtsAiPrompt | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [prompts, setPrompts] = useState<VtsAiPrompt[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Deal Economics");
  const [market, setMarket] = useState<string>("all");
  const [submarket, setSubmarket] = useState<string>("all");
  const [industry, setIndustry] = useState<string>("all");
  const [buildingClass, setBuildingClass] = useState<string>("all");
  const [size, setSize] = useState<string>("all");

  const categories = [
    { label: "Deal economics", value: "Deal Economics" },
    { label: "Market demand", value: "Market Demand" },
    { label: "Strategic planning", value: "Strategic Planning" },
  ];

  const initializeInputs = useCallback(() => {
    if (pathname === "/vts/lease/deals/profile") {
      setMarket("new-york");
      setSubmarket("midtown");
      setIndustry("tech");
      setBuildingClass("trophy");
      setSize("50k+");
    } else {
      setMarket("all");
      setSubmarket("all");
      setIndustry("all");
      setBuildingClass("all");
      setSize("all");
    }
  }, [pathname]);

  useEffect(() => {
    initializeInputs();
  }, [initializeInputs]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const promptContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  useEffect(() => {
    setPrompts(pathname === "/vts/lease/deals/profile" ? vtsAiPromptsWithContext : vtsAiPromptsWithoutContext);
  }, [pathname]);

  const resetConversation = () => {
    setSelectedPrompt(null);
    setIsLoading(false);
    setIsTransitioning(false);
    setPrompts(pathname === "/vts/lease/deals/profile" ? vtsAiPromptsWithContext : vtsAiPromptsWithoutContext);
    initializeInputs();
    setSelectedCategory("Deal Economics");
  };

  const retryPrompt = () => {
    if (selectedPrompt) {
      setIsLoading(true);
      setTimeout(
        () => {
          setIsLoading(false);
        },
        Math.random() * 2000 + 3000,
      );
    }
  };

  useImperativeHandle(ref, () => ({
    resetConversation,
  }));

  useEffect(() => {
    if (!isOpen) {
      setSelectedPrompt(null);
      setIsLoading(false);
      setIsTransitioning(false);
    }
  }, [isOpen]);

  const handlePromptClick = useCallback((prompt: VtsAiPrompt) => {
    setIsTransitioning(true);
    setSelectedPrompt(prompt);
    setIsTransitioning(false);
  }, []);

  useEffect(() => {
    if (isOpen && vtsAiData) {
      const allPrompts = pathname === "/vts/lease/deals/profile" ? vtsAiPromptsWithContext : vtsAiPromptsWithoutContext;
      const matchedPrompt = allPrompts.find((p) => JSON.stringify(p.payload) === JSON.stringify(vtsAiData));

      if (matchedPrompt) {
        setSelectedPrompt(matchedPrompt);
      }
    }
  }, [isOpen, vtsAiData, pathname, setVtsAiContentType]);

  useEffect(() => {
    if (selectedPrompt) {
      setIsLoading(true);
      setTimeout(
        () => {
          setIsLoading(false);
        },
        Math.random() * 2000 + 3000,
      );
    }
  }, [selectedPrompt]);

  const handleFollowUpClick = (followUp: string) => {
    const allPrompts = pathname === "/vts/lease/deals/profile" ? vtsAiPromptsWithContext : vtsAiPromptsWithoutContext;
    const prompt = allPrompts.find((p) => p.prompt === followUp);

    if (prompt) {
      handlePromptClick(prompt);
    }
  };

  const responsePayload = selectedPrompt?.payload;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`layered-shadow animate-ai-linear-gradient z-50 flex h-180 w-lg flex-col rounded-4xl bg-[linear-gradient(110deg,var(--color-vts-ai-light)_0%,var(--color-vts-ai-medium)_10%,var(--color-vts-ai-dark)_50%,var(--color-vts-ai-gray)_100%)] bg-[length:200%_200%] p-4 text-gray-700 ${className}`}
        >
          <VtsAiHeader onReset={resetConversation} />
          <div
            className={`relative z-50 w-full overflow-auto bg-white text-sm ${
              showChatInput ? "h-[calc(100%-104px)] rounded-t-[1.25rem]" : "h-[calc(100%-56px)] rounded-[1.25rem]"
            }`}
          >
            <div className="flex h-full flex-col overflow-auto p-4">
              <motion.div
                className="flex h-full flex-col gap-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {!selectedPrompt && (
                  <div className="flex flex-col gap-4 pb-4">
                    <div className="flex flex-col">
                      <p className="mb-2 text-left">Hi, I&apos;m Max.</p>
                      <p className="text-left">
                        Choose the market, submarket or industry and then select a prompt and I will provide you with
                        insights:
                      </p>
                    </div>
                    <VtsAiInputs
                      market={market}
                      onMarketChange={(value) => {
                        setMarket(value);
                        setSubmarket("all");
                      }}
                      submarket={submarket}
                      onSubmarketChange={(value) => {
                        setSubmarket(value);
                        if (value !== "all") {
                          setMarket(submarketToMarketMap[value]);
                        }
                      }}
                      industry={industry}
                      onIndustryChange={setIndustry}
                      buildingClass={buildingClass}
                      onBuildingClassChange={setBuildingClass}
                      size={size}
                      onSizeChange={setSize}
                    />
                    <motion.div variants={itemVariants} className="mt-2 flex justify-center gap-2">
                      {categories.map((category) => (
                        <span
                          key={category.value}
                          className={`border-vts-purple-300 cursor-pointer rounded-full border px-3 py-1 text-center text-xs transition-all duration-200 ${
                            selectedCategory === category.value
                              ? "bg-[linear-gradient(45deg,var(--color-vts-ai-light)_0%,var(--color-vts-ai-medium)_10%,var(--color-vts-ai-dark)_50%,var(--color-vts-ai-gray)_200%)] text-white transition-all duration-200 hover:brightness-120"
                              : "text-vts-purple-700 hover:bg-vts-purple-100"
                          }`}
                          onClick={() => setSelectedCategory(category.value)}
                        >
                          {category.label}
                        </span>
                      ))}
                    </motion.div>
                    <motion.div
                      className={`mb-2 flex flex-col gap-2`}
                      variants={promptContainerVariants}
                      initial="hidden"
                      animate={isOpen ? "visible" : "hidden"}
                    >
                      {prompts
                        .filter((p) => p.payload.marketMetadata?.category === selectedCategory)
                        .map((prompt) => (
                          <motion.div
                            key={prompt.prompt}
                            variants={itemVariants}
                            className={`bg-vts-purple-100 text-vts-purple-700 border-vts-purple-300 hover:bg-vts-purple-200 cursor-pointer rounded-2xl border px-3 py-2 text-left transition-all duration-200`}
                            onClick={() => handlePromptClick(prompt)}
                          >
                            {prompt.prompt}
                          </motion.div>
                        ))}
                    </motion.div>
                  </div>
                )}

                {selectedPrompt && (
                  <>
                    {isUpsell && (
                      <motion.div variants={itemVariants}>
                        <VtsAiUpsell />
                      </motion.div>
                    )}
                    <motion.div className="mb-2 flex gap-4" variants={itemVariants}>
                      <div className="flex grow flex-col overflow-hidden">
                        <span className="text-xs leading-none text-gray-400">Market</span>
                        <span className="truncate text-gray-700">{market}</span>
                      </div>
                      <div className="flex grow flex-col overflow-hidden">
                        <span className="text-xs leading-none text-gray-400">Submarket</span>
                        <span className="truncate text-gray-700">{submarket}</span>
                      </div>
                      <div className="flex grow flex-col overflow-hidden">
                        <span className="text-xs leading-none text-gray-400">Industry</span>
                        <span className="truncate text-gray-700">{industry}</span>
                      </div>
                      <div className="flex grow flex-col overflow-hidden">
                        <span className="text-xs leading-none text-gray-400">Building Class</span>
                        <span className="truncate text-gray-700">{buildingClass}</span>
                      </div>
                      <div className="flex grow flex-col overflow-hidden">
                        <span className="text-xs leading-none text-gray-400">Size</span>
                        <span className="truncate text-gray-700">{size}</span>
                      </div>
                    </motion.div>

                    <motion.div
                      className={`bg-vts-gray-200 text-vts-gray-700 hover:bg-vts-gray-200 float-right mb-2 max-w-4/5 self-end rounded-2xl border border-gray-200 px-3 py-2 text-left`}
                      variants={itemVariants}
                    >
                      {selectedPrompt.prompt}
                    </motion.div>
                  </>
                )}
                {isLoading ? (
                  <VtsAiLoader className={` ${isTransitioning ? "opacity-0" : "opacity-100"}`} />
                ) : (
                  selectedPrompt &&
                  responsePayload &&
                  (isPromptError ? (
                    <div className="flex flex-col gap-1 pb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="mx-auto size-8 text-orange-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                        />
                      </svg>

                      <p className="text-vts-gray-700 text-center">We are having trouble processing your request.</p>
                      <button
                        className="text-vts-gray-700 text-vts-purple-700 hover:text-vts-purple-800 cursor-pointer text-center underline transition-all duration-200"
                        onClick={() => retryPrompt()}
                      >
                        Try again
                      </button>
                    </div>
                  ) : (
                    <motion.div
                      className="flex flex-col gap-2 pb-4"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {responsePayload.marketData && responsePayload.marketData.length > 0 && (
                        <motion.div variants={itemVariants} className="mb-4">
                          <VtsAiDataGrid isUpsell={isUpsell} data={responsePayload.marketData || []} />
                        </motion.div>
                      )}

                      {responsePayload.summary && responsePayload.summary.length > 0 && (
                        <motion.div variants={itemVariants} className="mb-4">
                          <VtsAiSummary
                            data={{
                              summary: responsePayload.summary,
                            }}
                          />
                        </motion.div>
                      )}

                      {responsePayload.keyInsights && responsePayload.keyInsights.length > 0 && (
                        <motion.div variants={itemVariants} className="mb-4">
                          <VtsAiKeyInsights
                            isUpsell={isUpsell}
                            data={{
                              insights: responsePayload.keyInsights,
                            }}
                          />
                        </motion.div>
                      )}

                      <button className="mb-3 flex w-fit cursor-pointer rounded-lg bg-[linear-gradient(110deg,var(--color-vts-ai-light)_0%,var(--color-vts-ai-medium)_10%,var(--color-vts-ai-dark)_50%,var(--color-vts-ai-gray)_200%)] px-3 py-2 text-white transition-all duration-200 hover:brightness-120">
                        Download CSV data
                      </button>

                      {responsePayload.suggestedFollowUps && responsePayload.suggestedFollowUps.length > 0 && (
                        <motion.div variants={itemVariants}>
                          <VtsAiSuggestedFollowUps
                            data={responsePayload.suggestedFollowUps || []}
                            onFollowUpClick={handleFollowUpClick}
                          />
                        </motion.div>
                      )}
                    </motion.div>
                  ))
                )}
              </motion.div>
            </div>
          </div>
          {showChatInput && (
            <div className="relative flex h-12 flex-auto border-t border-gray-300">
              <input
                className="w-full resize-none rounded-b-[1.25rem] bg-white py-2 pr-18 pl-4 text-sm focus:outline-none"
                placeholder="Ask a VTS AI a question..."
              />

              <button className="absolute right-6 bottom-2 size-8 cursor-pointer rounded-3xl bg-[linear-gradient(110deg,var(--color-vts-ai-light)_0%,var(--color-vts-ai-medium)_10%,var(--color-vts-ai-dark)_50%,var(--color-vts-ai-gray)_200%)] p-2 text-white transition-all duration-200 hover:brightness-120">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              </button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
});

VtsAiDefault.displayName = "VtsAiDefault";

export default VtsAiDefault;
