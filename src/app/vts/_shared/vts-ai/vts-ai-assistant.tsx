"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type DealDetails = {
  property: string;
  tenant: string;
  industry: string;
  tenantContact: string;
  requirementSize: string;
  commencementDate: string;
};

type ChatMessage = {
  id: string;
  type: "ai" | "user";
  content: string;
  timestamp: Date;
};

type DealCreationState = "initial" | "collecting" | "confirming" | "creating" | "completed";
type DealEditState = "selecting" | "collecting" | "updating" | "completed";
type DealCommentState = "selecting" | "collecting" | "adding" | "completed";

export default function VtsAiAssistant() {
  const [dealCreationState, setDealCreationState] = useState<DealCreationState>("initial");
  const [dealEditState, setDealEditState] = useState<DealEditState | null>(null);
  const [dealCommentState, setDealCommentState] = useState<DealCommentState | null>(null);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const hasInitialized = useRef(false);
  const [dealDetails, setDealDetails] = useState<DealDetails>({
    property: "",
    tenant: "",
    industry: "",
    tenantContact: "",
    requirementSize: "",
    commencementDate: "",
  });
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const addMessage = useCallback((content: string, type: "ai" | "user") => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
    };
    setChatMessages(prev => [...prev, newMessage]);
  }, []);

  const handleCreateDealClick = useCallback(() => {
    setDealCreationState("collecting");
    addMessage(
      "Great, I would be happy to create a new deal for you. What are the property, tenant, industry, tenant contact, requirement size, and commencement date details for your new deal?",
      "ai"
    );
  }, [addMessage]);

  const handleEditDealClick = useCallback(() => {
    setDealEditState("selecting");
    addMessage(
      "I'd be happy to help you edit a deal. What deal would you like to edit?",
      "ai"
    );
  }, [addMessage]);

  const handleAddCommentClick = useCallback(() => {
    setDealCommentState("selecting");
    addMessage(
      "I'd be happy to help you add a comment to a deal. What deal would you like to leave a comment for?",
      "ai"
    );
  }, [addMessage]);

  // Initialize with welcome message when component mounts
  useEffect(() => {
    if (!hasInitialized.current) {
      addMessage("Hi! I'm Max, your AI assistant. How can I help you today?", "ai");
      hasInitialized.current = true;
    }
  }, [addMessage]);

  const handleUserInput = useCallback(async () => {
    if (!userInput.trim()) return;

    const userMessage = userInput.trim();
    addMessage(userMessage, "user");
    setUserInput("");
    setIsLoading(true);

    // Simulate AI processing
    setTimeout(() => {
      if (dealCreationState === "collecting") {
        // Parse user input to extract deal details
        const details = parseDealDetails(userMessage);
        setDealDetails(details);
        setDealCreationState("confirming");
        
        addMessage(
          `Great, just to confirm these are the details of your new deal:\n\n` +
          `**Tenant:** ${details.tenant || "Not specified"}\n` +
          `**Property:** ${details.property || "Not specified"}\n` +
          `**Industry:** ${details.industry || "Not specified"}\n` +
          `**Requirement Size:** ${details.requirementSize || "Not specified"}\n` +
          `**Commencement Date:** ${details.commencementDate || "Not specified"}\n\n` +
          `Would you like me to proceed with creating the deal?`,
          "ai"
        );
      } else if (dealCreationState === "confirming") {
        if (userMessage.toLowerCase().includes("yes") || userMessage.toLowerCase().includes("correct") || userMessage.toLowerCase().includes("confirm")) {
          setDealCreationState("creating");
          addMessage("Perfect! I'm creating your deal now. This will just take a moment...", "ai");
          
          // Simulate deal creation
          setTimeout(() => {
            setDealCreationState("completed");
            addMessage(
              `🎉 Your deal has been successfully created!\n\n` +
              `**Deal ID:** DEAL-${Date.now().toString().slice(-6)}\n` +
              `**Status:** Active\n\n` +
              `**Deal Summary:**\n` +
              `• Tenant: ${dealDetails.tenant}\n` +
              `• Property: ${dealDetails.property}\n` +
              `• Industry: ${dealDetails.industry}\n` +
              `• Size: ${dealDetails.requirementSize}\n` +
              `• Commencement: ${dealDetails.commencementDate}\n\n` +
              `You can view and manage your deal by clicking the link below:\n\n` +
              `<a href="/vts/lease/deals/profile" class="text-vts-purple-600 underline hover:text-vts-purple-800">View Deal Details</a>`,
              "ai"
            );
          }, 2000);
        } else {
          setDealCreationState("collecting");
          addMessage(
            "No problem! Let me ask you again. What are the property, tenant, industry, tenant contact, requirement size, and commencement date details for your new deal?",
            "ai"
          );
        }
      }
      // Handle deal editing flow
      else if (dealEditState === "selecting") {
        if (userMessage.toLowerCase().includes("google") || userMessage.toLowerCase().includes("inc")) {
          setDealEditState("collecting");
          addMessage(
            "Perfect! I found the Google Inc. deal. What would you like to update? You can tell me things like:\n\n" +
            "• Change the property address\n" +
            "• Update the tenant name\n" +
            "• Modify the industry\n" +
            "• Change the deal stage\n" +
            "• Update any other details\n\n" +
            "What would you like me to change?",
            "ai"
          );
        } else {
          addMessage(
            "I couldn't find that deal. Could you please specify which deal you'd like to edit? You can mention the tenant name or deal ID.",
            "ai"
          );
        }
      } else if (dealEditState === "collecting") {
        setDealEditState("updating");
        addMessage("Updating the Google Inc. deal now...", "ai");
        
        setTimeout(() => {
          setDealEditState("completed");
          addMessage(
            `✅ The Google Inc. deal has been successfully updated!\n\n` +
            `**Changes Made:**\n` +
            `• ${userMessage}\n\n` +
            `**Updated Deal Summary:**\n` +
            `• Tenant: Google Inc.\n` +
            `• Property: 1000 Front Street West, New York\n` +
            `• Industry: Retail\n` +
            `• Stage: Inquiry\n` +
            `• Deal Lead: Taki Wong\n\n` +
            `You can view the updated deal by clicking the link below:\n\n` +
            `<a href="/vts/lease/deals/profile" class="text-vts-purple-800 underline hover:text-vts-purple-800">View Updated Deal</a>`,
            "ai"
          );
        }, 2000);
      }
      
      // Handle deal commenting flow
      else if (dealCommentState === "selecting") {
        if (userMessage.toLowerCase().includes("google") || userMessage.toLowerCase().includes("inc")) {
          setDealCommentState("collecting");
          addMessage(
            "Perfect! I found the Google Inc. deal. What comment would you like to leave?",
            "ai"
          );
        } else {
          addMessage(
            "I couldn't find that deal. Could you please specify which deal you'd like to leave a comment for? You can mention the tenant name or deal ID.",
            "ai"
          );
        }
      } else if (dealCommentState === "collecting") {
        setDealCommentState("adding");
        addMessage("Adding your comment to the Google Inc. deal now...", "ai");
        
        setTimeout(() => {
          setDealCommentState("completed");
          addMessage(
            `✅ Your comment has been successfully added to the Google Inc. deal!\n\n` +
            `**Comment Added:**\n` +
            `"${userMessage}"\n\n` +
            `**Comment Details:**\n` +
            `• Deal: Google Inc.\n` +
            `• Comment: ${userMessage}\n` +
            `• Added by: Taki Wong\n` +
            `• Timestamp: ${new Date().toLocaleString()}\n\n` +
            `You can view the deal and all comments by clicking the link below:\n\n` +
            `<a href="/vts/lease/deals/profile" class="text-vts-purple-600 underline hover:text-vts-purple-800">View Deal with Comments</a>`,
            "ai"
          );
        }, 2000);
      }
      setIsLoading(false);
    }, 1000);
  }, [userInput, dealCreationState, dealEditState, dealCommentState, addMessage, dealDetails]);

  const parseDealDetails = (input: string): DealDetails => {
    // Simple parsing logic - in a real app, you'd use more sophisticated NLP
    const details: DealDetails = {
      property: "",
      tenant: "",
      industry: "",
      tenantContact: "",
      requirementSize: "",
      commencementDate: "",
    };

    // Extract property (look for building names, addresses, etc.)
    const propertyMatches = input.match(/(?:property|building|address|location)[:\s]+([^,]+)/i);
    if (propertyMatches) details.property = propertyMatches[1].trim();

    // Extract tenant (look for company names)
    const tenantMatches = input.match(/(?:tenant|company|business)[:\s]+([^,]+)/i);
    if (tenantMatches) details.tenant = tenantMatches[1].trim();

    // Extract industry
    const industryMatches = input.match(/(?:industry|sector)[:\s]+([^,]+)/i);
    if (industryMatches) details.industry = industryMatches[1].trim();

    // Extract contact
    const contactMatches = input.match(/(?:contact|phone|email)[:\s]+([^,]+)/i);
    if (contactMatches) details.tenantContact = contactMatches[1].trim();

    // Extract size
    const sizeMatches = input.match(/(?:size|requirement|space)[:\s]+([^,]+)/i);
    if (sizeMatches) details.requirementSize = sizeMatches[1].trim();

    // Extract commencement date
    const dateMatches = input.match(/(?:commencement|start|begin|date|commence)[:\s]+([^,]+)/i);
    if (dateMatches) details.commencementDate = dateMatches[1].trim();

    // If no structured format, try to extract from general text
    if (!details.property && !details.tenant) {
      const words = input.split(/\s+/);
      if (words.length >= 2) {
        details.property = words[0];
        details.tenant = words[1];
      }
    }

    return details;
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleUserInput();
    }
  };

  return (
    <div className="flex h-full flex-col">
      {dealCreationState === "initial" && (
        <div className="flex flex-col gap-4 pb-4">
          <div className="flex flex-col">
            <p className="mb-2 text-left">Hi, I&apos;m Max.</p>
            <p className="text-left">
              I can help you create new deals, answer questions, and assist with your VTS workflow.
            </p>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-vts-purple-100 text-vts-purple-700 border-vts-purple-300 hover:bg-vts-purple-200 cursor-pointer rounded-2xl border px-4 py-3 text-left transition-all duration-200 font-medium"
            onClick={handleCreateDealClick}
          >
            🆕 Create a new deal
          </motion.button>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-vts-purple-100 text-vts-purple-700 border-vts-purple-300 hover:bg-vts-purple-200 cursor-pointer rounded-2xl border px-4 py-3 text-left transition-all duration-200 font-medium"
            onClick={handleEditDealClick}
          >
            ✏️ Edit a deal
          </motion.button>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-vts-purple-100 text-vts-purple-700 border-vts-purple-300 hover:bg-vts-purple-200 cursor-pointer rounded-2xl border px-4 py-3 text-left transition-all duration-200 font-medium"
            onClick={handleAddCommentClick}
          >
            💬 Add a deal comment
          </motion.button>
        </div>
      )}

      <div className="flex-1 overflow-auto space-y-4 px-4">
        <AnimatePresence>
          {chatMessages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.type === "user"
                    ? "bg-vts-purple-600 text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                <div 
                  className="whitespace-pre-line text-sm"
                  dangerouslySetInnerHTML={{ __html: message.content }}
                />
                <div className={`text-xs mt-2 ${message.type === "user" ? "text-vts-purple-200" : "text-gray-500"}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="bg-gray-100 text-gray-800 rounded-2xl px-4 py-3">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                  <div className="w-2 h-1 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                </div>
                <span className="text-sm text-gray-600">Max is typing...</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <div className="mt-auto border-t border-gray-300 bg-white rounded-b-[1.25rem]">
        <div className="relative flex h-12">
          <input
            className="w-full resize-none rounded-b-[1.25rem] bg-white py-2 pr-18 pl-4 text-sm focus:outline-none"
            placeholder="Type your message..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
          />

          <button
            className="absolute right-6 bottom-2 size-8 cursor-pointer rounded-3xl bg-[linear-gradient(110deg,var(--color-vts-ai-light)_0%,var(--color-vts-ai-medium)_10%,var(--color-vts-ai-dark)_50%,var(--color-vts-ai-gray)_200%)] p-2 text-white transition-all duration-200 hover:brightness-120 disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleUserInput}
            disabled={isLoading || !userInput.trim()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
