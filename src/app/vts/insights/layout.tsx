import { inventoryNavItems } from "../_shared/data/navigation";
import GlobalHeader from "../_shared/global-header";
import { LeftNav } from "../_shared/left-nav";

export default function VtsInsightsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const leaseNavItems = [
    {
      sectionName: "",
      items: [
        {
          label: "Portfolio insights",
          href: "/vts/insights/",
        },
        {
          label: "Leasing activity report",
          href: "/vts/insights/",
        },
        {
          label: "Portfolio dashboards",
          href: "/vts/insights/",
        },
        { label: "Portfolio alerts", href: "/vts/insights/" },
        { label: "Portfolio reports", href: "/vts/insights/" },
        { label: "Lease charts", href: "/vts/insights/" },
        { label: "Market Heatmap", href: "/vts/insights/market-heatmap" },
      ],
    },
    {
      sectionName: "VTS Data",
      items: [
        { label: "VTS Max AI", href: "/vts/insights/vts-max-ai" },
        { label: "Data dashboards", href: "/vts/insights/" },
        { label: "Data extract", href: "/vts/insights/" },
        { label: "Data reports", href: "/vts/insights/" },
        { label: "VODI", href: "/vts/insights/" },
      ],
    },
    inventoryNavItems,
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
