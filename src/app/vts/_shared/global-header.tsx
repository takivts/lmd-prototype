"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GlobalHeader() {
  const url = usePathname();
  const isInsights = url?.includes("insights");
  const isMarket = url?.includes("market");
  const isLease = url?.includes("lease");

  return (
    <div className="flex h-[50px] items-center bg-black px-4">
      <Link href="/">
        <Image
          src="/VTS-Logo_Horizontal_White.svg"
          alt="VTS Logo"
          width={100}
          height={100}
          className="h-6 object-contain"
        />
      </Link>
      <span className="flex h-full items-center text-xs font-bold text-white uppercase">
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
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </span>
      <span className="mx-3 border-r border-white/50 py-3" />
      <span
        className={`flex h-full items-center border-t-6 border-transparent px-3 text-xs font-bold text-white uppercase ${
          isMarket ? "border-vts-purple-500 bg-white/20" : ""
        }`}
      >
        <Link href="/vts/market">Market</Link>
      </span>
      <span
        className={`flex h-full items-center border-t-6 border-transparent px-3 text-xs font-bold text-white uppercase ${
          isLease ? "border-vts-purple-500 bg-white/20" : ""
        }`}
      >
        <Link href="/vts/lease">Lease</Link>
      </span>
      <span
        className={`flex h-full items-center border-t-6 border-transparent px-3 text-xs font-bold text-white uppercase ${
          isInsights ? "border-vts-purple-500 bg-white/20" : ""
        }`}
      >
        <Link href="/vts/insights">Insights</Link>
      </span>
      <span className="flex h-full items-center border-t-6 border-transparent px-3 text-xs font-bold text-white uppercase">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="mr-2 size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        Search
      </span>
    </div>
  );
}
