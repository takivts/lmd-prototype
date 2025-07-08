export default function SidePanel({
  isSidePanelOpen,
  setIsSidePanelOpen,
}: {
  isSidePanelOpen: boolean;
  setIsSidePanelOpen: (isSidePanelOpen: boolean) => void;
}) {
  return (
    <div
      className={`relative border-l border-gray-300 transition-all duration-300 ${isSidePanelOpen ? "w-0" : "w-2xl"}`}
    >
      <div
        className="bg-vts-primary hover:bg-vts-purple-600 absolute top-14 -left-10 z-50 cursor-pointer rounded-tl-md rounded-bl-md p-2 text-white transition-all duration-300"
        onClick={() => setIsSidePanelOpen(!isSidePanelOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`size-6 transition-all duration-300 ${isSidePanelOpen ? "rotate-180" : "translate-x-0.5"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
      <div
        className={`h-full bg-white transition-all duration-300 ${isSidePanelOpen && "hidden"}`}
      >
        <div className="flex w-full justify-between border-t border-b border-gray-300 px-4 pt-1">
          <span className="group relative cursor-pointer py-1 text-sm font-semibold text-gray-500">
            <span className="relative z-10">Updates</span>
            <span className="bg-vts-purple-700 absolute -bottom-0.5 left-1/2 h-1 w-0 -translate-x-1/2 rounded-lg opacity-0 transition-all duration-300 ease-out group-hover:w-full group-hover:opacity-100"></span>
          </span>
          <span className="group relative cursor-pointer py-1 text-sm font-semibold text-gray-500">
            <span className="relative z-10">Tasks</span>
            <span className="bg-vts-purple-700 absolute -bottom-0.5 left-1/2 h-1 w-0 -translate-x-1/2 rounded-lg opacity-0 transition-all duration-300 ease-out group-hover:w-full group-hover:opacity-100"></span>
          </span>
          <span className="group relative cursor-pointer py-1 text-sm font-semibold text-gray-500">
            <span className="relative z-10">Documents</span>
            <span className="bg-vts-purple-700 absolute -bottom-0.5 left-1/2 h-1 w-0 -translate-x-1/2 rounded-lg opacity-0 transition-all duration-300 ease-out group-hover:w-full group-hover:opacity-100"></span>
          </span>
          <span className="group relative cursor-pointer py-1 text-sm font-semibold text-gray-500">
            <span className="relative z-10">Reminders</span>
            <span className="bg-vts-purple-700 absolute -bottom-0.5 left-1/2 h-1 w-0 -translate-x-1/2 rounded-lg opacity-0 transition-all duration-300 ease-out group-hover:w-full group-hover:opacity-100"></span>
          </span>
        </div>
      </div>
    </div>
  );
}
