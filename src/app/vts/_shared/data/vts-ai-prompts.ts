export type MarketAnalysisData = {
  marketMetadata?: {
    title: string;
    buildingClass: string;
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
        title: "New York",
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
        "Landlords offering more flexible lease terms to attract quality tenants.",
        "Foot traffic has returned to 95% of pre-pandemic levels in key retail corridors.",
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
        title: "New York",
        buildingClass: "A",
      },
      marketData: [
        { label: "QoQ Demand Chg", value: "+2.5%" },
        { label: "Active Requirements", value: "1,813" },
        { label: "Total SF of Demand", value: "12.3M SF" },
      ],
      keyInsights: [
        "Tenant demand increased modestly, led by tech and finance sectors.",
        "Mid-sized requirements (5k–20k SF) drove the bulk of growth.",
        "Tour activity in Midtown South aligns with upward trend in active demand.",
      ],
      suggestedFollowUps: [
        "How are concessions trending in New York?",
        "What's the leasing velocity over the past 6 months in New York?",
        "Break down demand by tenant size ranges in New York.",
      ],
      summary:
        "Active demand in New York has risen 2.5% quarter-over-quarter, largely due to activity in the mid-market segment. Tenant tours and active proposals suggest improving confidence among occupiers.",
    },
  },
  {
    prompt: "What's the current total active demand in New York?",
    payload: {
      marketMetadata: {
        title: "New York",
        buildingClass: "A",
      },
      marketData: [
        { label: "Total Active Demand", value: "12.3M SF" },
        { label: "Total Active Requirements", value: "1,813" },
        { label: "Average Deal Size", value: "6.8k SF" },
      ],
      keyInsights: [
        "Demand remains strongest in Midtown and Midtown South submarkets.",
        "Smaller tenants (<10k SF) continue to dominate activity.",
        "Growth in professional services sector driving short-term space needs.",
      ],
      suggestedFollowUps: [
        "Break down demand by tenant size ranges in New York.",
        "What's the average rent right now for small tenants? Large tenants in New York?",
        "Which submarkets are seeing the most tenant tour activity right now in New York?",
      ],
      summary:
        "The current total active demand in New York stands at 12.3 million square feet, led by mid-sized tenant interest and strong Midtown market engagement.",
    },
  },
  {
    prompt: "What's the leasing velocity over the past 6 months in New York?",
    payload: {
      marketMetadata: {
        title: "New York",
        buildingClass: "A",
      },
      marketData: [
        { label: "Leasing Velocity (6 mo.)", value: "5.8M SF" },
        { label: "Avg. Deal Size", value: "7.4k SF" },
        { label: "# of Deals", value: "785" },
      ],
      keyInsights: [
        "Leasing velocity remains stable following a surge in Q4 2024.",
        "Hudson Yards and Midtown South contributed most to activity.",
        "Tech and legal tenants have resumed space commitments above 20k SF.",
      ],
      suggestedFollowUps: [
        "Are large-block spaces (50k+ sf) seeing activity here in New York?",
        "How is active demand trending in the past quarter in New York?",
        "How are concessions trending in New York?",
      ],
      summary:
        "New York has recorded 5.8 million square feet in leasing velocity over the past six months, with steady deal volume and strong activity in Hudson Yards and Midtown South.",
    },
  },
  {
    prompt: "Break down demand by tenant size ranges in New York.",
    payload: {
      marketMetadata: {
        title: "New York",
        buildingClass: "A",
      },
      marketData: [
        { label: "< 5k SF", value: "4.1M SF" },
        { label: "5k - 20k SF", value: "5.2M SF" },
        { label: "> 20k SF", value: "3.0M SF" },
      ],
      keyInsights: [
        "5k–20k SF range represents 42% of total demand.",
        "Demand for large blocks has plateaued, with few new requirements above 50k SF.",
        "Smaller tenants are moving more quickly to tour and transact.",
      ],
      suggestedFollowUps: [
        "Are large-block spaces (50k+ sf) seeing activity here in New York?",
        "What's the average rent right now for small tenants? Large tenants in New York?",
        "How is active demand trending in the past quarter in New York?",
      ],
      summary:
        "Mid-market tenant demand is dominating the landscape, particularly in the 5k–20k SF range. Small tenants are active, while larger occupiers remain cautious.",
    },
  },
  {
    prompt: "Show me historical rent trends for New York.",
    payload: {
      marketMetadata: {
        title: "New York",
        buildingClass: "A",
      },
      marketData: [
        { label: "YoY Rent Change", value: "+5.0%" },
        { label: "Class A YoY Change", value: "+6.3%" },
        { label: "Class B YoY Change", value: "+3.1%" },
      ],
      keyInsights: [
        "Rent growth is led by Class A product, especially in Plaza District.",
        "Financial District saw the lowest growth, dragged by older inventory.",
        "Midtown South experiencing above-average rent increases due to tech tenant interest.",
      ],
      suggestedFollowUps: [
        "How are concessions trending in New York?",
        "What's the average rent right now for small tenants? Large tenants in New York?",
        "Which submarkets are seeing the most tenant tour activity right now in New York?",
      ],
      summary:
        "New York rents have grown 5% year-over-year, with stronger momentum in Class A buildings. Midtown South and Plaza District continue to outperform.",
    },
  },
  {
    prompt:
      "Are large-block spaces (50k+ sf) seeing activity here in New York?",
    payload: {
      marketMetadata: {
        title: "New York",
        buildingClass: "A",
      },
      marketData: [
        { label: "Active 50k+ SF Reqs", value: "17" },
        { label: "Signed Leases (50k+)", value: "3 this quarter" },
        { label: "Largest Deal", value: "120k SF – Hudson Yards" },
      ],
      keyInsights: [
        "Renewed interest in large blocks as hybrid workplace plans stabilize.",
        "Hudson Yards and Downtown attracting large users in media and law.",
        "Fewer new large-scale requirements compared to same time last year.",
      ],
      suggestedFollowUps: [
        "What's the leasing velocity over the past 6 months in New York?",
        "Break down demand by tenant size ranges in New York.",
        "How is active demand trending in the past quarter in New York?",
      ],
      summary:
        "Large-block leasing is gaining traction with a handful of significant deals signed recently, suggesting a cautious return of enterprise tenants.",
    },
  },
  {
    prompt:
      "What's the average rent right now for small tenants? Large tenants in New York?",
    payload: {
      marketMetadata: {
        title: "New York",
        buildingClass: "A",
      },
      marketData: [
        { label: "<5k SF", value: "$55.00 PSF" },
        { label: "5–10k SF", value: "$72.00 PSF" },
        { label: "10–20k SF", value: "$55.00 PSF" },
        { label: "20–50k SF", value: "$72.00 PSF" },
        { label: ">50k SF", value: "$72.00 PSF" },
      ],
      keyInsights: [
        "Smaller tenants (<5k SF) are securing rents below the market average, particularly in Midtown South.",
        "Large tenants (>50k SF) are often paying a premium due to limited availability of contiguous space.",
        "Mid-range tenants (5–20k SF) experience higher variability depending on submarket and building class.",
      ],
      suggestedFollowUps: [
        "How are concessions trending in New York?",
        "Break down demand by tenant size ranges in New York.",
        "How does the average free rent period compare across New York for leases in the [Finance] industry ?",
      ],
      summary:
        "Small tenants in New York average around $55 PSF, while larger tenants typically pay closer to $72 PSF. Rent differences reflect both space availability and location within Class A assets.",
    },
  },
  {
    prompt: "How are concessions trending in New York?",
    payload: {
      marketMetadata: {
        title: "New York",
        buildingClass: "A",
      },
      marketData: [
        { label: "Avg. TI", value: "$80.00 PSF" },
        { label: "Avg. Free Rent", value: "4.2 months" },
        { label: "Concession Value", value: "$96.00 PSF" },
      ],
      keyInsights: [
        "Tenant improvement packages are holding steady across most submarkets.",
        "Free rent periods have leveled off following post-pandemic spikes.",
        "Hudson Yards remains the most aggressive with concessions to attract anchor tenants.",
      ],
      suggestedFollowUps: [
        "What's the average rent right now for small tenants? Large tenants in New York?",
        "Which submarkets are seeing the most tenant tour activity right now in New York?",
        "How is active demand trending in the past quarter in New York?",
      ],
      summary:
        "Concession trends in New York show stabilization, with average TI allowances around $80 PSF and free rent periods averaging 4.2 months. Landlords continue using incentives strategically to compete in slower submarkets.",
    },
  },
  {
    prompt:
      "Which submarkets are seeing the most tenant tour activity right now in New York?",
    payload: {
      marketMetadata: {
        title: "New York",
        buildingClass: "A",
      },
      marketData: [
        { label: "Tour Volume (Midtown South)", value: "Highest in Q2 2025" },
        { label: "Tour Volume Change (Financial District)", value: "+18% QoQ" },
        {
          label: "Tour Volume Trend (Hudson Yards)",
          value: "Moderate & Stable",
        },
      ],
      keyInsights: [
        "Midtown South continues to lead the city in tenant tour activity.",
        "The Financial District is seeing a resurgence, especially among law firms and nonprofits.",
        "Hudson Yards activity has plateaued after strong growth in the prior year.",
      ],
      suggestedFollowUps: [
        "How is active demand trending in the past quarter in New York?",
        "Break down demand by tenant size ranges in New York.",
        "Show me historical rent trends for New York.",
      ],
      summary:
        "Midtown South and the Financial District are currently seeing the most tenant tour activity in New York, signaling likely near-term leasing velocity. Tour growth suggests renewed tenant confidence and competitive leasing posture from landlords.",
    },
  },
];

