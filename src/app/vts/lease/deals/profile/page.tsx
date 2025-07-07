export default function DealProfilePage() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-col gap-2 p-8">
        <div className="text-xs text-gray-500">
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
          <div className="text-vts-purple-700 flex items-center gap-6 pr-8">
            <span className="hover:bg-vts-purple-100 flex cursor-pointer items-center gap-1 truncate rounded-md px-2 py-1">
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
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>
              Edit Deal
            </span>
            <span className="hover:bg-vts-purple-100 flex cursor-pointer items-center gap-1 truncate rounded-md px-2 py-1">
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
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Export
            </span>
            <span className="hover:bg-vts-purple-100 flex cursor-pointer items-center gap-1 truncate rounded-md px-2 py-1">
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
          <span className="text-sm text-gray-500">
            Standardized Tenant{" "}
            <span className="text-vts-purple-700 cursor-pointer underline decoration-dotted decoration-2">
              Global Starbucks Coffee
            </span>
          </span>
          <span className="text-sm text-gray-500">
            Deal Lead{" "}
            <span className="text-vts-purple-700 cursor-pointer underline decoration-dotted decoration-2">
              John Doe
            </span>
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm text-gray-500">Stage</span>
          <span className="flex w-48 items-center justify-between rounded-md border border-gray-300 px-2 py-1 text-sm">
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
        <div className="flex w-full gap-4 border-t border-b border-gray-300 px-8 pt-2">
          <span className="hover:border-b-vts-purple-700 cursor-pointer border-b-4 border-transparent py-1 text-sm font-bold text-gray-500">
            Info
          </span>
          <span className="hover:border-b-vts-purple-700 cursor-pointer border-b-4 border-transparent py-1 text-sm font-bold text-gray-500">
            Proposals
          </span>
          <span className="hover:border-b-vts-purple-700 cursor-pointer border-b-4 border-transparent py-1 text-sm font-bold text-gray-500">
            Approval
          </span>
          <span className="hover:border-b-vts-purple-700 cursor-pointer border-b-4 border-transparent py-1 text-sm font-bold text-gray-500">
            Tenant Coordination
          </span>
        </div>
      </div>
      <div className="flex w-full flex-1 flex-col rounded-md bg-gray-100 p-6">
        <div className="flex h-full flex-col gap-2 rounded-md border border-gray-300 bg-white">
          <div className="flex w-full gap-4 border-b border-gray-300 px-4 pt-2 pb-0">
            <span className="hover:border-b-vts-purple-700 cursor-pointer border-b-4 border-transparent py-1 text-sm font-bold text-gray-500">
              Proposals
            </span>
            <span className="hover:border-b-vts-purple-700 cursor-pointer border-b-4 border-transparent py-1 text-sm font-bold text-gray-500">
              Analysis
            </span>
            <span className="hover:border-b-vts-purple-700 cursor-pointer border-b-4 border-transparent py-1 text-sm font-bold text-gray-500">
              Cashflow
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
