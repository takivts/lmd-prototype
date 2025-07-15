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
    prompt: "How are rents trending in [Market] year over year?",
    payload: {
      summary: [
        "In [Market], executed leases show average starting gross rent per sqft at $72.92 for 2024 and $69.11 for 2025.",
        "This reflects a 5.2% year-over-year decrease, highlighting softening rental trends amid evolving market dynamics.",
      ],
      keyInsights: [
        "Market Softening Signals: The 5.2% YoY decline from $72.92 in 2024 to $69.11 in 2025 for executed leases in [Market] indicates cooling demand, potentially due to higher vacancies or economic headwinds, creating a tenant-friendly environment for negotiations.",
        "Investment and Recovery Outlook: This downward trend may pressure short-term property values but could present buying opportunities if demand rebounds, especially in growth sectors; monitoring supply additions will be key for forecasting stabilization.",
      ],
      suggestedFollowUps: [
        "How are rents trending in [Market] this year?",
        "How are concessions trending in [submarket] year over year?",
        "What’s the average rent right now for small tenants? Large tenants in [submarket]",
      ],
    },
  },
  {
    prompt: "How are rents trending in [Market] this year?",
    payload: {
      summary: [
        "In [Market] this year, executed leases average $69.11 per sqft per year, while active proposals are at $79.93 per sqft.",
        "This reflects an upward trend in rental rates from executed deals to ongoing negotiations, pointing to positive momentum.",
      ],
      keyInsights: [
        "Upward Momentum in Negotiations: Active proposals at $79.93 per sqft show a significant premium over 2025 executed rents ($69.11), indicating strengthening market confidence and potential rent growth this year in [Market], possibly fueled by recovering demand or limited supply.",
        "Strategic Timing for Deals: This gap suggests tenants could lock in lower rates by executing soon, while landlords benefit from rising proposals; investors should monitor if this translates to higher effective rents amid economic recovery.",
      ],
      suggestedFollowUps: [
        "How are rents trending in [Market] year over year?",
        "What’s the average rent right now for small tenants? Large tenants in [submarket]",
        "How are concessions trending in [submarket] year over year?",
      ],
    },
  },
  {
    prompt:
      "What is the average Tenant Improvement (TI) allowance in [Submarket] for leases [size tier] for the [industry] industry?",
    payload: {
      summary: [
        "In Grand Central for the Finance industry (e.g., leases >50k sq ft), the average Tenant Improvement (TI) allowance is $127.86 per sqft.",
        "This highlights substantial incentives available, potentially varying by deal size and submarket dynamics.",
      ],
      keyInsights: [
        "Competitive Incentives for Finance Tenants: The average TI allowance of $127.86 per sqft in Grand Central for the Finance industry reflects aggressive landlord concessions to attract high-value tenants, likely driven by competition in premium submarkets for large leases (>50k sq ft).",
        "Industry-Specific Trends: Compared to sectors like Tech (which often see lower TIs due to shorter lease terms), Finance's higher allowances suggest tailored packages for buildouts in financial hubs, offering opportunities for cost savings in negotiations amid stable market conditions.",
      ],
      suggestedFollowUps: [
        "What’s the average rent right now for small tenants? Large tenants in [submarket]",
        "How are concessions trending in [submarket] year over year?",
        "How are rents trending in [Market] year over year?",
      ],
    },
  },
  {
    prompt:
      "What’s the average rent right now for small tenants? Large tenants in [submarket]",
    payload: {
      summary: [
        "In Grand Central, the average starting gross rent per sqft per year is $72.92 for small tenants (<10k sf), $72.92 for mid-sized (10-20k sf), and $72.92 for large tenants (>20k sf).",
        "This shows no variation by size tier, highlighting consistent pricing dynamics in the submarket.",
      ],
      keyInsights: [
        "Uniform Pricing Across Sizes: The consistent average starting gross rent of $72.92 per sqft across all tenant size tiers in Grand Central indicates a level playing field, with no significant premiums or discounts for small (<10k sf) versus large (>20k sf) tenants, possibly reflecting standardized market rates in a high-demand submarket.",
        "Market Stability and Tenant Strategy: This uniformity suggests stable rental conditions in Grand Central, where larger tenants might leverage volume for better overall terms (e.g., TI or free rent), while small tenants benefit from accessible pricing without scale penalties.",
      ],
      suggestedFollowUps: [
        "How are rents trending in [Market] this year?",
        "What is the average Tenant Improvement (TI) allowance in [Submarket] for leases [size tier] for the [industry] industry?",
        "How are concessions trending in [submarket] year over year?",
      ],
    },
  },
  {
    prompt: "How are concessions trending in [submarket] year over year?",
    payload: {
      summary: [
        "In [submarket], executed leases show average TI at $108.76 per sqft and free rent at 7.16 months for 2024, dropping to $101.23 per sqft and 7.05 months for 2025.",
        "This reflects a modest year-over-year decrease in concessions, pointing to a tightening market with less aggressive landlord incentives.",
      ],
      keyInsights: [
        "Declining Concessions Signal Market Strength: The YoY reduction in average TI (down ~6.9% to $101.23 per sqft) and free rent (down ~1.6% to 7.05 months) suggests landlords in [submarket] are pulling back on incentives, possibly due to improving demand or stabilizing vacancies in executed leases.",
        "Opportunities for Tenants and Investors: This trend could indicate a shift toward landlord-favorable terms, but tenants negotiating in 2025 might still secure competitive packages in high-demand segments, while investors benefit from potentially higher effective rents.",
      ],
      suggestedFollowUps: [
        "What’s the average rent right now for small tenants? Large tenants in [submarket]",
        "How are rents trending in [Market] this year?",
        "What is the average Tenant Improvement (TI) allowance in [Submarket] for leases [size tier] for the [industry] industry?",
      ],
    },
  },
  {
    prompt:
      "What is Avg. Gross NER, Avg. TI Avg. Free Rent, Count of active proposals in [submarket] for [industry] for [building class] where size tier is [size]",
    payload: {
      summary: [
        "In [submarket] for [industry] in [building class] properties across size tiers <5k sf, 5-10k sf, 10-20k sf, and >20k sf, the average gross NER is [Value], average TI is [Value], and average free rent is [Value].",
        "There are [Value] active proposals, highlighting current market incentives and leasing volume in these segments.",
      ],
      keyInsights: [
        "Tenant Incentives Reflect Market Competition: The average TI and free rent values indicate landlord concessions to attract [industry] tenants in [building class] properties, with higher incentives potentially signaling softer demand in smaller size tiers (<5k sf and 5-10k sf) where proposals are more fragmented.",
        "Proposal Activity and Deal Sizing: With [Value] active proposals across the specified size tiers, this suggests moderate leasing interest in [submarket] for [industry], offering opportunities for scaled deals (>20k sf) where average gross NER could be negotiated lower due to volume.",
      ],
      suggestedFollowUps: [
        "How are concessions trending in [submarket] year over year?",
        "How are rents trending in [Market] year over year?",
        "What’s the average rent right now for small tenants? Large tenants in [submarket]",
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
