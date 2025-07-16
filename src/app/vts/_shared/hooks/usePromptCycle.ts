import { usePathname } from "next/navigation";
import { useEffect, useState, useRef, useCallback } from "react";
import {
  vtsAiPromptsWithoutContext,
  VtsAiPrompt,
} from "../data/vts-ai-prompts";
import { vtsAiPromptsWithContext } from "../data/vts-ai-prompts";

interface PromptCycleConfig {
  promptDuration?: number;
  promptDelay?: number;
  initialDelay?: number;
  isActive: boolean;
}

export const usePromptCycle = ({
  promptDuration = 8000,
  promptDelay = 15000,
  initialDelay = 5000,
  isActive,
}: PromptCycleConfig) => {
  const pathname = usePathname();
  const [currentPrompt, setCurrentPrompt] = useState<VtsAiPrompt | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const promptIndexRef = useRef(0);
  const [shuffledPrompts, setShuffledPrompts] = useState<VtsAiPrompt[]>([]);

  useEffect(() => {
    const sourcePrompts =
      pathname === "/vts/lease/deals/profile"
        ? vtsAiPromptsWithContext
        : vtsAiPromptsWithoutContext;

    const array = [...sourcePrompts];
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    setShuffledPrompts(array);
    promptIndexRef.current = 0;
  }, [pathname]);

  const cycle = useCallback(() => {
    if (shuffledPrompts.length > 0) {
      setCurrentPrompt(shuffledPrompts[promptIndexRef.current]);
      promptIndexRef.current =
        (promptIndexRef.current + 1) % shuffledPrompts.length;

      timeoutRef.current = setTimeout(() => {
        setCurrentPrompt(null);
        timeoutRef.current = setTimeout(cycle, promptDelay);
      }, promptDuration);
    }
  }, [shuffledPrompts, promptDelay, promptDuration]);

  useEffect(() => {
    if (isActive && shuffledPrompts.length > 0) {
      const initialTimeout = setTimeout(cycle, initialDelay);
      return () => {
        clearTimeout(initialTimeout);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    } else {
      setCurrentPrompt(null);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  }, [isActive, initialDelay, cycle, shuffledPrompts]);

  return { currentPrompt };
};
