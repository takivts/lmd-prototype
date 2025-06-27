import Image from "next/image";
import Link from "next/link";
import GlobalHeader from "../_shared/global-header";
import InsightsSidebar from "./sidebar.tsx";

export default function VtsInsightsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <GlobalHeader />
      <div className="mx-auto flex w-full">
        <InsightsSidebar />
        {children}
      </div>
    </div>
  );
}
