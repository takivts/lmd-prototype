import { useState } from "react";
import VtsAiTenantProfile from "./vts-ai-tenant-profile";

export default function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={`bg-vts-primary hover:bg-vts-purple-800 fixed right-8 bottom-8 z-50 h-14 w-14 rounded-full transition-all duration-300`}
        onClick={() => setIsOpen(!isOpen)}
      />

      <VtsAiTenantProfile
        className="absolute right-24 bottom-16"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}
