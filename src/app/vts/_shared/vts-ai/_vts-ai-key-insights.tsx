export default function VtsAiKeyInsights({
  data,
  isUpsell,
  className,
}: {
  data: {
    insights: string[];
  };
  isUpsell?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <h5 className="mb-1 text-sm font-bold">Key Insights</h5>
      <div>
        {data.insights.map((p, i) => (
          <p key={i} className={`mb-2 last:mb-0 ${isUpsell ? "blur-xs" : ""}`}>
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}
