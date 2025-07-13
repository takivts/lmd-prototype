import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import {
  vtsAiPromptsWithoutContext,
  VtsAiPrompt,
} from "../data/vts-ai-prompts";
import { vtsAiPromptsWithContext } from "../data/vts-ai-prompts";

interface PromptCycleConfig {
  cycleInterval?: number;
  fadeDelay?: number;
  initialDelay?: number;
  isActive: boolean;
}

export const usePromptCycle = ({
  cycleInterval = 8000,
  fadeDelay = 8000,
  initialDelay = 2000,
  isActive,
}: PromptCycleConfig) => {
  const pathname = usePathname();
  const [currentPrompt, setCurrentPrompt] = useState<VtsAiPrompt | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const wasActiveRef = useRef(isActive);
  const prompts =
    pathname === "/vts/lease/deals/profile"
      ? vtsAiPromptsWithContext
      : vtsAiPromptsWithoutContext;

  useEffect(() => {
    if (!isActive) {
      setIsVisible(false);
      setCurrentPrompt(null);
      wasActiveRef.current = false;
      return;
    }

    if (prompts.length === 0) {
      return;
    }

    const showRandomPrompt = () => {
      setIsVisible(false);

      setTimeout(() => {
        const randomPrompt =
          prompts[Math.floor(Math.random() * prompts.length)];
        setCurrentPrompt(randomPrompt);
        setIsVisible(true);
      }, fadeDelay);
    };

    const showInitialPrompt = () => {
      const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
      setCurrentPrompt(randomPrompt);
      setIsVisible(true);
    };

    const isInitialLoad = !wasActiveRef.current;
    const delayToUse = isInitialLoad ? initialDelay : 0;
    wasActiveRef.current = true;

    const initialTimer = setTimeout(
      isInitialLoad ? showInitialPrompt : showRandomPrompt,
      delayToUse,
    );
    const interval = setInterval(showRandomPrompt, cycleInterval);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isActive, prompts, cycleInterval, fadeDelay, initialDelay]);

  return { currentPrompt, isVisible };
};
