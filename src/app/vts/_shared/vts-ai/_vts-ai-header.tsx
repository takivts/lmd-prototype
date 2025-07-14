import { useAppContext } from "../../../context/AppContext";

export default function VtsAiHeader({ onReset }: { onReset?: () => void }) {
  const { setVtsAiContentType } = useAppContext();

  const handleResetVtsAi = () => {
    setVtsAiContentType("default");
    onReset?.();
  };

  return (
    <div className="flex items-center border-b border-gray-300 px-4 py-4">
      <div className="bg-vts-purple-700 mr-2 flex size-12 flex-col items-center justify-center rounded-full text-[10px] font-bold text-white">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.3186 8.44355L10.0082 6.24573L10 6.25098L6.68731 8.44939L4.23807 6.83031L10 3.00524L10.0082 3L15.7684 6.82389L13.3186 8.44355Z"
            fill="currentColor"
          />
          <path
            d="M0 6.97529L9.99826 13.2394L10 13.2383L20 6.97296V11.1518L10 17.4165L9.99826 17.4177L0 11.1535V6.97529Z"
            fill="currentColor"
          />
        </svg>
        VTS AI
      </div>
      <div className="flex flex-col">
        <h5 className="text-lg font-bold">VTS AI</h5>
        <span className="text-vts-primary"></span>
      </div>
      <div className="flex grow justify-end gap-2">
        {/* <span className="hover:bg-vts-purple-100 text-vts-purple-700 flex cursor-pointer justify-end rounded-lg px-1 py-1">
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
              d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
            />
          </svg>
        </span> */}
        <span
          className="hover:bg-vts-purple-100 text-vts-purple-700 flex cursor-pointer justify-end rounded-lg px-1 py-1"
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
        </span>
      </div>
    </div>
  );
}
