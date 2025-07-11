import { inventoryNavItems } from "../_shared/data/navigation";
import GlobalHeader from "../_shared/global-header";
import { LeftNav } from "../_shared/left-nav";

export default function VtsMarketLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const marketNavItems = [
    {
      sectionName: "",
      items: [
        { label: "Leads", href: "/vts/market/" },
        { label: "Buildings", href: "/vts/market/" },
        { label: "Listings", href: "/vts/market/" },
        { label: "My Tourbooks", href: "/vts/market/" },
        { label: "My shares", href: "/vts/market/" },
        { label: "Marketing analytics", href: "/vts/market/" },
        { label: "Inquiries", href: "/vts/market/" },
      ],
    },
    inventoryNavItems,
  ];

  return (
    <div className="flex h-screen flex-col">
      <GlobalHeader />
      <div className="mx-auto flex w-full">
        <LeftNav navItems={marketNavItems} />
        {children}
      </div>
    </div>
  );
}
