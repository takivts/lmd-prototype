"use client";

import { useAppContext } from "@/app/context/AppContext";
import { MarketAnalysisData } from "@/app/context/AppContext";
import ProposalCard from "@/app/vts/_shared/proposal-card";
import TabRow from "@/app/vts/_shared/tab-row";

export default function DealProfilePage() {
  const { setVtsAiContentType, setIsVtsAiOpen, isVtsAiOpen } = useAppContext();

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

  const newYorkMarketData: MarketAnalysisData = {
    marketMetadata: {
      title: "New York",
      buildingClass: "A",
    },
    marketData: [
      { label: "Avg. Gross NER", value: "$45.50 PSF" },
      { label: "Avg. TI", value: "$65.00 PSF" },
      { label: "Avg. Free Rent", value: "4.2 months" },
      { label: "# active proposals", value: "1,247" },
      { label: "Avg. Lease Term", value: "7.1 years" },
      { label: "Concession Value", value: "$88.50 PSF" },
    ],
    keyInsights: [
      "Manhattan retail market shows strong recovery with 15% increase in leasing activity Q4 2024.",
      "Ground floor spaces in prime locations commanding premium rents, up 8% year-over-year.",
      "Coffee shops and food service tenants driving demand in midtown and financial districts.",
      "Landlords offering more flexible lease terms to attract quality tenants.",
      "Foot traffic has returned to 95% of pre-pandemic levels in key retail corridors.",
    ],
    suggestedFollowUps: [
      "How is active demand trending in the past quarter in New York?",
      "What are the average lease terms for coffee shops in Manhattan?",
      "Show me comparable deals for retail spaces in this submarket.",
    ],
    summary:
      "The New York retail market demonstrates robust recovery with increased leasing velocity and stabilizing rents. Prime ground-floor retail spaces continue to command premium pricing, while landlords are becoming more flexible with lease structures. The coffee and food service sectors are particularly active, benefiting from strong foot traffic recovery and evolving consumer preferences for experiential retail.",
  };

  const handleVtsAiContentType = (
    contentType: string,
    data?: MarketAnalysisData,
  ) => {
    if (isVtsAiOpen) {
      setVtsAiContentType(contentType, data);
    } else {
      setVtsAiContentType(contentType, data);
      setTimeout(() => {
        setIsVtsAiOpen(true);
      }, 0);
    }
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-col gap-2 p-8">
        <div className="text-xs text-gray-700">
          <span className="">VTS Lease</span> &gt;{" "}
          <span className="text-gray-700">Deals</span> &gt;{" "}
          <span className="font-bold text-gray-700">Deal profile</span>
        </div>
        <div className="flex justify-between gap-2">
          <div className="flex items-center gap-2 truncate">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gray-700 align-middle font-bold text-white">
              SC
            </span>
            <h1 className="truncate text-4xl font-bold">Starbucks Coffee</h1>
          </div>
          <div className="text-vts-purple-700 flex items-center gap-4 pr-8 text-sm">
            <div className="text-vts-purple-700 hover:bg-vts-purple-100 flex cursor-pointer items-center gap-1 rounded-lg px-2 py-1.5 text-sm transition-all duration-300">
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
            </div>
            <div className="text-vts-purple-700 hover:bg-vts-purple-100 flex cursor-pointer items-center gap-1 rounded-lg px-2 py-1.5 text-sm transition-all duration-300">
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
            </div>
            <span className="hover:bg-vts-purple-100 flex cursor-pointer items-center gap-1 truncate rounded-lg px-1 py-1 transition-all duration-300">
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
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-500">Standardized tenant</span>
            <span
              className="text-vts-purple-700 flex cursor-pointer items-center gap-1 underline decoration-dotted decoration-2"
              onClick={() => handleVtsAiContentType("tenant")}
            >
              Global Starbucks Coffee
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-vts-purple-600 size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="gap-2 text-gray-500">Market</span>
            <span className="">New York</span>
            <span
              className="text-vts-purple-700 flex cursor-pointer items-center gap-1 underline decoration-dotted decoration-2"
              onClick={() =>
                handleVtsAiContentType("marketAnalysis", newYorkMarketData)
              }
            >
              Market overview
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-vts-purple-600 size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
          <div className="flex gap-8">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-sm text-gray-500">Deal lead</span>
                <span className="text-vts-purple-700 cursor-pointer">
                  John Doe
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">Stage</span>
              <span className="flex w-32 items-center justify-between rounded-lg border border-transparent px-2 py-0 transition-all duration-300 hover:border-gray-300">
                Lease out
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
        </div>
      </div>

      <div className="flex gap-2">
        <TabRow tabs={mainTabs} className="border-y border-gray-300" />
      </div>

      <div className="flex w-full flex-1 flex-col overflow-auto bg-gray-100 p-6">
        <div className="flex min-h-full flex-col gap-4 rounded-lg border border-gray-300 bg-white">
          <TabRow tabs={proposalTabs} className="border-b border-gray-300" />
          <div className="flex w-full justify-end gap-2 px-4">
            <div className="text-vts-purple-700 hover:bg-vts-purple-100 flex cursor-pointer items-center gap-1 rounded-lg px-2 py-1.5 text-sm transition-all duration-300">
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
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              New proposal
            </div>
            <div className="text-vts-purple-700 hover:bg-vts-purple-100 flex cursor-pointer items-center gap-1 rounded-lg px-2 py-1.5 text-sm transition-all duration-300">
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
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              Display options
            </div>
          </div>

          <div className="relative flex flex-col gap-2 overflow-auto px-4">
            <div className="flex gap-2 overflow-auto pr-8 pb-4 text-xs">
              {/* <div className="pointer-events-none absolute top-0 right-0 z-10 h-[calc(100%-32px)] w-16 bg-gradient-to-r from-transparent to-white" /> */}
              <div className="flex w-48 shrink-0 flex-col rounded-lg">
                <div className="min-h-30" />
                <div className="flex min-h-6.5 items-center gap-2">
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
                  // { text: "Analyze proposal", isUnderlined: true },
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
                  // { text: "Analyze proposal", isUnderlined: true },
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
