import ProposalCard from "@/app/vts/_shared/proposal-card";
import TabRow from "@/app/vts/_shared/tab-row";

export default function DealProfilePage() {
  const mainTabs = [
    { label: "Info" },
    { label: "Proposals", isActive: true },
    { label: "Approval" },
    { label: "Tenant Coordination" },
  ];

  const proposalTabs = [
    { label: "Proposals", isActive: true },
    { label: "Analysis" },
    { label: "Cashflow" },
  ];

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-col gap-2 p-8">
        <div className="text-xs text-gray-700">
          <span className="">VTS Lease</span> &gt;{" "}
          <span className="text-gray-700">Deals</span> &gt;{" "}
          <span className="font-bold text-gray-700">Deal Profile</span>
        </div>
        <div className="flex justify-between gap-2">
          <div className="flex items-center gap-2 truncate">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gray-700 align-middle font-bold text-white">
              SC
            </span>
            <h1 className="truncate text-4xl font-bold">Starbucks Coffee</h1>
          </div>
          <div className="text-vts-purple-700 flex items-center gap-4 pr-8 text-sm">
            <span className="hover:bg-vts-purple-100 flex cursor-pointer items-center gap-1 truncate rounded-lg px-2 py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>
              Edit Deal
            </span>
            <span className="hover:bg-vts-purple-100 flex cursor-pointer items-center gap-1 truncate rounded-lg px-2 py-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Export
            </span>
            <span className="hover:bg-vts-purple-100 flex cursor-pointer items-center gap-1 truncate rounded-lg px-2 py-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-700">
            Standardized Tenant{" "}
            <span className="text-vts-purple-700 cursor-pointer underline decoration-dotted decoration-2">
              Global Starbucks Coffee
            </span>
          </span>
          <span className="text-sm text-gray-700">
            Deal Lead{" "}
            <span className="text-vts-purple-700 cursor-pointer underline decoration-dotted decoration-2">
              John Doe
            </span>
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm text-gray-700">Stage</span>
          <span className="flex w-48 items-center justify-between rounded-lg border border-gray-300 px-2 py-1 text-sm">
            Lease Out
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex gap-2">
        <TabRow tabs={mainTabs} className="border-y border-gray-300" />
      </div>

      <div className="flex w-full flex-1 flex-col overflow-auto rounded-lg bg-gray-100 p-6">
        <div className="flex min-h-full flex-col gap-2 rounded-lg border border-gray-300 bg-white">
          <TabRow tabs={proposalTabs} className="border-b border-gray-300" />

          <div className="relative flex flex-col gap-2 overflow-auto p-4">
            <div className="flex gap-2 overflow-auto pr-16 pb-4 text-xs">
              <div className="pointer-events-none absolute top-0 right-8 h-[calc(100%-32px)] w-16 bg-gradient-to-r from-transparent to-white" />
              <div className="flex w-48 shrink-0 flex-col rounded-lg">
                <div className="min-h-30" />
                <div className="flex min-h-6 items-center gap-2">
                  <h5 className="text-base font-bold">Overview</h5>
                  <span className="h-1 w-full bg-gray-200" />
                </div>
                <div className="flex flex-col text-right text-gray-700">
                  <span className="border-b border-gray-200 px-2 pb-2">
                    Label
                  </span>
                  <span className="border-b border-gray-200 px-2 py-2">
                    Date Entered
                  </span>
                  <span className="border-b border-gray-200 px-2 py-2">
                    Lease Type
                  </span>
                  <span className="border-b border-gray-200 px-2 py-2">
                    Type
                  </span>
                  <span className="border-b border-gray-200 px-2 py-2">
                    Space(s)
                  </span>
                  <span className="border-b border-gray-200 px-2 py-2">
                    Size (sm)
                  </span>
                  <span className="border-b border-gray-200 px-2 py-2">
                    Downtime (mo)
                  </span>
                  <span className="border-b border-gray-200 px-2 py-2">
                    Tenant Possession Date
                  </span>
                  <span className="border-b border-gray-200 px-2 py-2">
                    Tenant Buildout Period (days)
                  </span>
                  <span className="border-b border-gray-200 px-2 py-2">
                    Tenant Buildout Period (mo)
                  </span>
                  <span className="border-b border-gray-200 px-2 py-2">
                    LCD
                  </span>
                  <span className="border-b border-gray-200 px-2 py-2">
                    Lock-In End
                  </span>
                  <span className="border-b border-gray-200 px-2 py-2">
                    Term (mo)
                  </span>
                </div>
              </div>

              <ProposalCard
                title="Previous Lease"
                data={{
                  label: "TBD",
                  dateEntered: "Jan 10, 2019",
                  leaseType: "Gross",
                  type: "Renewal",
                  spaces: "Unit 102",
                  size: "1,750",
                  downtime: "1",
                  tenantPossessionDate: "Feb 1, 2020",
                  tenantBuildoutPeriodDays: "30",
                  tenantBuildoutPeriodMonths: "1",
                  lcd: "Feb 1, 2020",
                  lockInEnd: "Jan 31, 2025",
                  term: "60",
                }}
              />

              <ProposalCard
                title="Budget"
                actions={[{ text: "Select budget" }]}
                data={{
                  label: "TBD",
                  dateEntered: "Dec 10, 2024",
                  leaseType: "Gross",
                  type: "New",
                  spaces: "Unit 102",
                  size: "1,800",
                  downtime: "2",
                  tenantPossessionDate: "Mar 1, 2025",
                  tenantBuildoutPeriodDays: "45",
                  tenantBuildoutPeriodMonths: "1.5",
                  lcd: "Mar 1, 2025",
                  lockInEnd: "Feb 28, 2030",
                  term: "60",
                }}
              />

              <ProposalCard
                title="Tenant"
                actions={[
                  { text: "Analyze proposal", isUnderlined: true },
                  { text: "View details" },
                  { text: "Generate LOI" },
                ]}
                data={{
                  label: "Starbucks Coffee",
                  dateEntered: "Dec 15, 2024",
                  leaseType: "National",
                  type: "Coffee Retail",
                  spaces: "Unit 102",
                  size: "1,800",
                  downtime: "2",
                  tenantPossessionDate: "Mar 1, 2025",
                  tenantBuildoutPeriodDays: "45",
                  tenantBuildoutPeriodMonths: "1.5",
                  lcd: "Mar 1, 2025",
                  lockInEnd: "Feb 28, 2030",
                  term: "60",
                }}
              />

              <ProposalCard
                title="Landlord"
                actions={[
                  { text: "Analyze proposal", isUnderlined: true },
                  { text: "View details" },
                  { text: "Generate LOI" },
                ]}
                data={{
                  label: "Downtown Plaza LLC",
                  dateEntered: "Dec 15, 2024",
                  leaseType: "Commercial",
                  type: "Property Owner",
                  spaces: "Unit 102",
                  size: "1,800",
                  downtime: "2",
                  tenantPossessionDate: "Mar 1, 2025",
                  tenantBuildoutPeriodDays: "45",
                  tenantBuildoutPeriodMonths: "1.5",
                  lcd: "Mar 1, 2025",
                  lockInEnd: "Feb 28, 2030",
                  term: "60",
                }}
                showMenuIcon={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
