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
    prompt: "Give me a market analysis for New York",
    payload: {
      marketMetadata: {
        title: "New York",
        buildingClass: "A",
      },
      marketData: [
        { label: "Avg. Gross NER", value: "$45.50 PSF" },
        { label: "Avg. TI", value: "$65.00 PSF" },
        { label: "Avg. Free Rent", value: "4.2 months" },
        { label: "# active proposals", value: "1,247" },
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
        "How is active demand trending in the past quarter in New York?",
        "What are the average lease terms for coffee shops in Manhattan?",
        "Show me comparable deals for retail spaces in this submarket.",
      ],
      summary:
        "The New York retail market demonstrates robust recovery with increased leasing velocity and stabilizing rents. Prime ground-floor retail spaces continue to command premium pricing, while landlords are becoming more flexible with lease structures. The coffee and food service sectors are particularly active, benefiting from strong foot traffic recovery and evolving consumer preferences for experiential retail.",
    },
  },
  {
    prompt: "How is active demand trending up the past quarter in New York?",
    payload: {
      summary:
        "Active demand in New York has seen a slight increase of 2.5% in the last quarter, driven by small to medium-sized businesses.",
      submarketData: [
        { label: "Midtown South", value: "+3.1%" },
        { label: "Financial District", value: "+2.7%" },
        { label: "Plaza District", value: "-0.8%" },
      ],
    },
  },
  {
    prompt: "What's the current total active demand in New York?",
    payload: {
      marketData: [{ label: "Total Active Demand", value: "12.3M SF" }],
      summary:
        "The current total active demand in New York is 12.3 million square feet.",
      submarketData: [
        { label: "Midtown", value: "4.6M SF" },
        { label: "Downtown", value: "3.2M SF" },
        { label: "Midtown South", value: "4.5M SF" },
      ],
    },
  },
  {
    prompt: "What's the leasing velocity over the past 6 months in New York?",
    payload: {
      marketData: [{ label: "Leasing Velocity (6 mo.)", value: "5.8M SF" }],
      summary:
        "The leasing velocity in New York over the past 6 months was 5.8 million square feet.",
      submarketData: [
        { label: "Midtown South", value: "2.2M SF" },
        { label: "Financial District", value: "1.7M SF" },
        { label: "Hudson Yards", value: "1.9M SF" },
      ],
    },
  },
  {
    prompt: "Break down demand by tenant size ranges in New York.",
    payload: {
      marketData: [
        { label: "< 5k SF", value: "4.1M SF" },
        { label: "5k - 20k SF", value: "5.2M SF" },
        { label: "> 20k SF", value: "3.0M SF" },
      ],
      summary:
        "Demand is strongest in the 5k-20k SF range, indicating a healthy mid-market.",
      submarketData: [
        { label: "Midtown (<5k SF)", value: "1.6M SF" },
        { label: "Downtown (5k–20k SF)", value: "2.0M SF" },
        { label: "Midtown South (>20k SF)", value: "1.4M SF" },
      ],
    },
  },
  {
    prompt: "Show me historical rent trends for New York.",
    payload: {
      summary:
        "Historical rent trends show a 5% year-over-year increase, with a more pronounced spike in Class A properties.",
      submarketData: [
        { label: "Plaza District", value: "+7.2% YoY" },
        { label: "Financial District", value: "+3.4% YoY" },
        { label: "Midtown South", value: "+6.1% YoY" },
      ],
    },
  },
  {
    prompt:
      "Are large-block spaces (50k+ sf) seeing activity here in New York?",
    payload: {
      summary:
        "Yes, large-block spaces are seeing renewed interest, with three major leases signed in the last quarter.",
      submarketData: [
        { label: "Hudson Yards", value: "2 signed leases > 100k SF" },
        { label: "Downtown", value: "1 signed lease > 75k SF" },
      ],
    },
  },
  {
    prompt:
      "What's the average rent right now for small tenants? Large tenants in New York?",
    payload: {
      marketData: [
        { label: "<5k sf", value: "$55.00 PSF" },
        { label: "5-10k sf", value: "$72.00 PSF" },
        { label: "10-20k sf", value: "$55.00 PSF" },
        { label: "20-50k sf", value: "$72.00 PSF" },
        { label: ">50k sf", value: "$72.00 PSF" },
      ],
      summary:
        "The average rent for small tenants in New York is $55.00 PSF, while the average rent for large tenants is $72.00 PSF.",
      submarketData: [
        { label: "Midtown South (<5k SF)", value: "$52.00 PSF" },
        { label: "Downtown (20k+ SF)", value: "$74.00 PSF" },
      ],
    },
  },
  {
    prompt: "How are concessions trending in New York?",
    payload: {
      summary:
        "Concessions are stabilizing after a period of increase, with TI allowances averaging $80 PSF for new leases.",
      submarketData: [
        { label: "Hudson Yards", value: "$95 PSF" },
        { label: "Downtown", value: "$70 PSF" },
        { label: "Midtown South", value: "$78 PSF" },
      ],
    },
  },
  {
    prompt:
      "How does the average free rent period compare across New York for leases in the [Finance] industry ?",
    payload: {
      marketData: [
        { label: "Avg. Free Rent (Finance)", value: "5.5 months" },
        { label: "Avg. Free Rent (Overall)", value: "4.2 months" },
      ],
      summary:
        "The finance industry is receiving more generous free rent periods compared to the overall market average.",
      submarketData: [
        { label: "Midtown (Finance)", value: "6.0 months" },
        { label: "Downtown (Finance)", value: "5.0 months" },
      ],
    },
  },
  {
    prompt:
      "Which submarkets are seeing the most tenant tour activity right now in New York?",
    payload: {
      summary:
        "Midtown South and the Financial District are leading in tenant tour activity, suggesting strong future leasing in these areas.",
      submarketData: [
        { label: "Midtown South", value: "Highest tour volume Q2 2025" },
        { label: "Financial District", value: "Up 18% vs. prior quarter" },
        { label: "Hudson Yards", value: "Moderate tour activity" },
      ],
    },
  },
];

