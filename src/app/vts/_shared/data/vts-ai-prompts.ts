export type MarketMetadata = {
  category?: string;
  market: string;
  submarket?: string;
  industry?: string;
  buildingClass?: string;
  size?: string;
};

export type MarketData = {
  label: string;
  value: string;
};

export type MarketAnalysisData = {
  marketMetadata?: MarketMetadata;
  marketData?: MarketData[];
  keyInsights?: string[];
  suggestedFollowUps?: string[];
  summary?: string[];
};

export type VtsAiPrompt = {
  prompt: string;
  payload: MarketAnalysisData;
};

export const vtsAiPromptsWithContext: VtsAiPrompt[] = [
  {
    prompt: "Give me a submarket overview for Manhattan, New York",
    payload: {
      marketMetadata: {
        category: "Overview",
        market: "New York",
        submarket: "Manhattan",
        industry: "FIRE",
        buildingClass: "A",
        size: "10k - 25k",
      },
      marketData: [
        { label: "Avg. NER", value: "$52.75 PSF" },
        { label: "Avg. TI", value: "$71.00 PSF" },
        { label: "Avg. Free Rent", value: "3.8 months" },
        { label: "Active proposals", value: "1,184" },
        { label: "Avg. Lease Term", value: "6.9 years" },
        { label: "Concession Value", value: "$88.30 PSF" },
      ],
      keyInsights: [
        "Leasing momentum is up 12% YoY, supported by strong finance tenant activity.",
        "NERs have rebounded, particularly in Midtown East and Flatiron corridors.",
        "Landlords are tightening concessions slightly as occupancy improves.",
      ],
      suggestedFollowUps: [
        "How are concessions trending in Manhatten, New York?",
        "What's the leasing velocity over the past 6 months in Manhatten, New York?",
        "Break down demand by tenant size ranges in Manhatten, New York.",
      ],
      summary: [
        "Manhattan Class A product is seeing renewed traction, especially from FIRE tenants in Midtown. While concessions are still generous, they're beginning to taper as demand picks up. Net effective rents are stabilizing and trending up in prime corridors.",
      ],
    },
  },
  {
    prompt:
      "How is active demand trending in the past quarter for Manhattan, New York?",
    payload: {
      marketMetadata: {
        category: "Active demand",
        market: "New York",
        submarket: "Manhattan",
        industry: "FIRE",
        buildingClass: "A",
        size: "10k - 25k",
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
        "How are concessions trending in Manhatten, New York?",
        "What's the leasing velocity over the past 6 months in Manhatten, New York?",
        "Break down demand by tenant size ranges in Manhatten, New York.",
      ],
      summary: [
        "Active demand in Manhattan ticked up 1.9% this past quarter, with strong engagement from financial and insurance tenants. Tour volumes and proposal activity reflect cautious but improving confidence.",
      ],
    },
  },
  {
    prompt: "What's the current total active demand in Manhatten, New York?",
    payload: {
      marketMetadata: {
        category: "Active demand",
        market: "New York",
        submarket: "Manhattan",
        industry: "FIRE",
        buildingClass: "A",
        size: "10k - 25k",
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
        "Break down demand by tenant size ranges in Manhatten, New York.",
        "What's the average rent right now for small tenants? Large tenants in New York?",
        "Which submarkets are seeing the most tenant tour activity right now in New York?",
      ],
      summary: [
        "New York's total active demand currently sits at 12.1M SF, with a high concentration of small and mid-size users. Large-block demand is quieter, but core FIRE users are keeping pipeline activity resilient.",
      ],
    },
  },
  {
    prompt:
      "What's the leasing velocity over the past 6 months in Manhatten, New York?",
    payload: {
      marketMetadata: {
        category: "Leasing velocity",
        market: "New York",
        submarket: "Manhattan",
        industry: "FIRE",
        buildingClass: "A",
        size: "10k - 25k",
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
        "How is active demand trending in the past quarter for Manhattan, New York?",
        "How are concessions trending in Manhatten, New York?",
      ],
      summary: [
        "Leasing velocity hit 5.4M SF over six months, showing steady but slightly slower deal flow as larger tenants deliberate.",
      ],
    },
  },
  {
    prompt: "Break down demand by tenant size ranges in Manhatten, New York.",
    payload: {
      marketMetadata: {
        category: "Demand",
        market: "New York",
        submarket: "Manhattan",
        industry: "FIRE",
        buildingClass: "A",
        size: "10k - 25k",
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
        "How is active demand trending in the past quarter for Manhattan, New York?",
      ],
      summary: [
        "Mid-size tenants (5–20k SF) account for the bulk of current demand. Smaller occupiers are driving tour activity and short-term deal volume.",
      ],
    },
  },
  {
    prompt: "Show me historical rent trends for Manhattan, New York.",
    payload: {
      marketMetadata: {
        category: "Historical trends",
        market: "New York",
        submarket: "Manhattan",
        industry: "FIRE",
        buildingClass: "A",
        size: "10k - 25k",
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
        "How are concessions trending in Manhatten, New York?",
        "What's the average rent right now for small tenants? Large tenants in New York?",
        "Which submarkets are seeing the most tenant tour activity right now in New York?",
      ],
      summary: [
        "Rents in New York are up 4.2% YoY, supported by resilient Class A performance. Rent growth is narrowing between asset classes.",
      ],
    },
  },
  {
    prompt:
      "Are large-block spaces (50k+ sf) seeing activity here in Manhattan, New York?",
    payload: {
      marketMetadata: {
        category: "Large block spaces",
        market: "New York",
        submarket: "Manhattan",
        industry: "FIRE",
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
        "What's the leasing velocity over the past 6 months in Manhatten, New York?",
        "Break down demand by tenant size ranges in Manhatten, New York.",
        "How is active demand trending in the past quarter for Manhattan, New York?",
      ],
      summary: [
        "Large-block leasing remains muted, with only two major deals signed this quarter. Decision-making among enterprise users remains elongated.",
      ],
    },
  },
  {
    prompt:
      "What's the average rent right now for small tenants? Large tenants in Manhattan, New York?",
    payload: {
      marketMetadata: {
        category: "Average rents",
        market: "New York",
        submarket: "Manhattan",
        industry: "FIRE",
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
        "How are concessions trending in Manhatten, New York?",
        "Break down demand by tenant size ranges in Manhatten, New York.",
        "How does the average free rent period compare across New York for leases in the [Finance] industry ?",
      ],
      summary: [
        "Average rents range from $56 PSF for small tenants to $73 PSF for large blocks. Pricing continues to reflect product quality and scarcity.",
      ],
    },
  },
  {
    prompt:
      "How are concessions trending in Manhatten submarket of Manhattan, New York?",
    payload: {
      marketMetadata: {
        category: "Concessions",
        market: "New York",
        submarket: "Manhattan",
        industry: "FIRE",
        buildingClass: "A",
        size: "10k - 25k",
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
        "What's the average rent right now for small tenants? Large tenants in Manhattan, New York?",
        "Which submarkets are seeing the most tenant tour activity right now in Manhattan, New York?",
        "How is active demand trending in the past quarter for Manhattan, New York?",
      ],
      summary: [
        "Concessions remain elevated but flat, averaging $93 PSF in total value. Landlords are using TI to secure renewals and long-term leases.",
      ],
    },
  },
];

