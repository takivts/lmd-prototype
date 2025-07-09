import GlobalHeader from "../_shared/global-header";
import MarketSidebar from "../_shared/left-nav";

export default function VtsMarketLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const marketNavItems = [
    {
      sectionName: "",
      items: [
        "Leads",
        "Buildings",
        "Listings",
        "My Tourbooks",
        "My shares",
        "Marketing analytics",
        "Inquiries",
      ],
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
        <MarketSidebar navItems={marketNavItems} />
        {children}
      </div>
    </div>
  );
}
