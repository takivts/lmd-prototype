export default function VtsAiKeyInsights({
  data,
  className,
}: {
  data: string[];
  className?: string;
}) {
  return (
    <div className={`rounded-lg bg-yellow-300/25 p-3 ${className}`}>
      <h5 className="mb-1 text-sm font-bold">Key Insights</h5>
      <ul className="flex list-disc flex-col gap-0.5 pl-5">
        {data.map((insight, index) => (
          <li key={index}>{insight}</li>
        ))}
      </ul>
    </div>
  );
}
