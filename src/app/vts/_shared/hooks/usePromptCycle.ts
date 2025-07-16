import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import {
  vtsAiPromptsWithoutContext,
  VtsAiPrompt,
} from "../data/vts-ai-prompts";
import { vtsAiPromptsWithContext } from "../data/vts-ai-prompts";

interface PromptCycleConfig {
  cycleInterval?: number;
  initialDelay?: number;
  isActive: boolean;
}

export const usePromptCycle = ({
  cycleInterval = 16000,
  initialDelay = 5000,
  isActive,
}: PromptCycleConfig) => {
  const pathname = usePathname();
  const [currentPrompt, setCurrentPrompt] = useState<VtsAiPrompt | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(
    undefined,
  );

  const prompts =
    pathname === "/vts/lease/deals/profile"
      ? vtsAiPromptsWithContext
      : vtsAiPromptsWithoutContext;

  useEffect(() => {
    if (!isActive) {
      setCurrentPrompt(null);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      return;
    }

    if (prompts.length === 0) {
      return;
    }

    const startCycle = () => {
      const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
      setCurrentPrompt(randomPrompt);

      intervalRef.current = setInterval(() => {
        const randomPrompt =
          prompts[Math.floor(Math.random() * prompts.length)];
        setCurrentPrompt(randomPrompt);
      }, cycleInterval);
    };

    const initialTimeout = setTimeout(startCycle, initialDelay);

    return () => {
      clearTimeout(initialTimeout);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive, prompts, cycleInterval, initialDelay]);

  return { currentPrompt };
};
