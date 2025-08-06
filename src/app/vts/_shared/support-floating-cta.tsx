"use client";

import { useAppContext } from "@/app/context/AppContext";

export default function SupportFloatingCTA({ className }: { className?: string }) {
  const { isVtsAiOpen } = useAppContext();
  return (
    <div
      className={`fixed right-10 z-40 flex size-10 cursor-pointer items-center justify-center rounded-full bg-teal-700 shadow-md backdrop-blur-sm transition-all duration-200 ease-in-out hover:bg-teal-800 hover:shadow-lg ${className} ${
        isVtsAiOpen ? "bottom-24 opacity-100" : "bottom-10 opacity-0"
      }`}
    >
      <div className="flex flex-col items-center gap-0 text-[10px] font-bold text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
          />
        </svg>
      </div>
    </div>
  );
}
