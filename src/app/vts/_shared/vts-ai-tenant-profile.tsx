export default function VtsAiTenantProfile({
  className,
  isOpen,
}: {
  className?: string;
  isOpen: boolean;
}) {
  return (
    <div
      className={`mx-auto my-8 max-h-172 w-lg overflow-y-auto scroll-auto rounded-lg border border-gray-200 bg-white p-6 font-sans text-sm text-gray-700 shadow-lg transition-all duration-300 select-none ${className} ${
        isOpen
          ? "opacity-100 select-text"
          : "pointer-events-none opacity-0 select-none"
      }`}
    >
      <div className="mb-3 flex items-center">
        <img
          src="/Churchs-logo.svg"
          alt="Church's Logo"
          className="mr-3 h-12 w-12 rounded-full"
        />
        <div className="flex flex-col">
          <h5 className="text-lg">Church’s Fried Chicken</h5>
          <span className="text-vts-primary">
            <a
              href="http://www.chuchsfriedchicken.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.chuchsfriedchicken.com
            </a>
          </span>
        </div>
      </div>

      <div className="mb-4 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
        <div className="mb-1">Key Insights from VTS Data</div>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            Active retail demand is down 7% QoQ, driven by softening in
            &lt;5,000 SF quick-service requirements
          </li>
          <li>
            Leasing Velocity in Financial District is stable; Hudson Yards saw a
            5% increase in food and beverage leasing
          </li>
          <li>
            Retail tenant demand has increased 9% in West Loop, led by
            food-service operators
          </li>
        </ul>
      </div>

      <div className="mb-4">
        Church’s Fried Chicken, founded in 1952, is a leading quick-service
        restaurant chain with over 1,200 locations globally.
      </div>

      <div className="mb-1">Current Relationship</div>
      <ul className="mb-4 list-disc space-y-1 pl-5">
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

      <div className="mb-1">Performance & Operations</div>
      <ul className="mb-4 list-disc space-y-1 pl-5">
        <li>Work order and service request average completion time 36 hours</li>
        <li>
          Monthly NER receipts average $6,250; sales consistently exceed pro
          forma by 12%
        </li>
      </ul>

      <div className="mb-1">Capital & TI</div>
      <ul className="mb-4 list-disc space-y-1 pl-5">
        <li>
          $150K tenant improvement allowance for kitchen build-out and facade
          upgrades
        </li>
        <li>Landlord-funded signage package and HVAC replacement in Year 5</li>
      </ul>

      <div className="mb-1">Suggestions for follow up:</div>
      <div className="space-y-2">
        <div className="bg-vts-purple-100 text-vts-purple-700 hover:bg-vts-purple-100 cursor-pointer rounded-lg px-3 py-2 transition-all duration-300">
          What is the current demand trend for quick-service retail space in
          Financial District, Hudson Yards, and Chelsea?
        </div>
        <div className="bg-vts-purple-100 text-vts-purple-700 hover:bg-vts-purple-100 cursor-pointer rounded-lg px-3 py-2 transition-all duration-300">
          How has large-block retail demand changed in Downtown and West Loop
          Chicago in the past quarter?
        </div>
        <div className="bg-vts-purple-100 text-vts-purple-700 hover:bg-vts-purple-100 cursor-pointer rounded-lg px-3 py-2 transition-all duration-300">
          What submarkets have the strongest leasing velocity for retail tenants
          of 2,500–5,000 SF?
        </div>
      </div>
    </div>
  );
}
