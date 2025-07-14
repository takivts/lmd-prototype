import { useEffect } from "react";
import { MarketMetadata } from "../data/vts-ai-prompts";

interface VtsAiMetadataProps {
  data?: MarketMetadata;
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
    <div className={`mb-2 flex flex-col ${className}`}>
      <h3 className="text-lg font-bold">
        {data.submarket && `${data.submarket} | `} {data.market}
      </h3>
      {data.industry && (
        <span className="text-gray-400">
          Industry:{" "}
          <span className="font-bold text-gray-700">{data.industry}</span>
        </span>
      )}
      {data.size && (
        <span className="text-gray-400">
          Size: <span className="font-bold text-gray-700">{data.size}</span>
        </span>
      )}
    </div>
  );
}
