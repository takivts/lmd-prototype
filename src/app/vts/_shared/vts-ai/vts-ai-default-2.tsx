"use client";

import { useEffect, useState, useImperativeHandle, forwardRef, useCallback } from "react";
import { motion } from "framer-motion";
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
  const [isUpsell] = useState(false);
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
    <div
      className={`vts-ai-gradient h-172 w-lg rounded-4xl p-4 text-gray-700 shadow-lg transition-all duration-300 select-none ${className} ${
        isOpen ? "opacity-100 select-text" : "pointer-events-none opacity-0 select-none"
      }`}
    ></div>
  );
});

VtsAiDefault.displayName = "VtsAiDefault";

export default VtsAiDefault;
