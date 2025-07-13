interface VtsAiMetadataProps {
  data?: {
    title: string;
    buildingClass: string;
  };
  className?: string;
}

export default function VtsAiMetadata({ data, className }: VtsAiMetadataProps) {
  if (!data) {
    return null;
  }

  return (
    <div className={`flex flex-col ${className}`}>
      <h3 className="text-lg font-bold">{data.title}</h3>
      <span className="text-gray-500">
        Building Class: {data.buildingClass}
      </span>
    </div>
  );
}
