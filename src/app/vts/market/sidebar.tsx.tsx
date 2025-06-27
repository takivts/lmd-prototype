"use client";

export default function MarketSidebar() {
  return (
    <div className="flex h-[calc(100dvh-50px)] w-[225px] shrink-0 flex-col bg-gray-100">
      <div className="bg-vts-purple-300 mx-4 my-6 flex h-[135px] rounded-lg" />

      <ul className="mb-8 text-sm">
        <li className="border-l-8 border-transparent px-4 py-2 text-gray-700">
          Deals
        </li>
        <li className="border-l-8 border-transparent px-4 py-2 text-gray-700">
          Deal tasks
        </li>
        <li className="border-l-8 border-transparent px-4 py-2 text-gray-700">
          Tenant coordination
        </li>
        <li className="border-l-8 border-transparent px-4 py-2 text-gray-700">
          Leases
        </li>
        <li className="border-l-8 border-transparent px-4 py-2 text-gray-700">
          Options
        </li>
        <li className="border-l-8 border-transparent px-4 py-2 text-gray-700">
          Budgets
        </li>
        <li className="border-l-8 border-transparent px-4 py-2 text-gray-700">
          Appraisals
        </li>
        <li className="border-l-8 border-transparent px-4 py-2 text-gray-700">
          Comps
        </li>
        <li className="border-l-8 border-transparent px-4 py-2 text-gray-700">
          Tenants
        </li>
      </ul>

      <h5 className="mb-2 ml-6 text-xs font-semibold text-gray-700 uppercase">
        Inventory
      </h5>
      <ul className="mb-8 text-sm">
        <li className="border-l-8 border-transparent px-4 py-2 text-gray-700">
          Assets
        </li>
        <li className="border-l-8 border-transparent px-4 py-2 text-gray-700">
          Spaces
        </li>
        <li className="border-l-8 border-transparent px-4 py-2 text-gray-700">
          Stacking plan
        </li>
        <li className="border-l-8 border-transparent px-4 py-2 text-gray-700">
          Site plan
        </li>
      </ul>
    </div>
  );
}
