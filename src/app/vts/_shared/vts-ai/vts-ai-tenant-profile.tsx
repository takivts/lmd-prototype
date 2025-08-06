import Image from "next/image";

export default function VtsAiTenantProfile({ className, isOpen }: { className?: string; isOpen: boolean }) {
  return (
    <div
      className={`w-lg rounded-lg text-gray-700 shadow-lg transition-all duration-200 select-none ${className} ${
        isOpen ? "opacity-100 select-text" : "pointer-events-none opacity-0 select-none"
      }`}
    >
      <div className="relative z-50 rounded-lg border border-gray-300 bg-white text-sm">
        <div className="flex items-center border-b border-gray-300 px-4 py-4">
          <Image
            src="/logo-starbucks.svg"
            alt="Starbucks Logo"
            className="mr-3 h-12 w-12 rounded-full"
            width={48}
            height={48}
          />
          <div className="flex flex-col">
            <h5 className="text-lg">Starbucks</h5>
            <span className="text-vts-primary">
              <a href="https://www.starbucks.com/" target="_blank" rel="noopener noreferrer">
                www.starbucks.com
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

        <div className="flex h-156 flex-col overflow-auto rounded-br-lg rounded-bl-lg p-4">
          <h4 className="mb-2 text-base font-bold">Starbucks – Global Tenant Profile</h4>

          <div className="mb-4">
            <h5 className="mb-1 font-bold">Ticker / Sector / Rating</h5>
            <p className="mb-4">Starbucks Corp. (Nasdaq: SBUX) – Global specialty-coffee retailer/QSR</p>
            <p className="mb-2">
              Investment-grade credit: S&P BBB+ (negative outlook, May 2025) | Moody&apos;s Baa1 (negative)
            </p>
            <div className="mb-2 text-xs text-gray-600">
              <a
                href="https://disclosure.spglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vts-purple-700 underline"
              >
                disclosure.spglobal.com
              </a>{" "}
              |
              <a
                href="https://investing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vts-purple-700 underline"
              >
                {" "}
                investing.com
              </a>
            </div>
          </div>

          <div className="mb-4">
            <h5 className="mb-1 font-bold">Scale & Footprint</h5>
            <ul className="mb-2 list-disc pl-5">
              <li>40,789 cafés worldwide at Q2 FY-2025; 53% company-operated / 47% licensed.</li>
              <li>USA + China remain the anchor markets (≈61% of all units; 16,352 U.S. / 6,806 China at FY-2023).</li>
              <li>Canada: ~1,400 locations across every province – useful for domestic rent comps.</li>
              <li>FY-2024 consolidated revenue $36.2 bn (+1% y/y); global comps –2%.</li>
            </ul>
            <div className="mb-2 text-xs text-gray-600">
              <a
                href="https://investor.starbucks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vts-purple-700 underline"
              >
                investor.starbucks.com
              </a>{" "}
              |
              <a
                href="https://stories.starbucks.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vts-purple-700 underline"
              >
                {" "}
                stories.starbucks.ca
              </a>
            </div>
          </div>

          <div className="mb-4">
            <h5 className="mb-1 font-bold">Real-Estate Strategy</h5>
            <ul className="mb-2 list-disc pl-5">
              <li>
                2025 plan: slow new-build pipeline to redirect cap-ex toward remodels / throughput upgrades (&quot;Back
                to Starbucks&quot; turnaround).
              </li>
              <li>Exploring minority stake sale of China business while still targeting 9,000 CN cafés by 2025.</li>
            </ul>
            <div className="mb-2 text-xs text-gray-600">
              <a
                href="https://fermag.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vts-purple-700 underline"
              >
                fermag.com
              </a>{" "}
              |
              <a
                href="https://6sqft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vts-purple-700 underline"
              >
                {" "}
                6sqft.com
              </a>{" "}
              |
              <a
                href="https://costar.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vts-purple-700 underline"
              >
                {" "}
                costar.com
              </a>{" "}
              |
              <a
                href="https://ft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vts-purple-700 underline"
              >
                {" "}
                ft.com
              </a>
            </div>
          </div>

          <div className="mb-4">
            <h5 className="mb-1 font-bold">Lease & Credit Characteristics</h5>
            <ul className="mb-2 list-disc pl-5">
              <li>Weighted-average remaining lease term: 8.5 years on operating leases (10-K).</li>
              <li>
                Corporate guaranty on company-operated sites; licensed‐store leases typically backed by local franchisee
                covenant.
              </li>
              <li>
                Rent structure: vanilla NNN or NN with base + 5-7% percentage rent kicker above breakpoint; CAM,
                real-estate tax pass-throughs standard.
              </li>
              <li>Occupancy expenses recorded straight-line; FY-2024 cash paid on operating leases ≈ $1.66 bn.</li>
            </ul>
            <div className="mb-2 text-xs text-gray-600">
              <a
                href="https://investor.starbucks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vts-purple-700 underline"
              >
                investor.starbucks.com
              </a>
            </div>
          </div>

          <div className="mb-4">
            <h5 className="mb-1 font-bold">Financial Health Snapshot (FY-2024)</h5>
            <ul className="mb-4 list-disc pl-5">
              <li>Revenue $36.2 bn | Operating margin 18.7% (–450 bps y/y)</li>
              <li>Net income $3.0 bn | EPS $3.31 (–8% y/y)</li>
              <li>
                Liquidity: $3.8 bn cash & equivalents; $15 bn total debt; revolving CP program maintained. (10-K, 2024).
              </li>
              <li>Negative outlooks reflect traffic softness, higher labor costs and elevated cap-ex.</li>
            </ul>
            <div className="mb-2 text-xs text-gray-600">
              <a
                href="https://investor.starbucks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vts-purple-700 underline"
              >
                investor.starbucks.com
              </a>{" "}
              |
              <a
                href="https://sec.gov"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vts-purple-700 underline"
              >
                {" "}
                sec.gov
              </a>{" "}
              |
              <a
                href="https://ft.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vts-purple-700 underline"
              >
                {" "}
                ft.com
              </a>{" "}
              |
              <a
                href="https://investing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vts-purple-700 underline"
              >
                {" "}
                investing.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
