"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

export default function GlobalHeader() {
  const url = usePathname();
  const { logout } = useAuth();
  const isInsights = url?.includes("/vts/insights");
  const isMarket = url?.includes("/vts/market");
  const isLease = url?.includes("/vts/lease");

  const handleLogout = () => {
    logout();
  };

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
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </span>
      <span className="mx-3 border-r border-white/50 py-3" />
      <span
        className={`flex h-full items-center border-t-6 border-transparent px-3 text-xs font-bold text-white uppercase ${
          isMarket ? "border-vts-primary bg-white/10" : ""
        }`}
      >
        <Link className="py-2" href="/vts/market">
          Market
        </Link>
      </span>
      <span
        className={`flex h-full items-center border-t-6 border-transparent px-3 text-xs font-bold text-white uppercase ${
          isLease ? "border-vts-primary bg-white/10" : ""
        }`}
      >
        <Link className="py-2" href="/vts/lease">
          Lease
        </Link>
      </span>
      <span
        className={`flex h-full items-center border-t-6 border-transparent px-3 text-xs font-bold text-white uppercase ${
          isInsights ? "border-vts-primary bg-white/10" : ""
        }`}
      >
        <Link className="py-2" href="/vts/insights">
          Insights
        </Link>
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

      {/* Logout button */}
      <div className="ml-auto">
        <button
          onClick={handleLogout}
          className="flex h-full items-center px-3 text-xs font-bold text-white uppercase transition-colors hover:bg-white/10"
          title="Logout"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mr-2 size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
          Logout
        </button>
      </div>
    </div>
  );
}
