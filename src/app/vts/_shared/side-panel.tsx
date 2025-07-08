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
    { label: "Tasks" },
    { label: "Documents" },
    { label: "Reminders" },
  ];
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
        <TabRow
          tabs={tabs}
          className="border-b border-gray-300"
          equalWidth={true}
        />
      </div>
    </div>
  );
}
