"use client";

export default function MarketSidebar() {
  return (
    <div className="flex h-[calc(100dvh-50px)] w-[225px] shrink-0 flex-col border-r border-gray-300">
      <div className="bg-vts-purple-300 mx-4 my-6 flex h-[135px] rounded-lg" />

      <ul className="mb-8 text-sm">
        <li className="border-l-8 border-transparent px-4 py-2 text-gray-700">
          Leads
        </li>
        <li className="border-l-8 border-transparent px-4 py-2 text-gray-700">
          Buildings
        </li>
        <li className="border-l-8 border-transparent px-4 py-2 text-gray-700">
          Listings
        </li>
        <li className="border-l-8 border-transparent px-4 py-2 text-gray-700">
          My Tourbooks
        </li>
        <li className="border-l-8 border-transparent px-4 py-2 text-gray-700">
          My shares
        </li>
        <li className="border-l-8 border-transparent px-4 py-2 text-gray-700">
          Marketing analytics
        </li>
        <li className="border-l-8 border-transparent px-4 py-2 text-gray-700">
          Inquiries
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
