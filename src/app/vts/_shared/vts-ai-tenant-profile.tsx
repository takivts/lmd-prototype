export default function VtsAiTenantProfile({
  className,
  isOpen,
}: {
  className?: string;
  isOpen: boolean;
}) {
  return (
    <div
      className={`w-lg rounded-lg border border-gray-300 bg-white text-sm text-gray-700 shadow-lg transition-all duration-300 select-none ${className} ${
        isOpen
          ? "opacity-100 select-text"
          : "pointer-events-none opacity-0 select-none"
      }`}
    >
      <div className="flex items-center border-b border-gray-300 px-4 py-4">
        <img
          src="/Churchs-logo.svg"
          alt="Church's Logo"
          className="mr-3 h-12 w-12 rounded-full"
        />
        <div className="flex flex-col">
          <h5 className="text-lg">Church’s Fried Chicken</h5>
          <span className="text-vts-primary">
            <a
              href="https://churchstexaschicken.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.chuchsfriedchicken.com
            </a>
          </span>
        </div>
        <div className="flex grow justify-end">
          <span className="hover:bg-vts-purple-100 text-vts-purple-700 flex cursor-pointer justify-end rounded-lg px-1 py-1">
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
                d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex h-128 flex-col overflow-auto p-4">
        <div className="mb-4">
          Church’s Fried Chicken, founded in 1952, is a leading quick-service
          restaurant chain with over 1,200 locations globally.
        </div>

        <div className="mb-4 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
          <div className="mb-1">Key Insights from VTS Data</div>
          <ul className="list-disc pl-5">
            <li>
              Active retail demand is down 7% QoQ, driven by softening in
              &lt;5,000 SF quick-service requirements
            </li>
            <li>
              Leasing Velocity in Financial District is stable; Hudson Yards saw
              a 5% increase in food and beverage leasing
            </li>
            <li>
              Retail tenant demand has increased 9% in West Loop, led by
              food-service operators
            </li>
          </ul>
        </div>

        <h5 className="mb-1 font-bold">Current Relationship</h5>
        <ul className="mb-4 list-disc pl-5">
          <li>
            The tenant currently has 12,500 sf. spaces across 5 leases in our
            portfolio
          </li>
          <li>
            In the past 2 years we have executed deals in{" "}
            <a href="#" className="text-vts-purple-700 underline">
              Financial District
            </a>
            ,{" "}
            <a href="#" className="text-vts-purple-700 underline">
              Hudson Yards
            </a>{" "}
            and{" "}
            <a href="#" className="text-vts-purple-700 underline">
              Chelsea
            </a>
          </li>
          <li>
            Renewal option for{" "}
            <a href="#" className="text-vts-purple-700 underline">
              SoHo
            </a>{" "}
            executed early in Q1 2025, locking in rent escalations through 2032
          </li>
          <li>
            Currently 2 deals actively in the pipeline in{" "}
            <a href="#" className="text-vts-purple-700 underline">
              Downtown
            </a>{" "}
            and{" "}
            <a href="#" className="text-vts-purple-700 underline">
              West Loop
            </a>{" "}
            areas Chicago
          </li>
        </ul>

        <h5 className="mb-1 font-bold">Performance & Operations</h5>
        <ul className="mb-4 list-disc pl-5">
          <li>
            Work order and service request average completion time 36 hours
          </li>
          <li>
            Monthly NER receipts average $6,250; sales consistently exceed pro
            forma by 12%
          </li>
        </ul>

        <h5 className="mb-1 font-bold">Capital & TI</h5>
        <ul className="mb-4 list-disc pl-5">
          <li>
            $150K tenant improvement allowance for kitchen build-out and facade
            upgrades
          </li>
          <li>
            Landlord-funded signage package and HVAC replacement in Year 5
          </li>
        </ul>

        <h5 className="mb-1 font-bold">Suggestions for follow up:</h5>
        <div className="space-y-2">
          <div className="bg-vts-purple-100 text-vts-purple-700 hover:bg-vts-purple-100 border-vts-purple-300 cursor-pointer rounded-lg border px-3 py-2 transition-all duration-300">
            What is the current demand trend for quick-service retail space in
            Financial District, Hudson Yards, and Chelsea?
          </div>
          <div className="bg-vts-purple-100 text-vts-purple-700 hover:bg-vts-purple-100 border-vts-purple-300 cursor-pointer rounded-lg border px-3 py-2 transition-all duration-300">
            How has large-block retail demand changed in Downtown and West Loop
            Chicago in the past quarter?
          </div>
          <div className="bg-vts-purple-100 text-vts-purple-700 hover:bg-vts-purple-100 border-vts-purple-300 cursor-pointer rounded-lg border px-3 py-2 transition-all duration-300">
            What submarkets have the strongest leasing velocity for retail
            tenants of 2,500–5,000 SF?
          </div>
        </div>
      </div>
    </div>
  );
}
