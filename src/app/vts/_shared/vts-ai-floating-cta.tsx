import VtsAiDefault from "./vts-ai/vts-ai-default";
import VtsAiTenantProfile from "./vts-ai/vts-ai-tenant-profile";
import { usePromptCycle } from "./hooks/usePromptCycle";
import { useAppContext } from "../../context/AppContext";
import { motion, AnimatePresence } from "framer-motion";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import vtsAiMorph from "../../../../public/vts-ai-morph.json";
import { useRef } from "react";

const promptVariants = {
  hidden: {
    opacity: 0,
    x: 10,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    x: 10,
    scale: 0.95,
  },
};

export default function VtsAiFloatingCTA({ className }: { className?: string }) {
  const { isVtsAiOpen, setIsVtsAiOpen, vtsAiContentType, setVtsAiContentType } = useAppContext();
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const FormatVtsAiContent = () => {
    if (vtsAiContentType === "tenant") {
      return <VtsAiTenantProfile className="absolute right-24 bottom-16" isOpen={isVtsAiOpen} />;
    } else {
      return <VtsAiDefault className="absolute right-24 bottom-16" isOpen={isVtsAiOpen} />;
    }
  };

  const handleFloatingCTAClick = () => {
    setVtsAiContentType("default");
    setIsVtsAiOpen(!isVtsAiOpen);
    lottieRef.current?.setSpeed(2.5);
    if (!isVtsAiOpen) {
      console.log(lottieRef.current);
      lottieRef.current?.playSegments([15, 30], true);
    } else {
      console.log(lottieRef.current);
      lottieRef.current?.setDirection(-1);
      lottieRef.current?.playSegments([30, 15], true);
    }
  };

  const { currentPrompt } = usePromptCycle({
    promptDuration: 8000,
    promptDelay: 8000,
    initialDelay: 5000,
    isActive: !isVtsAiOpen,
  });

  const handlePromptClick = () => {
    if (currentPrompt) {
      setVtsAiContentType("default", currentPrompt.payload);
      setIsVtsAiOpen(true);
    }
  };

  return (
    <>
      <div
        className={`group fixed right-8 bottom-8 z-50 flex size-14 cursor-pointer items-center justify-center rounded-full ${className}`}
        onClick={handleFloatingCTAClick}
        onMouseEnter={() => {
          if (!isVtsAiOpen) {
            console.log(lottieRef.current);
            lottieRef.current?.setSpeed(2.5);
            lottieRef.current?.playSegments([0, 15], true);
          }
        }}
        onMouseLeave={() => {
          if (!isVtsAiOpen) {
            lottieRef.current?.setSpeed(2.5);
            lottieRef.current?.playSegments([15, 0], true);
          }
        }}
      >
        <div
          className={`from-vts-ai-dark via-vts-ai-dark animate-floating-cta-gradient to-vts-ai-light pointer-events-none absolute -inset-1 -z-10 scale-0 rounded-full bg-linear-to-t blur ${
            isVtsAiOpen ? "scale-75 opacity-100" : "scale-0 opacity-0"
          }`}
        />
        <div
          className={`layered-shadow absolute z-50 rounded-full transition-all duration-200 ease-in-out ${
            isVtsAiOpen
              ? "via-vts-ai-dark from-vts-purple-900 to-vts-ai-light size-12 bg-linear-to-t"
              : "via-vts-ai-dark from-vts-purple-900 to-vts-ai-light size-13 bg-linear-to-t group-hover:size-14"
          }`}
        />
        {!isVtsAiOpen && (
          <AnimatePresence mode="wait">
            {currentPrompt && (
              <motion.div
                key={currentPrompt.prompt}
                variants={promptVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className={`layered-shadow border-vts-purple-300 bg-vts-purple-100 absolute top-2 right-18 w-fit cursor-pointer rounded-2xl border px-3 py-2 whitespace-nowrap`}
                onClick={(e) => {
                  e.stopPropagation();
                  handlePromptClick();
                }}
              >
                <p className="text-vts-primary cursor-pointer text-sm underline-offset-2 select-none">
                  {currentPrompt.prompt}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        )}
        <Lottie
          lottieRef={lottieRef}
          animationData={vtsAiMorph}
          autoplay={false}
          loop={false}
          className="z-50 size-8"
        />
      </div>
      {FormatVtsAiContent()}
    </>
  );
}
