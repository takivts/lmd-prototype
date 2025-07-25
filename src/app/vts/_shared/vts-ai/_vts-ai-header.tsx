import { useAppContext } from "../../../context/AppContext";

export default function VtsAiHeader({ onReset }: { onReset?: () => void }) {
  const { setVtsAiContentType } = useAppContext();

  const handleResetVtsAi = () => {
    setVtsAiContentType("default");
    onReset?.();
  };

  return (
    <div className="flex items-center px-4 pt-2 pb-4">
      <div className="flex items-center gap-1 text-white">
        <div className="mr-2 flex size-8">
          <svg className="h-full w-full" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M47.9468 29.5968L36.0295 21.6846L36.0001 21.7035L24.0743 29.6178L15.2571 23.7891L36.0001 10.0189L36.0295 10L56.7662 23.766L47.9468 29.5968Z"
              fill="currentColor"
            />
            <path
              d="M0 24.3111L35.9937 46.862L36 46.8578L72 24.3027V39.3464L36 61.8995L35.9937 61.9037L0 39.3527V24.3111Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <h5 className="text-sm font-bold">VTS AI</h5>
      </div>

      <div className="flex grow justify-end gap-2 text-sm">
        <span
          className="hover:text-vts-purple-800 flex cursor-pointer justify-end gap-1 rounded-full px-2 py-1 font-medium text-white transition-all duration-300 hover:bg-white/75"
          onClick={handleResetVtsAi}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
          New prompt
        </span>
      </div>
    </div>
  );
}
