export default function VtsAiSuggestedFollowUps({
  data,
  className,
  onFollowUpClick,
}: {
  data: string[];
  className?: string;
  onFollowUpClick: (followUp: string) => void;
}) {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      <h5 className="mb-2 text-sm font-bold">Suggested Follow-Ups</h5>
      <div className="flex flex-col gap-2">
        {data.map((followUp, index) => (
          <div
            key={index}
            className="bg-vts-purple-100 text-vts-purple-700 border-vts-purple-300 hover:bg-vts-purple-200 cursor-pointer rounded-2xl border px-3 py-2 text-left duration-200 ease-in-out"
            onClick={() => onFollowUpClick(followUp)}
          >
            {followUp}
          </div>
        ))}
      </div>
    </div>
  );
}
