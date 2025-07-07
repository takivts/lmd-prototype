"use client";

import { useState } from "react";
import GlobalHeader from "../_shared/global-header";
import LeaseLeftNav from "./left-nav";
import SidePanel from "../_shared/side-panel";
import FloatingCTA from "../_shared/floating-cta";

export default function VtsLeaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <GlobalHeader />
      <div className="mx-auto flex min-h-[calc(100vh-50px)] w-full">
        <LeaseLeftNav />
        {children}
        <SidePanel
          isSidePanelOpen={isSidePanelOpen}
          setIsSidePanelOpen={setIsSidePanelOpen}
        />
        <FloatingCTA />
      </div>
    </div>
  );
}
