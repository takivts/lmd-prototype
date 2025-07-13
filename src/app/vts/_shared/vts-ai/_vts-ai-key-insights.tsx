import { useState, useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";

// This component handles a single line of typing and calls back when complete.
const SingleTypingLine = ({
  text,
  onComplete,
}: {
  text: string;
  onComplete: () => void;
}) => {
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString(text)
          .callFunction(() => {
            if (onCompleteRef.current) {
              onCompleteRef.current();
            }
          })
          .start();
      }}
      options={{
        delay: 5,
        cursor: "",
      }}
    />
  );
};

export default function VtsAiKeyInsights({
  data,
  className,
  shouldTypewrite = false,
  onComplete,
}: {
  data: string[];
  className?: string;
  shouldTypewrite?: boolean;
  onComplete?: () => void;
}) {
  const [typingIndex, setTypingIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (shouldTypewrite && data.length > 0) {
      setTypingIndex(0);
      setIsFinished(false);
    } else {
      setIsFinished(true);
      if (!shouldTypewrite && onCompleteRef.current) {
        onCompleteRef.current();
      }
    }
  }, [shouldTypewrite, data]);

  const handleLineComplete = () => {
    if (isFinished) return;

    const nextIndex = typingIndex + 1;
    if (nextIndex < data.length) {
      setTypingIndex(nextIndex);
    } else {
      setIsFinished(true);
      if (onCompleteRef.current) {
        setTimeout(() => onCompleteRef.current!(), 200);
      }
    }
  };

  // When not typing, or when finished, we want to show all data as static text.
  if (!shouldTypewrite || isFinished) {
    return (
      <div className={`rounded-lg bg-yellow-300/25 p-3 ${className}`}>
        <h5 className="mb-1 text-sm font-bold">Key Insights</h5>
        <ul className="flex list-disc flex-col gap-0.5 pl-5">
          {data.map((text, index) => (
            <li key={`final-${index}`}>{text}</li>
          ))}
        </ul>
      </div>
    );
  }

  // This is the "in-progress" view while typing.
  return (
    <div className={`rounded-lg bg-yellow-300/25 p-3 ${className}`}>
      <h5 className="mb-1 text-sm font-bold">Key Insights</h5>
      <ul className="flex list-disc flex-col gap-0.5 pl-5">
        {data.map((text, index) => {
          if (index < typingIndex) {
            return <li key={`completed-${index}`}>{text}</li>;
          }
          if (index === typingIndex) {
            return (
              <li key={`typing-${index}`}>
                <SingleTypingLine text={text} onComplete={handleLineComplete} />
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
}
