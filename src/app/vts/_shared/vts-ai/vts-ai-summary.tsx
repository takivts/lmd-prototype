export default function VtsAiSummary({
  data,
  className,
}: {
  data: {
    title: string;
    summary: string;
  };
  className?: string;
}) {
  return (
    <div className={className}>
      <h5 className="mb-1 text-sm font-bold">{data.title}</h5>
      <p>{data.summary}</p>
    </div>
  );
}
