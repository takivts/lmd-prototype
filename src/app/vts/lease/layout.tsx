"use client";

import { useState } from "react";
import GlobalHeader from "../_shared/global-header";
import SidePanel from "../_shared/side-panel";
import { usePathname } from "next/navigation";
import { LeftNav } from "../_shared/left-nav";
import { inventoryNavItems } from "../_shared/data/navigation";
import FloatingCTA from "../_shared/floating-cta";

export default function VtsLeaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [vtsAiContentType, setVtsAiContentType] = useState<
    "default" | "tenant" | "marketAnalysis" | "upsell"
  >("default");

  const leaseNavItems = [
    {
      sectionName: "",
      items: [
        { label: "Deals", href: "/vts/lease/deals" },
        { label: "Deal tasks", href: "/vts/lease/" },
        {
          label: "Tenant coordination",
          href: "/vts/lease/",
        },
        { label: "Leases", href: "/vts/lease/" },
        { label: "Options", href: "/vts/lease/" },
        { label: "Budgets", href: "/vts/lease/" },
        { label: "Appraisals", href: "/vts/lease/" },
        { label: "Comps", href: "/vts/lease/" },
        { label: "Tenants", href: "/vts/lease/" },
      ],
    },
    inventoryNavItems,
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
        <FloatingCTA
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          vtsAiContentType={vtsAiContentType}
        />
      </div>
    </div>
  );
}
