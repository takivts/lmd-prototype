"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Define the data structure for market analysis
interface MarketAnalysisData {
  marketMetadata?: {
    title: string;
    buildingClass: string;
  };
  marketData?: Array<{ label: string; value: string }>;
  keyInsights?: string[];
  suggestedFollowUps?: string[];
  summary?: string;
}

// Context
const AppContext = createContext<{
  isVtsAiOpen: boolean;
  setIsVtsAiOpen: (value: boolean) => void;
  vtsAiContentType: string;
  setVtsAiContentType: (value: string, data?: MarketAnalysisData) => void;
  vtsAiData: MarketAnalysisData | null;
  isSidePanelOpen: boolean;
  setIsSidePanelOpen: (value: boolean) => void;
} | null>(null);

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [isVtsAiOpen, setIsVtsAiOpen] = useState(false);
  const [vtsAiContentType, setVtsAiContentType] = useState("default");
  const [vtsAiData, setVtsAiData] = useState<MarketAnalysisData | null>(null);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const handleSetVtsAiContentType = (
    contentType: string,
    data?: MarketAnalysisData,
  ) => {
    setVtsAiContentType(contentType);
    if (data) {
      setVtsAiData(data);
    } else {
      setVtsAiData(null);
    }
  };

  return (
    <AppContext.Provider
      value={{
        isVtsAiOpen,
        setIsVtsAiOpen,
        vtsAiContentType,
        setVtsAiContentType: handleSetVtsAiContentType,
        vtsAiData,
        isSidePanelOpen,
        setIsSidePanelOpen,
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
export type { MarketAnalysisData };
