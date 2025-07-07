export default function DealsProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-[calc(100dvh-50px)] w-full flex-col overflow-hidden">
      {children}
    </div>
  );
}