export const vtsAiPromptsWithoutContext: VtsAiPrompt[] = [
  {
    prompt: "How is active demand trending in the past quarter?",
    payload: {
      summary:
        "Active demand has seen a slight increase of 2.5% in the last quarter, driven by small to medium-sized businesses.",
    },
  },
  {
    prompt: "What's the current total active demand?",
    payload: {
      marketData: [{ label: "Total Active Demand", value: "12.3M SF" }],
      summary: "The current total active demand is 12.3 million square feet.",
    },
  },
  {
    prompt: "What's the leasing velocity over the past 6 months?",
    payload: {
      marketData: [{ label: "Leasing Velocity (6 mo.)", value: "5.8M SF" }],
      summary:
        "The leasing velocity over the past 6 months was 5.8 million square feet.",
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
        "Demand is strongest in the 5k-20k SF range, indicating a healthy mid-market.",
    },
  },
  {
    prompt: "Show me historical rent trends.",
    payload: {
      summary:
        "Historical rent trends show a 5% year-over-year increase, with a more pronounced spike in Class A properties.",
    },
  },
  {
    prompt: "Are large-block spaces (50k+ sf) seeing activity?",
    payload: {
      summary:
        "Yes, large-block spaces are seeing renewed interest, with three major leases signed in the last quarter.",
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
    },
  },
  {
    prompt: "How are concessions trending?",
    payload: {
      summary:
        "Concessions are stabilizing after a period of increase, with TI allowances averaging $80 PSF for new leases.",
    },
  },
  {
    prompt:
      "Which submarkets are seeing the most tenant tour activity right now?",
    payload: {
      summary:
        "Midtown South and the Financial District are leading in tenant tour activity, suggesting strong future leasing in these areas.",
    },
  },
];
