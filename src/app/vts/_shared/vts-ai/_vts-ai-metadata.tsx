import { MarketMetadata } from "../data/vts-ai-prompts";

interface VtsAiMetadataProps {
  data?: MarketMetadata;
  className?: string;
}

export default function VtsAiMetadata({ data, className }: VtsAiMetadataProps) {
  if (!data) {
    return null;
  }

  return (
    <div className={`mb-2 flex flex-col ${className}`}>
      {data.industry && (
        <span className="text-gray-400">
          Industry: <span className="font-bold text-gray-700">{data.industry}</span>
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
