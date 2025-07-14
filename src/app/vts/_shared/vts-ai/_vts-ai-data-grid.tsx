import { useEffect } from "react";

type DataGridItem = {
  label: string;
  value: string;
  isUpsell?: boolean;
};

export default function VtsAiDataGrid({
  data,
  className,
  isUpsell,
  onComplete,
}: {
  data: DataGridItem[];
  className?: string;
  isUpsell?: boolean;
  onComplete?: () => void;
}) {
  useEffect(() => {
    if (onComplete) {
      // Call onComplete after a brief delay to allow for rendering
      const timer = setTimeout(onComplete, 100);
      return () => clearTimeout(timer);
    }
  }, [onComplete]);

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div
      className={`grid grid-cols-3 gap-x-4 gap-y-2 text-sm text-gray-700 ${className}`}
    >
      {data.map((item) => (
        <div
          key={item.label}
          className="flex flex-col justify-between rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-left"
        >
          <span className="text-xs font-bold text-gray-400">{item.label}</span>
          <span className={`text-gray-700 ${isUpsell ? "blur-xs" : ""}`}>
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}
