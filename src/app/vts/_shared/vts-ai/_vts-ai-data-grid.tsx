type DataGridItem = {
  label: string;
  value: React.ReactNode;
};

export default function VtsAiDataGrid({
  data,
  className,
}: {
  data: DataGridItem[];
  className?: string;
}) {
  return (
    <div
      className={`grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-700 ${className}`}
    >
      {data.map((item) => (
        <div
          key={item.label}
          className="bg-vts-gray-200 flex flex-col justify-between rounded-lg border border-gray-300 px-3 py-2 text-left"
        >
          <span className="text-xs font-bold text-gray-400">{item.label}</span>
          <span className="text-gray-700">{item.value}</span>
        </div>
      ))}
    </div>
  );
}
