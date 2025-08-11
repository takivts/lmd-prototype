"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { MarketAnalysisData, MarketMetadata } from "../vts/_shared/data/vts-ai-prompts";

// Define the data structure for market analysis
interface VtsAiDefaultData {
  marketMetadata?: MarketMetadata;
  marketData?: Array<{ label: string; value: string }>;
  keyInsights?: string[];
  suggestedFollowUps?: string[];
  summary?: string;
}

// VTS AI Persona
export type VtsAiPersona = "Analyst" | "Assistant";

// Context
const AppContext = createContext<{
  isVtsAiOpen: boolean;
  setIsVtsAiOpen: (value: boolean) => void;
  closeVtsAiFromOverlay: () => void;
  vtsAiContentType: string;
  setVtsAiContentType: (value: string, data?: MarketAnalysisData) => void;
  vtsAiData: MarketAnalysisData | null;
  isSidePanelOpen: boolean;
  setIsSidePanelOpen: (value: boolean) => void;
  vtsAiPersona: VtsAiPersona;
  setVtsAiPersona: (value: VtsAiPersona) => void;
  isUpsell: boolean;
  setIsUpsell: (value: boolean) => void;
  isPromptError: boolean;
  setIsPromptError: (value: boolean) => void;
  showChatInput: boolean;
  setShowChatInput: (value: boolean) => void;
} | null>(null);

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [isVtsAiOpen, setIsVtsAiOpen] = useState(false);
  const [vtsAiContentType, setVtsAiContentType] = useState("default");
  const [vtsAiData, setVtsAiData] = useState<MarketAnalysisData | null>(null);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [vtsAiPersona, setVtsAiPersona] = useState<VtsAiPersona>("Analyst");
  const [isUpsell, setIsUpsell] = useState(false);
  const [isPromptError, setIsPromptError] = useState(false);
  const [showChatInput, setShowChatInput] = useState(false);
  const handleSetVtsAiContentType = (contentType: string, data?: MarketAnalysisData) => {
    setVtsAiContentType(contentType);
    if (data) {
      setVtsAiData(data);
    } else {
      setVtsAiData(null);
    }
  };

  const closeVtsAiFromOverlay = () => {
    // Dispatch custom event to trigger animation
    window.dispatchEvent(new CustomEvent("vts-ai-overlay-close"));
    setIsVtsAiOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isVtsAiOpen,
        setIsVtsAiOpen,
        closeVtsAiFromOverlay,
        vtsAiContentType,
        setVtsAiContentType: handleSetVtsAiContentType,
        vtsAiData,
        isSidePanelOpen,
        setIsSidePanelOpen,
        vtsAiPersona,
        setVtsAiPersona,
        isUpsell,
        setIsUpsell,
        isPromptError,
        setIsPromptError,
        showChatInput,
        setShowChatInput,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// Hook to use the context
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
}

// Export the type for use in other components
export type { VtsAiDefaultData };
