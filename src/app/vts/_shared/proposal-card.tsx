interface ProposalAction {
  text: string;
  onClick?: () => void;
  isUnderlined?: boolean;
}

interface ProposalData {
  label: string;
  dateEntered: string;
  leaseType: string;
  type: string;
  spaces: string;
  size: string;
  downtime: string;
  tenantPossessionDate: string;
  tenantBuildoutPeriodDays: string;
  tenantBuildoutPeriodMonths: string;
  lcd: string;
  lockInEnd: string;
  term: string;
}

interface ProposalCardProps {
  title: string;
  actions?: ProposalAction[];
  data: ProposalData;
  showMenuIcon?: boolean;
  onMenuClick?: () => void;
}

export default function ProposalCard({
  title,
  actions = [],
  data,
  showMenuIcon = false,
  onMenuClick,
}: ProposalCardProps) {
  return (
    <div className="relative flex h-fit w-48 shrink-0 flex-col rounded-lg border border-gray-300">
      <div className="flex min-h-30 flex-col gap-2 rounded-tl-lg rounded-tr-lg p-2 text-center">
        <h5 className="flex items-center justify-center gap-1 text-base font-bold">
          {title}
          {showMenuIcon && (
            <span className="hover:bg-vts-purple-100 absolute top-1.5 right-1.5 cursor-pointer rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="text-vts-purple-700 size-6 cursor-pointer"
                onClick={onMenuClick}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                />
              </svg>
            </span>
          )}
        </h5>
        {actions.map((action, index) => (
          <span
            key={index}
            className={`text-vts-purple-700 cursor-pointer text-xs ${
              action.isUnderlined
                ? "underline decoration-dotted decoration-2"
                : ""
            }`}
            onClick={action.onClick}
          >
            {action.text}
          </span>
        ))}
      </div>
      <div className="flex min-h-6 items-center gap-2">
        <span className="h-1 w-full bg-gray-200" />
      </div>
      <div className="flex h-full flex-col text-right text-gray-700">
        <span className="truncate border-b border-gray-200 px-3 pb-2">
          {data.label}
        </span>
        <span className="truncate border-b border-gray-200 px-3 py-2">
          {data.dateEntered}
        </span>
        <span className="truncate border-b border-gray-200 px-3 py-2">
          {data.leaseType}
        </span>
        <span className="truncate border-b border-gray-200 px-3 py-2">
          {data.type}
        </span>
        <span className="truncate border-b border-gray-200 px-3 py-2">
          {data.spaces}
        </span>
        <span className="truncate border-b border-gray-200 px-3 py-2">
          {data.size}
        </span>
        <span className="truncate border-b border-gray-200 px-3 py-2">
          {data.downtime}
        </span>
        <span className="truncate border-b border-gray-200 px-3 py-2">
          {data.tenantPossessionDate}
        </span>
        <span className="truncate border-b border-gray-200 px-3 py-2">
          {data.tenantBuildoutPeriodDays}
        </span>
        <span className="truncate border-b border-gray-200 px-3 py-2">
          {data.tenantBuildoutPeriodMonths}
        </span>
        <span className="truncate border-b border-gray-200 px-3 py-2">
          {data.lcd}
        </span>
        <span className="truncate border-b border-gray-200 px-3 py-2">
          {data.lockInEnd}
        </span>
        <span className="truncate border-gray-200 px-3 py-2">{data.term}</span>
      </div>
    </div>
  );
}
