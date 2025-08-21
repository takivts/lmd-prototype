"use client";

import { useAppContext } from "@/app/context/AppContext";
import { MarketAnalysisData } from "@/app/vts/_shared/data/vts-ai-prompts";
import ProposalCard from "@/app/vts/_shared/proposal-card";
import TabRow from "@/app/vts/_shared/tab-row";
import { vtsAiPromptsWithContext } from "@/app/vts/_shared/data/vts-ai-prompts";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import vtsAiSparkle from "../../../../../../public/sparkle.json";
import vtsAiSparkleWhite from "../../../../../../public/sparkle-white.json";

export default function DealProfilePage() {
  const { setVtsAiContentType, setIsVtsAiOpen, isVtsAiOpen, setIsUpsell, setIsPromptError, setShowChatInput } =
    useAppContext();

  const mainTabs = [
    { label: "Info" },
    { label: "Proposals", isActive: true },
    { label: "Approval" },
    { label: "Tenant Coordination" },
  ];

  const proposalTabs = [{ label: "Proposals" }, { label: "Analysis" }, { label: "Cashflow" }];

  const handleVtsAiContentType = (contentType: string, data?: MarketAnalysisData) => {
    if (isVtsAiOpen) {
      setVtsAiContentType(contentType, data);
    } else {
      setVtsAiContentType(contentType, data);
      setTimeout(() => {
        setIsVtsAiOpen(true);
      }, 0);
    }
  };

  const marketAverageRef = useRef<LottieRefCurrentProps>(null);
  const newProposalRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    marketAverageRef.current?.playSegments([0, 25], true);
    newProposalRef.current?.playSegments([0, 25], true);
  }, []);

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-col gap-2 p-8">
        <div className="text-xs text-gray-700">
          <span className="">VTS Lease</span> &gt; <span className="text-gray-700">Deals</span> &gt;{" "}
          <span className="font-bold text-gray-700">Deal profile</span>
        </div>
        <div className="flex justify-between gap-2">
          <div className="flex items-center gap-2 truncate">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-gray-300 align-middle font-bold text-white">
              <Image
                src="/logo-google.svg"
                alt="Google"
                className="size-8"
                width={40}
                height={40}
                style={{ objectFit: "contain" }}
              />
            </span>
            <h1 className="truncate text-4xl font-bold">Google</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-yellow-500 cursor-pointer hover:text-yellow-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.563.563 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.563.563 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </div>
          <div className="text-vts-purple-700 flex items-center gap-4 pr-8 text-sm">
            <div className="text-vts-purple-700 hover:bg-vts-purple-100 flex cursor-pointer items-center gap-1 rounded-lg px-2 py-1.5 text-sm whitespace-nowrap transition-all duration-200">
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
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>
              Edit Deal
            </div>
            <span className="hover:bg-vts-purple-100 flex cursor-pointer items-center gap-1 truncate rounded-lg px-1 py-1 transition-all duration-200">
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
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-500">Standardized tenant</span>
            <span className="cursor-pointer">Alphabet</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="gap-2 text-gray-500">Market</span>
            <span className="">1001 Front Street, New York</span>
            <span
              className="text-vts-purple-700 flex cursor-pointer items-center gap-0.5 rounded-lg text-sm"
              onClick={() => handleVtsAiContentType("default", vtsAiPromptsWithContext[0].payload)}
              onMouseEnter={() => {
                marketAverageRef.current?.setSpeed(0.75);
                marketAverageRef.current?.playSegments(
                  [
                    [10, 25],
                    [10, 25],
                  ],
                  true,
                );
              }}
            >
              <span className="relative">
                Market averages
                <span className="absolute -bottom-[2px] left-0 h-[3px] w-full rounded-full" />
              </span>
              <Lottie
                lottieRef={marketAverageRef}
                animationData={vtsAiSparkle}
                autoplay={false}
                loop={false}
                className="z-50 size-5"
              />
            </span>
          </div>
          <div className="flex gap-8">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-sm text-gray-500">Deal lead</span>
                <span className="text-vts-purple-700 cursor-pointer">John Doe</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">Stage</span>
              <span className="flex w-32 items-center justify-between rounded-lg border border-transparent px-2 py-0 transition-all duration-200 hover:border-gray-300">
                New
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <TabRow tabs={mainTabs} className="border-y border-gray-300" />
      </div>

      <div className="flex w-full flex-1 flex-col overflow-auto bg-gray-100 p-6">
        <div className="flex min-h-full flex-col gap-4 rounded-lg border border-gray-300 bg-white">
          <TabRow tabs={proposalTabs} className="border-b border-gray-300" />
          <div className="flex w-full justify-end gap-2 px-4">
            <span
              className={`hover:bg-vts-purple-100 flex cursor-pointer items-center gap-1 rounded-lg border bg-[linear-gradient(110deg,var(--color-vts-ai-light)_0%,var(--color-vts-ai-medium)_10%,var(--color-vts-ai-dark)_50%,var(--color-vts-ai-gray)_200%)] py-1.5 pr-2.5 pl-2 text-sm text-white transition-all duration-200 hover:brightness-120`}
              onMouseEnter={() => {
                newProposalRef.current?.setSpeed(0.75);
                newProposalRef.current?.playSegments(
                  [
                    [10, 30],
                    [10, 30],
                  ],
                  true,
                );
              }}
            >
              <Lottie
                lottieRef={newProposalRef}
                animationData={vtsAiSparkleWhite}
                autoplay={false}
                loop={false}
                className="z-50 size-5"
              />
              <span className="text-white">New Proposal</span>
            </span>
          </div>
          <div className="flex flex-col gap-4 p-4">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
              <ProposalCard
                title="Proposal 1"
                data={{
                  label: "Sample Deal",
                  dateEntered: "Jan 15, 2024",
                  leaseType: "Gross",
                  type: "New",
                  spaces: "Unit 101",
                  size: "5,000",
                  downtime: "2",
                  tenantPossessionDate: "Mar 1, 2025",
                  tenantBuildoutPeriodDays: "30",
                  tenantBuildoutPeriodMonths: "1",
                  lcd: "Mar 1, 2025",
                  lockInEnd: "Feb 28, 2030",
                  term: "60"
                }}
              />
              <ProposalCard
                title="Proposal 2"
                data={{
                  label: "Alternative Deal",
                  dateEntered: "Jan 20, 2024",
                  leaseType: "Net",
                  type: "Renewal",
                  spaces: "Unit 102",
                  size: "7,500",
                  downtime: "1",
                  tenantPossessionDate: "Apr 1, 2025",
                  tenantBuildoutPeriodDays: "45",
                  tenantBuildoutPeriodMonths: "1.5",
                  lcd: "Apr 1, 2025",
                  lockInEnd: "Mar 31, 2030",
                  term: "60"
                }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Right Panel - Updates Section */}
      <div className="fixed right-0 top-0 h-full w-80 bg-white border-l border-gray-300 p-6 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {/* Tabs */}
          <div className="flex border-b border-gray-300">
            <button className="px-4 py-2 text-sm font-medium text-vts-purple-700 border-b-2 border-vts-purple-700">
              Updates
            </button>
            <button className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700">
              Relationships
            </button>
            <button className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700">
              Documents
            </button>
            <button className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700">
              Reminders
            </button>
          </div>
          
          {/* Updates Content */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">Updates</span>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            
            {/* Add Update Input */}
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Add an update"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-vts-purple-500"
              />
            </div>
            
            {/* Updates Feed */}
            <div className="flex flex-col gap-4">
              {/* New Comment Update */}
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-vts-purple-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  TW
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium text-gray-900">Taki Wong</span>
                    <span className="text-xs text-gray-500">just now</span>
                  </div>
                  <p className="text-sm text-gray-700">Tenant is moving forward with the deal</p>
                </div>
              </div>
              
              {/* Existing Updates */}
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  JD
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium text-gray-900">John Doe</span>
                    <span className="text-xs text-gray-500">3 days ago</span>
                  </div>
                  <p className="text-sm text-gray-700">John Doe attached a file black-swatch.png</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  JD
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium text-gray-900">Jane Doe</span>
                    <span className="text-xs text-gray-500">50 days ago</span>
                  </div>
                  <p className="text-sm text-gray-700">Jane Doe moved this deal to Legal</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  JD
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium text-gray-900">John Doe</span>
                    <span className="text-xs text-gray-500">295 days ago</span>
                  </div>
                  <p className="text-sm text-gray-700">John Doe moved this deal to Proposal</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  JD
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium text-gray-900">Jane Doe</span>
                    <span className="text-xs text-gray-500">359 days ago</span>
                  </div>
                  <p className="text-sm text-gray-700">Jane Doe moved this deal to Inquiry</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
