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
import { Pane } from "tweakpane";

export default function DealProfilePage() {
  const { setVtsAiContentType, setIsVtsAiOpen, isVtsAiOpen, setIsUpsell, setIsPromptError, setShowChatInput } =
    useAppContext();

  useEffect(() => {
    const paneContainer = document.createElement("div");
    paneContainer.className = "fixed bottom-6 left-6 z-50";
    document.body.appendChild(paneContainer);

    const PARAMS = {
      isUpsell: false,
      isPromptError: false,
      showChatInput: false,
    };

    const pane = new Pane({
      title: "Prototype Controls",
      container: paneContainer,
      expanded: false,
    });

    const isUpsellBinding = pane.addBinding(PARAMS, "isUpsell", {
      label: "Show Upsell",
    });

    const isPromptErrorBinding = pane.addBinding(PARAMS, "isPromptError", {
      label: "Show Prompt Error",
    });

    const showChatInputBinding = pane.addBinding(PARAMS, "showChatInput", {
      label: "Show Chat Input",
    });

    isUpsellBinding.on("change", (e) => {
      setIsUpsell(e.value);
    });

    isPromptErrorBinding.on("change", (e) => {
      setIsPromptError(e.value);
    });

    showChatInputBinding.on("change", (e) => {
      setShowChatInput(e.value);
    });

    return () => {
      pane.dispose();
      if (paneContainer.parentNode) {
        paneContainer.parentNode.removeChild(paneContainer);
      }
    };
  }, [setIsUpsell, setIsPromptError, setShowChatInput]);

  const mainTabs = [
    { label: "Info" },
    { label: "Proposals", isActive: true },
    { label: "Approval" },
    { label: "Tenant Coordination" },
  ];

  const proposalTabs = [{ label: "Proposals", isActive: true }, { label: "Analysis" }, { label: "Cashflow" }];

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
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>
              Edit Deal
            </div>
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
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Export
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
            <span className="">New York, Midtown</span>
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
                Lease out
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
              New proposal
            </span>

            <div className="text-vts-purple-700 hover:bg-vts-purple-100 bg-vts border-vts-purple-300 flex cursor-pointer items-center gap-1 rounded-lg border px-2 py-1.5 text-sm transition-all duration-200">
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
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              Display options
            </div>
          </div>

          <div className="relative flex flex-col gap-2 overflow-auto px-4">
            <div className="flex gap-2 overflow-auto pr-8 pb-4 text-xs">
              <div className="flex w-48 shrink-0 flex-col rounded-lg">
                <div className="min-h-30" />
                <div className="flex min-h-6.5 items-center gap-2">
                  <h5 className="text-base font-bold">Overview</h5>
                  <span className="h-1 w-full bg-gray-200" />
                </div>
                <div className="flex flex-col text-right text-gray-700">
                  <span
                    className="border-b border-gray-200 px-2 pb-2"
                    onClick={() => handleVtsAiContentType("upsell", vtsAiPromptsWithContext[0].payload)}
                  >
                    Label
                  </span>
                  <span className="border-b border-gray-200 px-2 py-2">Date Entered</span>
                  <span className="border-b border-gray-200 px-2 py-2">Lease Type</span>
                  <span className="border-b border-gray-200 px-2 py-2">Type</span>
                  <span className="border-b border-gray-200 px-2 py-2">Space(s)</span>
                  <span className="border-b border-gray-200 px-2 py-2">Size (sm)</span>
                  <span className="border-b border-gray-200 px-2 py-2">Downtime (mo)</span>
                  <span className="border-b border-gray-200 px-2 py-2">Tenant Possession Date</span>
                  <span className="border-b border-gray-200 px-2 py-2">Tenant Buildout Period (days)</span>
                  <span className="border-b border-gray-200 px-2 py-2">Tenant Buildout Period (mo)</span>
                  <span className="border-b border-gray-200 px-2 py-2">LCD</span>
                  <span className="border-b border-gray-200 px-2 py-2">Lock-In End</span>
                  <span className="border-b border-gray-200 px-2 py-2">Term (mo)</span>
                </div>
              </div>

              <ProposalCard
                title="Previous Lease"
                data={{
                  label: "TBD",
                  dateEntered: "Jan 10, 2019",
                  leaseType: "Gross",
                  type: "Renewal",
                  spaces: "Unit 102",
                  size: "1,750",
                  downtime: "1",
                  tenantPossessionDate: "Feb 1, 2020",
                  tenantBuildoutPeriodDays: "30",
                  tenantBuildoutPeriodMonths: "1",
                  lcd: "Feb 1, 2020",
                  lockInEnd: "Jan 31, 2025",
                  term: "60",
                }}
              />

              <ProposalCard
                title="Budget"
                actions={[{ text: "Select budget" }]}
                data={{
                  label: "TBD",
                  dateEntered: "Dec 10, 2024",
                  leaseType: "Gross",
                  type: "New",
                  spaces: "Unit 102",
                  size: "1,800",
                  downtime: "2",
                  tenantPossessionDate: "Mar 1, 2025",
                  tenantBuildoutPeriodDays: "45",
                  tenantBuildoutPeriodMonths: "1.5",
                  lcd: "Mar 1, 2025",
                  lockInEnd: "Feb 28, 2030",
                  term: "60",
                }}
              />

              <ProposalCard
                title="Tenant"
                actions={[{ text: "View details" }, { text: "Generate LOI" }]}
                data={{
                  label: "Starbucks Coffee",
                  dateEntered: "Dec 15, 2024",
                  leaseType: "National",
                  type: "Coffee Retail",
                  spaces: "Unit 102",
                  size: "1,800",
                  downtime: "2",
                  tenantPossessionDate: "Mar 1, 2025",
                  tenantBuildoutPeriodDays: "45",
                  tenantBuildoutPeriodMonths: "1.5",
                  lcd: "Mar 1, 2025",
                  lockInEnd: "Feb 28, 2030",
                  term: "60",
                }}
              />

              <ProposalCard
                title="Landlord"
                actions={[{ text: "View details" }, { text: "Generate LOI" }]}
                data={{
                  label: "Downtown Plaza LLC",
                  dateEntered: "Dec 15, 2024",
                  leaseType: "Commercial",
                  type: "Property Owner",
                  spaces: "Unit 102",
                  size: "1,800",
                  downtime: "2",
                  tenantPossessionDate: "Mar 1, 2025",
                  tenantBuildoutPeriodDays: "45",
                  tenantBuildoutPeriodMonths: "1.5",
                  lcd: "Mar 1, 2025",
                  lockInEnd: "Feb 28, 2030",
                  term: "60",
                }}
                showMenuIcon={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
