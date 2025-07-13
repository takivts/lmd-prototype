import VtsAiDefault from "./vts-ai/vts-ai-default";
import VtsAiTenantProfile from "./vts-ai/vts-ai-tenant-profile";
import { usePromptCycle } from "./hooks/usePromptCycle";
import VtsAiUpsell from "./vts-ai/vts-ai-upsell";
import VtsAiMarketAnalysis from "./vts-ai/vts-ai-market-analysis";
import { useAppContext } from "../../context/AppContext";
import { useRef } from "react";
import { VtsAiDefaultRef } from "./vts-ai/vts-ai-default";

export default function VtsAiFloatingCTA({
  className,
}: {
  className?: string;
}) {
  const { isVtsAiOpen, setIsVtsAiOpen, vtsAiContentType, setVtsAiContentType } =
    useAppContext();
  const vtsAiDefaultRef = useRef<VtsAiDefaultRef>(null);

  const FormatVtsAiContent = () => {
    if (vtsAiContentType === "tenant") {
      return (
        <VtsAiTenantProfile
          className="absolute right-24 bottom-16"
          isOpen={isVtsAiOpen}
          setIsOpen={setIsVtsAiOpen}
        />
      );
    } else if (vtsAiContentType === "marketAnalysis") {
      return (
        <VtsAiMarketAnalysis
          className="absolute right-24 bottom-16"
          isOpen={isVtsAiOpen}
          setIsOpen={setIsVtsAiOpen}
        />
      );
    } else if (vtsAiContentType === "upsell") {
      return <VtsAiUpsell />;
    } else {
      return (
        <VtsAiDefault
          ref={vtsAiDefaultRef}
          className="absolute right-24 bottom-16"
          isOpen={isVtsAiOpen}
          setIsOpen={setIsVtsAiOpen}
        />
      );
    }
  };

  const handleFloatingCTAClick = () => {
    setVtsAiContentType("default");
    setIsVtsAiOpen(!isVtsAiOpen);
    setTimeout(() => {
      vtsAiDefaultRef.current?.resetConversation();
    }, 500);
  };

  const { currentPrompt, isVisible: isPromptVisible } = usePromptCycle({
    cycleInterval: 16000,
    fadeDelay: 8000,
    initialDelay: 5000,
    isActive: !isVtsAiOpen,
  });

  return (
    <>
      <div
        className={`fixed right-8 bottom-8 z-50 flex size-14 cursor-pointer items-center justify-center rounded-full ${className}`}
        onClick={handleFloatingCTAClick}
      >
        <div
          className={`to-vts-purple-900 animate-gradient from-vts-purple-700 absolute -inset-1 -z-10 scale-50 rounded-full bg-gradient-to-r via-teal-700 opacity-0 blur transition-all duration-600 ease-in-out ${
            isVtsAiOpen ? "scale-90 opacity-100" : "scale-0 opacity-0"
          }`}
        />
        <div
          className={`absolute z-50 size-14 rounded-full shadow-md ${
            isVtsAiOpen ? "bg-vts-purple-700/100" : "bg-vts-purple-700/100"
          }`}
        />
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 -z-10 h-full w-full overflow-clip rounded-full object-cover"
        >
          <source src="/gradient-mesh-converted.mp4" type="video/mp4" />
        </video> */}
        {!isVtsAiOpen && (
          <div
            className={`absolute top-2 right-18 w-fit cursor-pointer rounded-lg border border-gray-300 bg-white px-3 py-2 whitespace-nowrap shadow transition-all duration-300 ease-in-out ${
              currentPrompt && isPromptVisible
                ? "pointer-events-auto translate-x-0 opacity-100"
                : "pointer-events-none translate-x-5 opacity-0"
            }`}
          >
            {currentPrompt && (
              <p className="text-vts-primary cursor-pointer text-sm underline decoration-dotted decoration-2 underline-offset-2">
                {currentPrompt}
              </p>
            )}
          </div>
        )}
        {isVtsAiOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="z-50 size-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <div className="z-50 flex flex-col items-center gap-0 text-[10px] font-bold text-white">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3186 8.44355L10.0082 6.24573L10 6.25098L6.68731 8.44939L4.23807 6.83031L10 3.00524L10.0082 3L15.7684 6.82389L13.3186 8.44355Z"
                fill="white"
              />
              <path
                d="M0 6.97529L9.99826 13.2394L10 13.2383L20 6.97296V11.1518L10 17.4165L9.99826 17.4177L0 11.1535V6.97529Z"
                fill="white"
              />
            </svg>
            VTS AI
          </div>
        )}
      </div>
      {FormatVtsAiContent()}
    </>
  );
}
