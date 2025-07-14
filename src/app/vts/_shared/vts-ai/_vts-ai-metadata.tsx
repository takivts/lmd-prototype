import { useEffect } from "react";

interface VtsAiMetadataProps {
  data?: {
    category: string;
    market: string;
    buildingClass?: string;
  };
  className?: string;
  onComplete?: () => void;
}

export default function VtsAiMetadata({
  data,
  className,
  onComplete,
}: VtsAiMetadataProps) {
  useEffect(() => {
    if (onComplete) {
      // Call onComplete after a brief delay to allow for rendering
      const timer = setTimeout(onComplete, 100);
      return () => clearTimeout(timer);
    }
  }, [onComplete]);

  if (!data) {
    return null;
  }

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex flex-col">
        <span className="-mb-1 text-gray-400">{data.category}</span>
        <h3 className="text-lg font-bold">{data.market}</h3>
      </div>
    </div>
  );
}
