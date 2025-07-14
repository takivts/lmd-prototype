import Typewriter from "typewriter-effect";
import { useRef } from "react";

export default function VtsAiSummary({
  data,
  className,
  shouldTypewrite = false,
  onComplete,
}: {
  data: {
    title: string;
    summary: string[];
  };
  className?: string;
  shouldTypewrite?: boolean;
  onComplete?: () => void;
}) {
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  // Return null if no data or empty summary
  if (!data || !data.summary || data.summary.join("").trim() === "") {
    return null;
  }

  return (
    <div className={className}>
      <h5 className="mb-1 text-sm font-bold">{data.title}</h5>
      <div>
        {shouldTypewrite ? (
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(data.summary.join("<br /><br />"))
                .callFunction(() => {
                  if (onCompleteRef.current) {
                    setTimeout(() => {
                      onCompleteRef.current!();
                    }, 200);
                  }
                })
                .start();
            }}
            options={{
              delay: 5,
              cursor: "",
            }}
          />
        ) : (
          data.summary.map((p, i) => (
            <p key={i} className="mb-2 last:mb-0">
              {p}
            </p>
          ))
        )}
      </div>
    </div>
  );
}
