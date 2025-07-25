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
  const { vtsAiData, setVtsAiContentType } = useAppContext();
  const [selectedPrompt, setSelectedPrompt] = useState<VtsAiPrompt | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [prompts, setPrompts] = useState<VtsAiPrompt[]>([]);
  const [isUpsell] = useState(true);
  const [market, setMarket] = useState<string>("all");
  const [submarket, setSubmarket] = useState<string>("all");
  const [industry, setIndustry] = useState<string>("all");
  const [buildingClass, setBuildingClass] = useState<string>("all");
  const [size, setSize] = useState<string>("all");

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
  };

  useImperativeHandle(ref, () => ({
    resetConversation,
  }));

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setSelectedPrompt(null);
      }, 250);
      setIsLoading(false);
      setIsTransitioning(false);
    }
  }, [isOpen]);

  const handlePromptClick = useCallback((prompt: VtsAiPrompt) => {
    setIsTransitioning(true);
    setSelectedPrompt(prompt);
    setPrompts((prev) => prev.filter((p) => p.prompt !== prompt.prompt));
    setIsTransitioning(false);
  }, []);

  useEffect(() => {
    if (isOpen && vtsAiData) {
      const allPrompts = pathname === "/vts/lease/deals/profile" ? vtsAiPromptsWithContext : vtsAiPromptsWithoutContext;

      const matchedPrompt = allPrompts.find((p) => JSON.stringify(p.payload) === JSON.stringify(vtsAiData));

      if (matchedPrompt) {
        setSelectedPrompt(matchedPrompt);
        setPrompts((prev) => prev.filter((p) => p.prompt !== matchedPrompt.prompt));
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
          className={`vts-ai-gradient layered-shadow z-50 flex h-172 w-lg flex-col rounded-4xl p-4 text-gray-700 ${className}`}
        >
          <VtsAiHeader onReset={resetConversation} />
          <div className="layered-shadow relative z-50 h-full w-full overflow-auto rounded-3xl bg-white text-sm">
            <div className="flex h-full flex-col overflow-auto p-4">
              <motion.div
                className="flex h-full flex-col gap-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {!selectedPrompt && (
                  <div>
                    <p className="mb-2 text-left">Hi, I&apos;m Max.</p>
                    <p className="mb-2 text-left">
                      Choose the market, submarket or industry and then select a prompt and I will provide you with
                      insights:
                    </p>
                    <VtsAiInputs
                      className="mb-3"
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
                    <motion.div
                      className={`mb-2 flex flex-col gap-2`}
                      variants={promptContainerVariants}
                      initial="hidden"
                      animate={isOpen ? "visible" : "hidden"}
                    >
                      {prompts.map((prompt) => (
                        <motion.div
                          key={prompt.prompt}
                          variants={itemVariants}
                          className={`bg-vts-purple-100 text-vts-purple-700 border-vts-purple-300 hover:bg-vts-purple-200 hover:border-vts-purple-400 cursor-pointer rounded-2xl border px-3 py-2 text-left transition-all duration-300`}
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
                  responsePayload && (
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

                      {responsePayload.suggestedFollowUps && responsePayload.suggestedFollowUps.length > 0 && (
                        <motion.div variants={itemVariants}>
                          <VtsAiSuggestedFollowUps
                            data={responsePayload.suggestedFollowUps || []}
                            onFollowUpClick={handleFollowUpClick}
                          />
                        </motion.div>
                      )}
                    </motion.div>
                  )
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

VtsAiDefault.displayName = "VtsAiDefault";

export default VtsAiDefault;
