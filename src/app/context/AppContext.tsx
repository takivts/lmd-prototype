"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Context
const AppContext = createContext<{
  isVtsAiOpen: boolean;
  setIsVtsAiOpen: (value: boolean) => void;
  vtsAiContentType: string;
  setVtsAiContentType: (value: string) => void;
  isSidePanelOpen: boolean;
  setIsSidePanelOpen: (value: boolean) => void;
} | null>(null);

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [isVtsAiOpen, setIsVtsAiOpen] = useState(false);
  const [vtsAiContentType, setVtsAiContentType] = useState("default");
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isVtsAiOpen,
        setIsVtsAiOpen,
        vtsAiContentType,
        setVtsAiContentType,
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
