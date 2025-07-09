"use client";

import { useState } from "react";
import GlobalHeader from "../_shared/global-header";
import SidePanel from "../_shared/side-panel";
import FloatingCTA from "../_shared/floating-cta";
import { usePathname } from "next/navigation";
import { LeftNav } from "../_shared/left-nav";

export default function VtsLeaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const leaseNavItems = [
    {
      sectionName: "",
      items: [
        { label: "Deals", href: "/vts/lease/deals" },
        { label: "Deal tasks", href: "/vts/lease/deal-tasks" },
        {
          label: "Tenant coordination",
          href: "/vts/lease/tenant-coordination",
        },
        { label: "Leases", href: "/vts/lease/leases" },
        { label: "Options", href: "/vts/lease/options" },
        { label: "Budgets", href: "/vts/lease/budgets" },
        { label: "Appraisals", href: "/vts/lease/appraisals" },
        { label: "Comps", href: "/vts/lease/comps" },
        { label: "Tenants", href: "/vts/lease/tenants" },
      ],
    },
    {
      sectionName: "Inventory",
      items: [
        { label: "Assets", href: "/vts/lease/assets" },
        { label: "Spaces", href: "/vts/lease/spaces" },
        { label: "Stacking plan", href: "/vts/lease/stacking-plan" },
        { label: "Site plan", href: "/vts/lease/site-plan" },
      ],
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
        <FloatingCTA isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}
