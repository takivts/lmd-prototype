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
          href: "/vts/insights/portfolio-insights",
        },
        {
          label: "Leasing activity report",
          href: "/vts/insights/leasing-activity-report",
        },
        {
          label: "Portfolio dashboards",
          href: "/vts/insights/portfolio-dashboards",
        },
        { label: "Portfolio alerts", href: "/vts/insights/portfolio-alerts" },
        { label: "Portfolio reports", href: "/vts/insights/portfolio-reports" },
        { label: "Lease charts", href: "/vts/insights/lease-charts" },
        { label: "Market Heatmap", href: "/vts/insights/market-heatmap" },
      ],
    },
    {
      sectionName: "VTS Data",
      items: [
        { label: "VTS Max AI", href: "/vts/insights/vts-max-ai" },
        { label: "Data dashboards", href: "/vts/insights/data-dashboards" },
        { label: "Data extract", href: "/vts/insights/data-extract" },
        { label: "Data reports", href: "/vts/insights/data-reports" },
        { label: "VODI", href: "/vts/insights/vodi" },
      ],
    },
    {
      sectionName: "Inventory",
      items: [
        { label: "Assets", href: "/vts/insights/assets" },
        { label: "Spaces", href: "/vts/insights/spaces" },
        { label: "Stacking plan", href: "/vts/insights/stacking-plan" },
        { label: "Site plan", href: "/vts/insights/site-plan" },
      ],
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
