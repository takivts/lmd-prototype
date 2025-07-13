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
    summary: string;
  };
  className?: string;
  shouldTypewrite?: boolean;
  onComplete?: () => void;
}) {
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  return (
    <div className={className}>
      <h5 className="mb-1 text-sm font-bold">{data.title}</h5>
      <span>
        {shouldTypewrite ? (
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(data.summary)
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
          data.summary
        )}
      </span>
    </div>
  );
}