export const vtsAiPromptsWithoutContext: VtsAiPrompt[] = [
  {
    prompt: "How is active demand trending in the past quarter?",
    payload: {
      marketMetadata: {
        category: "Tenant demand",
        market: "All markets",
      },
      marketData: [
        { label: "QoQ Demand Chg", value: "+1.8%" },
        { label: "Avg. Active Reqs", value: "1,035" },
        { label: "Avg. Total SF", value: "7.8M SF" },
      ],
      keyInsights: [
        "Tenant demand rose modestly across major markets, led by growth in tech and professional services sectors.",
        "Mid-size tenant activity (10k–50k SF) drove the majority of new requirements nationally.",
        "Markets like Boston, New York, and Washington saw the most consistent tour activity increases.",
      ],
      suggestedFollowUps: [
        "Which markets saw the highest increase in tenant demand?",
        "Break down demand by tenant size across major markets.",
        "How is leasing velocity trending nationally?",
      ],
      summary: [
        "Active tenant demand across major U.S. office markets rose 1.8% quarter-over-quarter, signaling modest recovery in leasing interest.",
        "Growth was concentrated in mid-sized requirements (10k–50k SF), which accounted for over 60% of new activity.",
        "Tech and business services tenants were the primary drivers of new tours and proposal activity in Q2.",
        "Core markets like New York, Boston, and Washington, D.C. continued to see steady tour volume, while demand in West Coast markets like San Francisco remained flat.",
      ],
    },
  },
  {
    prompt: "What's the leasing velocity over the past 6 months?",
    payload: {
      marketMetadata: {
        category: "Leasing activity",
        market: "All markets",
      },
      marketData: [
        { label: "Leasing velocity", value: "5.8M SF" },
        { label: "# of exec. leases", value: "428" },
        { label: "FIRE tenants", value: "+3.5% last mo." },
        { label: "TAMI tenants", value: "+1.2% vs last mo." },
        { label: "Pro Services", value: "-0.8% vs last mo." },
        { label: "Other tenants", value: "+0.5% vs last mo." },
      ],
      keyInsights: [
        "Leasing activity remained stable across most major markets, with steady interest from mid-sized tenants.",
        "Professional services and life sciences accounted for a notable share of recent transactions.",
        "New York and Boston led in total square footage leased, while West Coast markets showed more muted velocity.",
      ],
      suggestedFollowUps: [
        "Break down demand by tenant size ranges.",
        "Show me historical rent trends.",
        "Are large-block spaces (50k+ SF) seeing activity?",
      ],
      summary: [
        "Leasing velocity over the past 6 months totaled 5.8 million square feet, indicating a steady pace of deal activity across the top U.S. office markets.",
        "Mid-sized tenants (10k–50k SF) made up the bulk of completed leases, reflecting continued demand in this range.",
        "Professional services and life sciences sectors were particularly active, driving leasing in core urban locations.",
        "Markets like New York and Boston accounted for a disproportionate share of volume, while leasing in tech-heavy West Coast markets lagged behind.",
        "The data points to a market in recovery mode—stable, but with limited momentum in larger deals.",
      ],
    },
  },
  {
    prompt: "Break down demand by tenant size ranges.",
    payload: {
      marketMetadata: {
        category: "Demand",
        market: "All markets",
      },
      marketData: [
        { label: "< 5k SF", value: "4.1M SF" },
        { label: "5k - 20k SF", value: "5.2M SF" },
        { label: "> 20k SF", value: "3.0M SF" },
      ],
      keyInsights: [
        "Demand is strongest in the 5k–20k SF range, representing nearly 40% of total active square footage.",
        "Small tenant activity (<5k SF) is showing resilience, driven by professional services and healthcare users.",
        "Large-block demand remains relatively flat compared to the prior quarter.",
      ],
      suggestedFollowUps: [
        "Show me historical rent trends.",
        "Are large-block spaces (50k+ sf) seeing activity?",
        "What's the average rent right now for small tenants? Large tenants?",
      ],
      summary: [
        "Mid-sized tenants in the 5k–20k SF range lead demand across U.S. office markets, accounting for over one-third of active requirements.",
        "Smaller tenant interest is stable, while demand for larger blocks over 20k SF is limited to a few core markets like New York and Chicago.",
      ],
    },
  },
  {
    prompt: "Show me historical rent trends.",
    payload: {
      marketMetadata: {
        category: "Historical trends",
        market: "All markets",
      },
      marketData: [
        { label: "YoY Rent Change", value: "+5.0%" },
        { label: "3-Year CAGR", value: "+1.7%" },
      ],
      keyInsights: [
        "Rent growth is led by Class A assets in urban cores, especially in New York and Boston.",
        "Secondary and non-core assets continue to see flat or negative rent growth.",
        "Year-over-year rents increased in 10 of 14 tracked markets.",
      ],
      suggestedFollowUps: [
        "Are large-block spaces (50k+ sf) seeing activity?",
        "What's the average rent right now for small tenants? Large tenants?",
        "How are concessions trending?",
      ],
      summary: [
        "U.S. office rents rose 5% year-over-year, with Class A assets in major metros outperforming the broader market.",
        "Long-term growth remains moderate, and heavily discounted subleases continue to suppress pricing in some West Coast markets.",
      ],
    },
  },
  {
    prompt: "Are large-block spaces (50k+ sf) seeing activity?",
    payload: {
      marketMetadata: {
        category: "Large block spaces",
        market: "All markets",
      },
      marketData: [
        { label: "Large Block Tours (Q2)", value: "52" },
        { label: "Avg. Size Toured", value: "68k SF" },
      ],
      keyInsights: [
        "Several markets—particularly New York and Dallas—have seen an uptick in large-block tours.",
        "Overall, activity remains below pre-2020 levels but shows signs of gradual recovery.",
        "Most demand is clustered in core CBDs, with institutional tenants seeking quality assets.",
      ],
      suggestedFollowUps: [
        "What's the average rent right now for small tenants? Large tenants?",
        "How are concessions trending?",
        "Which submarkets are seeing the most tenant tour activity right now?",
      ],
      summary: [
        "Large-block space activity is picking up, with over 50 tours tracked in the past quarter.",
        "Interest is strongest in core urban markets, especially among FIRE and government tenants looking for long-term stability.",
      ],
    },
  },
  {
    prompt:
      "What's the average rent right now for small tenants? Large tenants?",
    payload: {
      marketMetadata: {
        category: "Average rents",
        market: "All markets",
      },
      marketData: [
        { label: "Avg. Rent (Small Tenants)", value: "$55.00 PSF" },
        { label: "Avg. Rent (Large Tenants)", value: "$72.00 PSF" },
      ],
      keyInsights: [
        "Smaller tenants are generally paying a lower PSF rate due to flexible lease structures and more concessions.",
        "Larger tenants secure more premium spaces but tend to negotiate deeper incentives to offset higher base rents.",
        "Markets with tighter supply, like Boston and New York, report the highest large-tenant rents.",
      ],
      suggestedFollowUps: [
        "How are concessions trending?",
        "Which submarkets are seeing the most tenant tour activity right now?",
        "How is active demand trending in the past quarter?",
      ],
      summary: [
        "Small tenants are paying an average of $55 PSF, while large tenants are averaging $72 PSF across major markets.",
        "Differences reflect both asset quality and landlord flexibility, with concessions helping to balance rent burdens.",
      ],
    },
  },
  {
    prompt: "How are concessions trending?",
    payload: {
      marketMetadata: {
        category: "Concessions",
        market: "All markets",
      },
      marketData: [
        { label: "Avg. TI Allowance", value: "$80 PSF" },
        { label: "Avg. Free Rent", value: "4.5 months" },
      ],
      keyInsights: [
        "Tenant concessions have held steady this quarter, with landlords offering increased flexibility in deal structuring.",
        "Markets like San Francisco and Washington continue to offer outsized concessions to attract credit tenants.",
        "TI packages are strongest in Class A buildings in competitive CBDs.",
      ],
      suggestedFollowUps: [
        "Which submarkets are seeing the most tenant tour activity right now?",
        "How is active demand trending in the past quarter?",
        "What is the current total active demand?",
      ],
      summary: [
        "Concessions have stabilized across U.S. markets, with tenant improvement allowances averaging $80 PSF and free rent around 4.5 months.",
        "While still generous by historical standards, landlord flexibility is starting to tighten in high-demand markets.",
      ],
    },
  },
  {
    prompt:
      "Which submarkets are seeing the most tenant tour activity right now?",
    payload: {
      marketMetadata: {
        category: "Tour activity",
        market: "All markets",
      },
      marketData: [
        {
          label: "Top Touring Markets",
          value: "New York, Boston, Washington, Chicago",
        },
        { label: "Tour Volume Growth", value: "+6.4% QoQ" },
      ],
      keyInsights: [
        "Core urban submarkets are showing strong tour volume, especially in the Northeast corridor.",
        "Chicago and Atlanta have emerged as high-activity zones for mid-sized tenants.",
        "West Coast markets remain muted despite favorable concessions.",
      ],
      suggestedFollowUps: [
        "How is active demand trending in the past quarter?",
        "What is the current total active demand?",
        "What's the leasing velocity over the past 6 months?",
      ],
      summary: [
        "Tour activity is strongest in New York, Boston, and Washington, with Chicago showing notable growth.",
        "National tour volumes rose 6.4% QoQ, with most gains in mid-sized tenant segments.",
      ],
    },
  },
];
