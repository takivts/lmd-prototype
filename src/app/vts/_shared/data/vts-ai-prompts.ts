export type MarketAnalysisData = {
  marketMetadata?: {
    category?: string;
    market: string;
    buildingClass?: string;
  };
  marketData?: {
    label: string;
    value: string;
  }[];
  submarketData?: {
    label: string;
    value: string;
  }[];
  keyInsights?: string[];
  suggestedFollowUps?: string[];
  summary?: string;
};

export type VtsAiPrompt = {
  prompt: string;
  payload: MarketAnalysisData;
};

export const vtsAiPromptsWithContext: VtsAiPrompt[] = [
  {
    prompt: "Give me a market overview for New York",
    payload: {
      marketMetadata: {
        category: "Market overview",
        market: "New York",
        buildingClass: "A",
      },
      marketData: [
        { label: "Avg. NER", value: "$45.50 PSF" },
        { label: "Avg. TI", value: "$65.00 PSF" },
        { label: "Avg. Free Rent", value: "4.2 months" },
        { label: "Active proposals", value: "1,247" },
        { label: "Avg. Lease Term", value: "7.1 years" },
        { label: "Concession Value", value: "$88.50 PSF" },
      ],
      keyInsights: [
        "Manhattan retail market shows strong recovery with 15% increase in leasing activity Q4 2024.",
        "Ground floor spaces in prime locations commanding premium rents, up 8% year-over-year.",
        "Coffee shops and food service tenants driving demand in midtown and financial districts.",
      ],
      suggestedFollowUps: [
        "How are concessions trending in New York?",
        "What's the leasing velocity over the past 6 months in New York?",
        "Break down demand by tenant size ranges in New York.",
      ],
      summary:
        "The New York retail market demonstrates robust recovery with increased leasing velocity and stabilizing rents. Prime ground-floor retail spaces continue to command premium pricing, while landlords are becoming more flexible with lease structures. The coffee and food service sectors are particularly active, benefiting from strong foot traffic recovery and evolving consumer preferences for experiential retail.",
    },
  },
  {
    prompt: "How is active demand trending in the past quarter in New York?",
    payload: {
      marketMetadata: {
        category: "Active demand",
        market: "New York",
        buildingClass: "A",
      },
      marketData: [
        { label: "QoQ Chg", value: "-3.4%" },
        { label: "Active Reqs", value: "1,705" },
        { label: "Total SF", value: "11.6M SF" },
      ],
      keyInsights: [
        "Active demand dipped as finance and media segments slowed.",
        "Mid-size (10k–50k SF) activity saw the steepest decline.",
        "Tour activity leveled off after a strong Q1.",
      ],
      suggestedFollowUps: [
        "How are concessions trending in New York?",
        "What's the leasing velocity over the past 6 months in New York?",
        "Break down demand by tenant size ranges in New York.",
      ],
      summary:
        "Demand softened by 3.4% QoQ, driven by reduced mid-size tenant activity. Tour volumes are stabilizing, indicating cautious optimism.",
    },
  },
  {
    prompt: "What's the current total active demand in New York?",
    payload: {
      marketMetadata: {
        category: "Active demand",
        market: "New York",
        buildingClass: "A",
      },
      marketData: [
        { label: "Total Demand", value: "11.6M SF" },
        { label: "Active Reqs", value: "1,705" },
        { label: "Avg Deal Size", value: "6.8k SF" },
      ],
      keyInsights: [
        "Demand is concentrated in spaces under 10k SF.",
        "Professional services are driving new short-term needs.",
        "Leasing activity is broadening beyond core corridors.",
      ],
      suggestedFollowUps: [
        "Break down demand by tenant size ranges in New York.",
        "What's the average rent right now for small tenants? Large tenants in New York?",
        "Which submarkets are seeing the most tenant tour activity right now in New York?",
      ],
      summary:
        "New York’s active demand totals 11.6M SF, dominated by small and mid-size tenants exploring flexible term options.",
    },
  },
  {
    prompt: "What's the leasing velocity over the past 6 months in New York?",
    payload: {
      marketMetadata: {
        category: "Leasing velocity",
        market: "New York",
        buildingClass: "A",
      },
      marketData: [
        { label: "Velocity", value: "5.4M SF" },
        { label: "Avg Deal", value: "6.9k SF" },
        { label: "Deals", value: "780" },
      ],
      keyInsights: [
        "Velocity declined slightly after Q4 spike.",
        "Legal and healthcare users are supporting large-block activity.",
        "Tour-to-deal conversion tightened, signaling longer decision cycles.",
      ],
      suggestedFollowUps: [
        "Are large-block spaces (50k+ sf) seeing activity here in New York?",
        "How is active demand trending in the past quarter in New York?",
        "How are concessions trending in New York?",
      ],
      summary:
        "Leasing velocity hit 5.4M SF over six months, showing steady but slightly slower deal flow as larger tenants deliberate.",
    },
  },
  {
    prompt: "Break down demand by tenant size ranges in New York.",
    payload: {
      marketMetadata: {
        category: "Demand",
        market: "New York",
        buildingClass: "A",
      },
      marketData: [
        { label: "<5k SF", value: "3.9M SF" },
        { label: "5–20k SF", value: "5.0M SF" },
        { label: ">20k SF", value: "2.7M SF" },
      ],
      keyInsights: [
        "5–20k SF segment holds 43% of total demand.",
        "Smaller tenants are highly active in early-stage tours.",
        "Large-block demand is down 11% from last quarter.",
      ],
      suggestedFollowUps: [
        "Are large-block spaces (50k+ sf) seeing activity here in New York?",
        "What's the average rent right now for small tenants? Large tenants in New York?",
        "How is active demand trending in the past quarter in New York?",
      ],
      summary:
        "Mid-size tenants (5–20k SF) account for the bulk of current demand. Smaller occupiers are driving tour activity and short-term deal volume.",
    },
  },
  {
    prompt: "Show me historical rent trends for New York.",
    payload: {
      marketMetadata: {
        category: "Historical trends",
        market: "New York",
        buildingClass: "A",
      },
      marketData: [
        { label: "YoY Rent Growth", value: "+4.2%" },
        { label: "Class A Buildings", value: "+5.1%" },
        { label: "Class B Buildings", value: "+2.6%" },
      ],
      keyInsights: [
        "Class A growth remains strong despite slight demand pullback.",
        "Older inventory lags in pricing power, especially for non-renovated space.",
        "Momentum is highest in areas favored by tech and finance tenants.",
      ],
      suggestedFollowUps: [
        "How are concessions trending in New York?",
        "What's the average rent right now for small tenants? Large tenants in New York?",
        "Which submarkets are seeing the most tenant tour activity right now in New York?",
      ],
      summary:
        "Rents in New York are up 4.2% YoY, supported by resilient Class A performance. Rent growth is narrowing between asset classes.",
    },
  },
  {
    prompt:
      "Are large-block spaces (50k+ sf) seeing activity here in New York?",
    payload: {
      marketMetadata: {
        category: "Demand",
        market: "New York",
        buildingClass: "A",
      },
      marketData: [
        { label: "Active 50k+ Reqs", value: "14" },
        { label: "Signed 50k+ Deals", value: "2" },
        { label: "Largest Deal", value: "110k SF" },
      ],
      keyInsights: [
        "Enterprise demand is recovering slowly with fewer net new reqs.",
        "New leases are driven by consolidation, not expansion.",
        "Larger tenants continue to push for outsized concessions.",
      ],
      suggestedFollowUps: [
        "What's the leasing velocity over the past 6 months in New York?",
        "Break down demand by tenant size ranges in New York.",
        "How is active demand trending in the past quarter in New York?",
      ],
      summary:
        "Large-block leasing remains muted, with only two major deals signed this quarter. Decision-making among enterprise users remains elongated.",
    },
  },
  {
    prompt:
      "What's the average rent right now for small tenants? Large tenants in New York?",
    payload: {
      marketMetadata: {
        category: "Market rent",
        market: "New York",
        buildingClass: "A",
      },
      marketData: [
        { label: "<5k SF", value: "$56 PSF" },
        { label: "5–10k SF", value: "$68 PSF" },
        { label: "10–20k SF", value: "$64 PSF" },
        { label: "20–50k SF", value: "$70 PSF" },
        { label: ">50k SF", value: "$73 PSF" },
      ],
      keyInsights: [
        "Small tenants are securing discounts in older inventory.",
        "Premium rates persist in trophy assets above 20k SF.",
        "Concessions are helping offset rising face rates.",
      ],
      suggestedFollowUps: [
        "How are concessions trending in New York?",
        "Break down demand by tenant size ranges in New York.",
        "How does the average free rent period compare across New York for leases in the [Finance] industry ?",
      ],
      summary:
        "Average rents range from $56 PSF for small tenants to $73 PSF for large blocks. Pricing continues to reflect product quality and scarcity.",
    },
  },
  {
    prompt: "How are concessions trending in New York?",
    payload: {
      marketMetadata: {
        category: "Market concessions",
        market: "New York",
        buildingClass: "A",
      },
      marketData: [
        { label: "TI", value: "$78 PSF" },
        { label: "Free Rent", value: "4.0 mo" },
        { label: "Total Value", value: "$93 PSF" },
      ],
      keyInsights: [
        "Concession packages remain steady amid slower demand.",
        "Free rent terms are stabilizing after prior inflation.",
        "TI levels are being used to target long-term commitments.",
      ],
      suggestedFollowUps: [
        "What's the average rent right now for small tenants? Large tenants in New York?",
        "Which submarkets are seeing the most tenant tour activity right now in New York?",
        "How is active demand trending in the past quarter in New York?",
      ],
      summary:
        "Concessions remain elevated but flat, averaging $93 PSF in total value. Landlords are using TI to secure renewals and long-term leases.",
    },
  },
];

