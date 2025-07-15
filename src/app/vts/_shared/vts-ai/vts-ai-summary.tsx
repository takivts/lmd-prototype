export default function VtsAiSummary({
  data,
  className,
}: {
  data: {
    summary: string[];
  };
  className?: string;
}) {
  return (
    <div className={className}>
      <h5 className="mb-1 text-sm font-bold">Summary</h5>
      <div>
        {data.summary.map((p, i) => (
          <p key={i} className="mb-2 last:mb-0">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}