export const vtsAiPromptsWithoutContext: VtsAiPrompt[] = [
  {
    prompt: "How is active demand trending in the past quarter?",
    payload: {
      summary:
        "Active demand has seen a slight increase of 2.5% over the past quarter, primarily driven by small to mid-sized tenants.",
    },
  },
  {
    prompt: "What's the current total active demand?",
    payload: {
      marketData: [{ label: "Total Active Demand", value: "12.3M SF" }],
      summary:
        "The current total active demand across the market is 12.3 million square feet.",
    },
  },
  {
    prompt: "What's the leasing velocity over the past 6 months?",
    payload: {
      marketData: [{ label: "Leasing Velocity (6 mo.)", value: "5.8M SF" }],
      summary:
        "Leasing velocity over the last 6 months reached 5.8 million square feet, reflecting consistent tenant activity.",
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
    },
  },
  {
    prompt: "Show me historical rent trends.",
    payload: {
      summary:
        "Rents have increased 5% year-over-year, with stronger growth observed in higher-quality assets.",
    },
  },
  {
    prompt: "Are large-block spaces (50k+ sf) seeing activity?",
    payload: {
      summary:
        "Large-block space activity has picked up, with several notable leases signed in the past quarter.",
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
    },
  },
  {
    prompt: "How are concessions trending?",
    payload: {
      summary:
        "Concessions have stabilized, with tenant improvement allowances averaging $80 PSF and free rent periods holding steady.",
    },
  },
  {
    prompt:
      "Which submarkets are seeing the most tenant tour activity right now?",
    payload: {
      summary:
        "Key submarkets are showing elevated tenant tour activity, which may signal increased leasing momentum ahead.",
    },
  },
];
