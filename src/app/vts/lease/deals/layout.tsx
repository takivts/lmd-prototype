export default function DealsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full flex-col overflow-hidden p-8">
      <div className="mb-2 text-xs text-gray-500">
        <span className="">VTS Lease</span> &gt;{" "}
        <span className="font-bold text-gray-700">Deals</span>
      </div>
      {children}
    </div>
  );
}
