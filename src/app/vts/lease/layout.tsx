import GlobalHeader from "../_shared/global-header";
import LeaseSidebar from "./sidebar";

export default function VtsLeaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <GlobalHeader />
      <div className="mx-auto flex w-full">
        <LeaseSidebar />
        {children}
      </div>
    </div>
  );
}
