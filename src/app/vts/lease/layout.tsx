"use client";

import { useState } from "react";
import GlobalHeader from "../_shared/global-header";
import SidePanel from "../_shared/side-panel";
import FloatingCTA from "../_shared/floating-cta";
import { usePathname } from "next/navigation";
import LeftNav from "../_shared/left-nav";

export default function VtsLeaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const leaseNavItems = [
    {
      sectionName: "",
      items: [
        "Deals",
        "Deal tasks",
        "Tenant coordination",
        "Leases",
        "Options",
        "Budgets",
        "Appraisals",
        "Comps",
        "Tenants",
      ],
    },
    {
      sectionName: "Inventory",
      items: ["Assets", "Spaces", "Stacking plan", "Site plan"],
    },
  ];

  return (
    <div className="flex flex-col">
      <GlobalHeader />
      <div className="mx-auto flex min-h-[calc(100vh-50px)] w-full">
        <LeftNav navItems={leaseNavItems} />
        {children}
        {pathname === "/vts/lease/deals/profile" && (
          <SidePanel
            isSidePanelOpen={isSidePanelOpen}
            setIsSidePanelOpen={setIsSidePanelOpen}
          />
        )}
        <FloatingCTA />
      </div>
    </div>
  );
}
