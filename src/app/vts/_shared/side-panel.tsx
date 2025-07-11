import TabRow from "@/app/vts/_shared/tab-row";

export default function SidePanel({
  isSidePanelOpen,
  setIsSidePanelOpen,
}: {
  isSidePanelOpen: boolean;
  setIsSidePanelOpen: (isSidePanelOpen: boolean) => void;
}) {
  const tabs = [
    { label: "Updates" },
    { label: "Relationships" },
    { label: "Documents" },
    { label: "Reminders" },
  ];
  return (
    <div
      className={`relative flex h-[100dvh-50px] border-l border-gray-300 transition-all duration-300 ${isSidePanelOpen ? "w-0" : "w-2xl"}`}
    >
      <div
        className="bg-vts-primary hover:bg-vts-purple-600 absolute top-14 -left-10 cursor-pointer rounded-tl-md rounded-bl-md p-2 text-white transition-all duration-300"
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
        className={`h-[calc(100dvh-50px)] overflow-auto bg-white transition-all duration-300 ${isSidePanelOpen ? "hidden" : ""}`}
      >
        <div className="sticky top-0 bg-white">
          <TabRow
            tabs={tabs}
            className="border-b border-gray-300 bg-white"
            equalWidth={true}
          />
          <div className="border-b border-gray-300 px-4 py-4 text-sm">
            <input
              type="text"
              placeholder="Add an update"
              className="w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>
        <div className="text-sm text-gray-700">
          <div className="flex gap-2 border-b border-gray-300 px-4 py-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-sm text-white">
              DC
            </div>
            <div className="flex flex-col">
              <p className="">
                <span>John Doe</span> attached a file
              </p>
              <span className="text-vts-purple-700 text-sm">
                black-swatch.png
              </span>
              <span className="text-xs text-gray-500">3 days ago</span>
            </div>
          </div>

          <div className="flex gap-2 border-b border-gray-300 px-4 py-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-white"></div>
            <div className="flex flex-col">
              <p className="">
                <span className="text-vts-purple-700">David Chan </span>
                <span className="">moved this deal to </span>
                <span className="">Legal</span>
              </p>
              <span className="text-xs text-gray-500">50 days ago</span>
            </div>
          </div>

          <div className="flex gap-2 border-b border-gray-300 px-4 py-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-white"></div>
            <div className="flex flex-col">
              <p className="">
                <span className="text-vts-purple-700">David Chan </span>
                <span className="">moved this deal to </span>
                <span className="">Proposal</span>
              </p>
              <span className="text-xs text-gray-500">295 days ago</span>
            </div>
          </div>

          <div className="flex gap-2 border-b border-gray-300 px-4 py-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-white"></div>
            <div className="flex flex-col">
              <p className="flex items-center space-x-2">
                <span className="text-vts-purple-700">David Chan </span>
                <span className="">moved this deal to </span>
                <span className="">Inquiry</span>
              </p>
              <span className="text-xs text-gray-500">359 days ago</span>
            </div>
          </div>
          <div className="flex gap-2 border-b border-gray-300 px-4 py-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-sm text-white">
              DC
            </div>
            <div className="flex flex-col">
              <p className="">
                <span>John Doe</span> attached a file
              </p>
              <span className="text-vts-purple-700 text-sm">
                black-swatch.png
              </span>
              <span className="text-xs text-gray-500">3 days ago</span>
            </div>
          </div>

          <div className="flex gap-2 border-b border-gray-300 px-4 py-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-white"></div>
            <div className="flex flex-col">
              <p className="">
                <span className="text-vts-purple-700">David Chan </span>
                <span className="">moved this deal to </span>
                <span className="">Legal</span>
              </p>
              <span className="text-xs text-gray-500">50 days ago</span>
            </div>
          </div>

          <div className="flex gap-2 border-b border-gray-300 px-4 py-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-white"></div>
            <div className="flex flex-col">
              <p className="">
                <span className="text-vts-purple-700">David Chan </span>
                <span className="">moved this deal to </span>
                <span className="">Proposal</span>
              </p>
              <span className="text-xs text-gray-500">295 days ago</span>
            </div>
          </div>

          <div className="flex gap-2 border-b border-gray-300 px-4 py-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-white"></div>
            <div className="flex flex-col">
              <p className="flex items-center space-x-2">
                <span className="text-vts-purple-700">David Chan </span>
                <span className="">moved this deal to </span>
                <span className="">Inquiry</span>
              </p>
              <span className="text-xs text-gray-500">359 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
