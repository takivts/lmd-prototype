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