export const vtsAiPromptsWithoutContext: VtsAiPrompt[] = [
  {
    prompt: "How is active demand trending in the past quarter?",
    payload: {
      summary:
        "Active demand has seen a slight increase of 2.5% over the past quarter, primarily driven by small to mid-sized tenants.",
      suggestedFollowUps: [
        "What is the current total active demand?",
        "What's the leasing velocity over the past 6 months?",
        "Break down demand by tenant size ranges.",
      ],
    },
  },
  {
    prompt: "What is the current total active demand?",
    payload: {
      summary:
        "The current total active demand across the market is 12.3 million square feet.",
      suggestedFollowUps: [
        "What's the leasing velocity over the past 6 months?",
        "Break down demand by tenant size ranges.",
        "Show me historical rent trends.",
      ],
    },
  },
  {
    prompt: "What's the leasing velocity over the past 6 months?",
    payload: {
      marketData: [{ label: "Leasing Velocity (6 mo.)", value: "5.8M SF" }],
      summary:
        "Leasing velocity over the last 6 months reached 5.8 million square feet, reflecting consistent tenant activity.",
      suggestedFollowUps: [
        "Break down demand by tenant size ranges.",
        "Show me historical rent trends.",
        "Are large-block spaces (50k+ sf) seeing activity?",
      ],
    },
  },
  {
    prompt: "Break down demand by tenant size ranges.",
    payload: {
      marketData: [
        { label: "< 5k SF", value: "4.1M SF" },
        { label: "5k - 20k SF", value: "5.2M SF" },
        { label: "> 20k SF", value: "3.0M SF" },
      ],
      summary:
        "Mid-sized tenants in the 5k–20k SF range represent the largest portion of active demand, suggesting strong activity in that segment.",
      suggestedFollowUps: [
        "Show me historical rent trends.",
        "Are large-block spaces (50k+ sf) seeing activity?",
        "What's the average rent right now for small tenants? Large tenants?",
      ],
    },
  },
  {
    prompt: "Show me historical rent trends.",
    payload: {
      summary:
        "Rents have increased 5% year-over-year, with stronger growth observed in higher-quality assets.",
      suggestedFollowUps: [
        "Are large-block spaces (50k+ sf) seeing activity?",
        "What's the average rent right now for small tenants? Large tenants?",
        "How are concessions trending?",
      ],
    },
  },
  {
    prompt: "Are large-block spaces (50k+ sf) seeing activity?",
    payload: {
      summary:
        "Large-block space activity has picked up, with several notable leases signed in the past quarter.",
      suggestedFollowUps: [
        "What's the average rent right now for small tenants? Large tenants?",
        "How are concessions trending?",
        "Which submarkets are seeing the most tenant tour activity right now?",
      ],
    },
  },
  {
    prompt:
      "What's the average rent right now for small tenants? Large tenants?",
    payload: {
      marketData: [
        { label: "Avg. Rent (Small Tenants)", value: "$55.00 PSF" },
        { label: "Avg. Rent (Large Tenants)", value: "$72.00 PSF" },
      ],
      summary:
        "The average rent for small tenants is $55 PSF, while large tenants average $72 PSF, with rates varying by submarket and asset quality.",
      suggestedFollowUps: [
        "How are concessions trending?",
        "Which submarkets are seeing the most tenant tour activity right now?",
        "How is active demand trending in the past quarter?",
      ],
    },
  },
  {
    prompt: "How are concessions trending?",
    payload: {
      summary:
        "Concessions have stabilized, with tenant improvement allowances averaging $80 PSF and free rent periods holding steady.",
      suggestedFollowUps: [
        "Which submarkets are seeing the most tenant tour activity right now?",
        "How is active demand trending in the past quarter?",
        "What is the current total active demand?",
      ],
    },
  },
  {
    prompt:
      "Which submarkets are seeing the most tenant tour activity right now?",
    payload: {
      summary:
        "Key submarkets are showing elevated tenant tour activity, which may signal increased leasing momentum ahead.",
      suggestedFollowUps: [
        "How is active demand trending in the past quarter?",
        "What is the current total active demand?",
        "What's the leasing velocity over the past 6 months?",
      ],
    },
  },
];
