interface Tab {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export default function TabRow({
  tabs,
  className,
}: {
  tabs: Tab[];
  className?: string;
}) {
  return (
    <div
      className={`flex w-full gap-8 px-4 pt-1 pb-0 text-sm font-bold text-gray-500 ${className}`}
    >
      {tabs.map((tab, index) => (
        <span
          key={index}
          className="group relative cursor-pointer py-1"
          onClick={tab.onClick}
        >
          <span className="relative z-10">{tab.label}</span>
          <span
            className={`bg-vts-purple-700 absolute -bottom-0.5 left-1/2 h-1 -translate-x-1/2 rounded-lg transition-all duration-300 ease-out ${
              tab.isActive
                ? "w-full opacity-100"
                : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
            }`}
          />
        </span>
      ))}
    </div>
  );
}
