import VtsAiDefault from "./vts-ai-default";
import VtsAiTenantProfile from "./vts-ai-tenant-profile";
import { usePromptCycle } from "./hooks/usePromptCycle";
import { vtsAiPrompts } from "./data/vts-ai-prompts";

export default function FloatingCTA({
  isOpen,
  setIsOpen,
  vtsAiContentType,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  vtsAiContentType: "default" | "tenant";
}) {
  const FormatVtsAiContent = () => {
    if (vtsAiContentType === "tenant") {
      return (
        <VtsAiTenantProfile
          className="absolute right-24 bottom-16"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      );
    } else {
      return (
        <VtsAiDefault
          className="absolute right-24 bottom-16"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      );
    }
  };

  const { currentPrompt, isVisible: isPromptVisible } = usePromptCycle({
    prompts: vtsAiPrompts,
    cycleInterval: 20000,
    fadeDelay: 5000,
    initialDelay: 5000,
    isActive: !isOpen,
  });

  return (
    <>
      <div
        className={`bg-vts-primary hover:bg-vts-purple-800 fixed right-8 bottom-8 z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full backdrop-blur-sm transition-all duration-300`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 -z-10 h-full w-full overflow-clip rounded-full object-cover"
        >
          <source src="/gradient-mesh-converted.mp4" type="video/mp4" />
        </video> */}
        {!isOpen && (
          <div
            className={`absolute top-2 right-18 w-fit rounded-lg border border-gray-300 bg-white px-3 py-2 whitespace-nowrap shadow-sm backdrop-blur-sm transition-opacity duration-600 ease-in-out ${
              currentPrompt && isPromptVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {currentPrompt && (
              <p className="text-vts-primary cursor-pointer text-sm underline decoration-dotted decoration-2 underline-offset-2">
                {currentPrompt}
              </p>
            )}
          </div>
        )}
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <div className="flex flex-col items-center gap-0 text-[10px] font-bold text-white">
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
