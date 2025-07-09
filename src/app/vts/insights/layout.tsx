import Image from "next/image";
import Link from "next/link";
import GlobalHeader from "../_shared/global-header";
import LeftNav from "../_shared/left-nav";

export default function VtsInsightsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      sectionName: "VTS Data",
      items: ["Data dashboards", "Data extract", "Data reports", "VODI"],
    },
    {
      sectionName: "Inventory",
      items: ["Assets", "Spaces", "Stacking plan", "Site plan"],
    },
  ];

  return (
    <div className="flex h-screen flex-col">
      <GlobalHeader />
      <div className="mx-auto flex w-full">
        <LeftNav navItems={leaseNavItems} />
        {children}
      </div>
    </div>
  );
}
