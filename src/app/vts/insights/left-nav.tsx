"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function InsightsSidebar() {
  const url = usePathname();
  const isVtsMaxAi = url?.includes("vts-max-ai");
  const isMap = url?.includes("map");

  return (
    <div className="flex h-[calc(100dvh-50px)] w-[225px] shrink-0 flex-col border-r border-gray-300">
      <div className="bg-vts-purple-300 mx-4 my-6 flex h-[135px] rounded-lg" />
      <h5 className="mb-2 ml-6 text-xs font-semibold text-gray-700 uppercase">
        Portfolio insights
      </h5>
      <ul className="mb-8 text-sm">
        <li className="border-l-8 border-transparent px-4 py-2 text-gray-700">
          Leasing activity report
        </li>
        <li className="border-l-8 border-transparent px-4 py-2 text-gray-700">
          Portfolio dashboards
        </li>
        <li className="border-l-8 border-transparent px-4 py-2 text-gray-700">
          Portfolio alerts
        </li>
        <li className="border-l-8 border-transparent px-4 py-2 text-gray-700">
          Portfolio reports
        </li>
        <li className="border-l-8 border-transparent px-4 py-2 text-gray-700">
          Lease charts
        </li>
        <li
          className={`border-l-8 border-transparent px-4 py-2 text-gray-700 ${
            isMap ? "border-vts-purple-700 bg-white" : ""
          }`}
        >
          <Link href="/vts/insights/heat-maps">Heat maps</Link>
        </li>
      </ul>

      <h5 className="mb-2 ml-6 text-xs font-semibold text-gray-700 uppercase">
        VTS Data
      </h5>
      <ul className="mb-8 text-sm">
        <li
          className={`border-l-8 border-transparent px-4 py-2 text-gray-700 ${
            isVtsMaxAi ? "border-vts-purple-700 bg-white" : ""
          }`}
        >
          <Link href="/vts/insights/vts-max-ai">VTS Max AI</Link>
        </li>
        <li className="border-l-8 border-transparent px-4 py-2 text-gray-700">
          Data dashboards
        </li>
        <li className="border-l-8 border-transparent px-4 py-2 text-gray-700">
          Submarket summary
        </li>
        <li className="border-l-8 border-transparent px-4 py-2 text-gray-700">
          Data extract
        </li>
        <li className="border-l-8 border-transparent px-4 py-2 text-gray-700">
          Data reports
        </li>
        <li className="border-l-8 border-transparent px-4 py-2">VODI</li>
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
