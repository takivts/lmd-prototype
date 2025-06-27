import Image from "next/image";

export default function VtsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex h-screen flex-col">{children}</div>;
}
