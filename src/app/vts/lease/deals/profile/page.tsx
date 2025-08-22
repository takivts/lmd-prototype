"use client";

import { useAppContext } from "@/app/context/AppContext";
import { MarketAnalysisData } from "@/app/vts/_shared/data/vts-ai-prompts";
import TabRow from "@/app/vts/_shared/tab-row";
import { vtsAiPromptsWithContext } from "@/app/vts/_shared/data/vts-ai-prompts";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import vtsAiSparkle from "../../../../../../public/sparkle.json";
import vtsAiSparkleWhite from "../../../../../../public/sparkle-white.json";

export default function DealProfilePage() {
  const { setVtsAiContentType, setIsVtsAiOpen, isVtsAiOpen, setIsUpsell, setIsPromptError, setShowChatInput } =
    useAppContext();

  const [isUpdatesPanelOpen, setIsUpdatesPanelOpen] = useState(false);
  const [newUpdate, setNewUpdate] = useState("");

  const mainTabs = [
    { label: "Info", isActive: true },
    { label: "Proposals" },
  ];

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

  const handleAddUpdate = () => {
    if (newUpdate.trim()) {
      // Here you would typically add the update to your data store
      setNewUpdate("");
    }
  };

  // Function to show updates panel (this would be called from the assistant flow)
  const showUpdatesPanel = () => {
    setIsUpdatesPanelOpen(true);
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-col gap-2 p-8">
        <div className="text-xs text-gray-700">
          <span className="">VTS Lease</span> &gt; <span className="text-gray-700">Deals</span> &gt;{" "}
          <span className="font-bold text-gray-700">Deal Profile</span>
        </div>
        
        {/* Deal Profile Header */}
        <div className="flex justify-between gap-2">
          <div className="flex items-center gap-2 truncate">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-gray-300 align-middle font-bold text-white bg-blue-600">
              G
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
            <span className="text-gray-500">Deal Lead</span>
            <span className="text-vts-purple-700 cursor-pointer">Taki Wong</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-500">Stage</span>
            <span className="flex w-32 items-center justify-between rounded-lg border border-transparent px-2 py-0 transition-all duration-200 hover:border-gray-300">
              Inquiry
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
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-500">Standardized tenant</span>
            <span className="cursor-pointer">Structured Finance Industry Group, Inc</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.853l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.02M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-500">Tenant relationship</span>
            <span className="">16 deals | 0 leases</span>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-2 mt-4">
          <button className="text-vts-purple-700 hover:bg-vts-purple-100 flex cursor-pointer items-center gap-1 rounded-lg px-3 py-2 text-sm transition-all duration-200">
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
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
              />
            </svg>
            Market Rents
          </button>
          <button className="text-vts-purple-700 hover:bg-vts-purple-100 flex cursor-pointer items-center gap-1 rounded-lg px-3 py-2 text-sm transition-all duration-200">
            Start Tenant Coordination
          </button>
        </div>
      </div>

      <div className="flex gap-2">
        <TabRow tabs={mainTabs} className="border-y border-gray-300" />
      </div>

      {/* Main Content Area */}
      <div className="flex w-full flex-1 flex-col overflow-auto bg-gray-100 p-6">
        <div className="flex min-h-full flex-col gap-4 rounded-lg border border-gray-300 bg-white p-6">
          {/* Deal Summary Section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Prob.</span>
              <span className="text-sm font-medium">Add</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Type</span>
              <span className="text-sm font-medium">New Deal</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Req Type</span>
              <span className="text-sm font-medium">Add</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Inquiry Type</span>
              <span className="text-sm font-medium">Add</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Total Size</span>
              <span className="text-sm font-medium">10,000 sf</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.853l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.02M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
            </div>
          </div>

          {/* Asset Section */}
          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900">Asset</h3>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">
                Add Space
              </button>
            </div>
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 text-gray-600 mt-0.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-6.75 4.5h6.75m-6.75 4.5h6.75m-6.75 4.5h6.75"
                />
              </svg>
              <div>
                <div className="font-medium text-gray-900">1001 Front Street, New York, NY</div>
                <div className="text-sm text-gray-600">Asset size: 15,000 sf</div>
                <div className="text-sm text-gray-500 mt-1">No spaces</div>
              </div>
            </div>
          </div>

          {/* Tenant Info Section */}
          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900">Tenant Info</h3>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors">
                Add to Requirements
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Industry:</span>
                <span className="text-sm font-medium">Technology</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Current Address:</span>
                <span className="text-sm font-medium text-gray-400">Add</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Requirement Size (SF):</span>
                <span className="text-sm font-medium">5000 - 10000</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Current Size:</span>
                <span className="text-sm font-medium text-gray-400">Add</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Requirement Size (Desks):</span>
                <span className="text-sm font-medium text-gray-400">Add</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Current Rent:</span>
                <span className="text-sm font-medium text-gray-400">Add</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Target Price:</span>
                <span className="text-sm font-medium text-gray-400">Add</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Current LXD:</span>
                <span className="text-sm font-medium text-gray-400">Add</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Target LCD:</span>
                <span className="text-sm font-medium">05/03/25</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">City/Submarket:</span>
                <span className="text-sm font-medium text-gray-400">Add</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Contact:</span>
                <span className="text-sm font-medium text-gray-400">Add</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 text-gray-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Updates Panel Toggle Button */}
      <button
        onClick={() => setIsUpdatesPanelOpen(!isUpdatesPanelOpen)}
        className="fixed right-4 bottom-4 bg-vts-purple-600 hover:bg-vts-purple-700 text-white p-3 rounded-full shadow-lg transition-colors z-50"
      >
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
            d="M7.5 8.25h9m-9 3H12m-9.75 3h9m2.25-6H4.5m0 0a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Zm14.5 0a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z"
          />
        </svg>
      </button>
      
      {/* Right Panel - Updates Section */}
      {isUpdatesPanelOpen && (
        <div className="fixed right-0 top-0 h-full w-80 bg-white border-l border-gray-300 p-6 overflow-y-auto z-40">
          <div className="flex flex-col gap-4">
            {/* Header with close button */}
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Updates</h3>
              <button
                onClick={() => setIsUpdatesPanelOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            
            {/* Tabs */}
            <div className="flex border-b border-gray-300">
              <button className="px-4 py-2 text-sm font-medium text-vts-purple-700 border-b-2 border-vts-purple-700">
                Updates
              </button>
              <button className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700">
                Docs
              </button>
              <button className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700">
                Reminders
              </button>
            </div>
            
            {/* Add Update Input */}
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Add an update"
                value={newUpdate}
                onChange={(e) => setNewUpdate(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAddUpdate()}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-vts-purple-500"
              />
              <button
                onClick={handleAddUpdate}
                className="bg-vts-purple-600 hover:bg-vts-purple-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Add Update
              </button>
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
                  <p className="text-sm text-gray-700">Deal is moving forward, tenant enjoyed the showing</p>
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
      )}
    </div>
  );
}
