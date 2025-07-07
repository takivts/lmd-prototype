import GlobalHeader from "../_shared/global-header";
import MarketSidebar from "./left-nav";

export default function VtsMarketLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <GlobalHeader />
      <div className="mx-auto flex w-full">
        <MarketSidebar />
        {children}
      </div>
    </div>
  );
}
