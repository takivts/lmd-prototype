"use client";

import { usePathname } from "next/navigation";

export default function LeaseLeftNav() {
  const url = usePathname();
  const isDeals = url?.includes("deals");

  return (
    <div className="flex h-full min-h-[calc(100dvh-50px)] w-[225px] shrink-0 flex-col border-r border-gray-300">
      <div className="bg-vts-purple-300 mx-4 my-6 flex h-[135px] shrink-0 rounded-lg" />

      <ul className="mb-8 text-sm">
        <li
          className={`border-l-8 border-transparent px-4 py-2 text-gray-700 ${
            isDeals ? "border-vts-primary bg-white" : ""
          }`}
        >
          Deals
        </li>
        <li className="cursor-pointer border-l-8 border-transparent px-4 py-2 text-gray-700 hover:bg-white">
          Deal tasks
        </li>
        <li className="cursor-pointer border-l-8 border-transparent px-4 py-2 text-gray-700 hover:bg-white">
          Tenant coordination
        </li>
        <li className="cursor-pointer border-l-8 border-transparent px-4 py-2 text-gray-700 hover:bg-white">
          Leases
        </li>
        <li className="cursor-pointer border-l-8 border-transparent px-4 py-2 text-gray-700 hover:bg-white">
          Options
        </li>
        <li className="cursor-pointer border-l-8 border-transparent px-4 py-2 text-gray-700 hover:bg-white">
          Budgets
        </li>
        <li className="cursor-pointer border-l-8 border-transparent px-4 py-2 text-gray-700 hover:bg-white">
          Appraisals
        </li>
        <li className="cursor-pointer border-l-8 border-transparent px-4 py-2 text-gray-700 hover:bg-white">
          Comps
        </li>
        <li className="cursor-pointer border-l-8 border-transparent px-4 py-2 text-gray-700 hover:bg-white">
          Tenants
        </li>
      </ul>

      <h5 className="mb-2 ml-6 text-xs font-semibold text-gray-700 uppercase">
        Inventory
      </h5>
      <ul className="mb-8 text-sm">
        <li className="cursor-pointer border-l-8 border-transparent px-4 py-2 text-gray-700 hover:bg-white">
          Assets
        </li>
        <li className="cursor-pointer border-l-8 border-transparent px-4 py-2 text-gray-700 hover:bg-white">
          Spaces
        </li>
        <li className="cursor-pointer border-l-8 border-transparent px-4 py-2 text-gray-700 hover:bg-white">
          Stacking plan
        </li>
        <li className="cursor-pointer border-l-8 border-transparent px-4 py-2 text-gray-700 hover:bg-white">
          Site plan
        </li>
      </ul>
    </div>
  );
}
