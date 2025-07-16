export type MarketMetadata = {
  category?: string;
  market?: string;
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
    prompt: "Give me an overview of the submarket",
    payload: {
      marketMetadata: {
        category: "Demand",
      },
      summary: [
        "In [Market], executed leases show average starting gross rent per sqft at $72.92 for 2024 and $69.11 for 2025.",
        "This reflects a 5.2% year-over-year decrease, highlighting softening rental trends amid evolving market dynamics.",
      ],
      keyInsights: [
        "Market Softening Signals: The 5.2% YoY decline from $72.92 in 2024 to $69.11 in 2025 for executed leases in [Market] indicates cooling demand, potentially due to higher vacancies or economic headwinds, creating a tenant-friendly environment for negotiations.",
        "Investment and Recovery Outlook: This downward trend may pressure short-term property values but could present buying opportunities if demand rebounds, especially in growth sectors; monitoring supply additions will be key for forecasting stabilization.",
      ],
      suggestedFollowUps: [
        "How are rents trending this year?",
        "What's the average rent for small and large tenants?",
        "What is the average Tenant Improvement (TI) allowance?",
      ],
    },
  },
  {
    prompt: "How are rents trending?",
    payload: {
      marketMetadata: {
        category: "Deal Economics",
      },
      summary: [
        "In [Market], executed leases show average starting gross rent per sqft at $72.92 for 2024 and $69.11 for 2025.",
        "This reflects a 5.2% year-over-year decrease, highlighting softening rental trends amid evolving market dynamics.",
      ],
      keyInsights: [
        "Market Softening Signals: The 5.2% YoY decline from $72.92 in 2024 to $69.11 in 2025 for executed leases in [Market] indicates cooling demand, potentially due to higher vacancies or economic headwinds, creating a tenant-friendly environment for negotiations.",
        "Investment and Recovery Outlook: This downward trend may pressure short-term property values but could present buying opportunities if demand rebounds, especially in growth sectors; monitoring supply additions will be key for forecasting stabilization.",
      ],
      suggestedFollowUps: [
        "How are rents trending this year?",
        "What's the average rent for small and large tenants?",
        "What is the average Tenant Improvement (TI) allowance?",
      ],
    },
  },
  {
    prompt: "How are rents trending this year?",
    payload: {
      marketMetadata: {
        category: "Deal Economics",
      },
      summary: [
        "In [Market] this year, executed leases average $69.11 per sqft per year, while active proposals are at $79.93 per sqft.",
        "This reflects an upward trend in rental rates from executed deals to ongoing negotiations, pointing to positive momentum.",
      ],
      keyInsights: [
        "Upward Momentum in Negotiations: Active proposals at $79.93 per sqft show a significant premium over 2025 executed rents ($69.11), indicating strengthening market confidence and potential rent growth this year in [Market], possibly fueled by recovering demand or limited supply.",
        "Strategic Timing for Deals: This gap suggests tenants could lock in lower rates by executing soon, while landlords benefit from rising proposals; investors should monitor if this translates to higher effective rents amid economic recovery.",
      ],
      suggestedFollowUps: [
        "How are rents trending?",
        "What is the average Tenant Improvement (TI) allowance?",
        "How are concessions trending year over year?",
      ],
    },
  },
  {
    prompt: "What is the average Tenant Improvement (TI) allowance?",
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
        "What's the average rent for small and large tenants?",
        "How are rents trending this year?",
        "How are concessions trending year over year?",
      ],
    },
  },
  {
    prompt: "What's the average rent for small and large tenants?",
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
        "How are rents trending?",
        "What is the average Tenant Improvement (TI) allowance?",
        "How are concessions trending year over year?",
      ],
    },
  },
  {
    prompt: "How are concessions trending year over year?",
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
        "What is the average Tenant Improvement (TI) allowance?",
        "How are rents trending this year?",
        "What is Avg. Gross NER, Avg. TI Avg. Free Rent and Count of active proposals?",
      ],
    },
  },
  {
    prompt:
      "What is Avg. Gross NER, Avg. TI Avg. Free Rent and Count of active proposals?",
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
        "How are concessions trending year over year?",
        "How are rents trending?",
        "What's the average rent for small and large tenants?",
      ],
    },
  },
];

export const vtsAiPromptsWithoutContext: VtsAiPrompt[] = [
  {
    prompt: "How are rents trending across markets year over year?",
    payload: {
      summary: [
        "Across markets, executed leases show average starting gross rent per sqft at $72.92 for 2024 and $69.11 for 2025 in New York, Dallas-Fort Worth, and Houston.",
        "This reflects a consistent 5.2% year-over-year decrease, indicating widespread softening in rental trends.",
      ],
      keyInsights: [
        "Consistent National Softening: The uniform 5.2% YoY decline in average starting gross rents (from $72.92 in 2024 to $69.11 in 2025) across New York, Dallas-Fort Worth, and Houston suggests broader economic pressures like elevated interest rates or hybrid work impacts affecting multiple markets similarly.",
        "Cross-Market Opportunities: This synchronized trend creates tenant advantages for negotiations in softening environments, while investors might find diversified entry points, though monitoring local supply-demand variances (e.g., energy-driven stability in Houston) is crucial for recovery predictions.",
      ],
      suggestedFollowUps: [
        "How are rents trending across markets this year?",
        "How are concessions trending across markets year over year?",
        "What's the average rent right now across markets for small tenants? Large tenants?",
      ],
    },
  },
  {
    prompt: "How are rents trending across markets this year?",
    payload: {
      keyInsights: [
        "In New York, Dallas-Fort Worth, and Houston this year, executed leases average $69.11 per sqft per year, while active proposals are at $79.93 per sqft.",
        "This indicates a positive upward trend in rental rates from executed deals to ongoing negotiations across these markets.",
      ],
      suggestedFollowUps: [
        "How are rents trending across markets year over year?",
        "How are concessions trending across markets year over year?",
        "What's the average rent right now across markets for small tenants? Large tenants?",
      ],
      summary: [
        "In New York, Dallas-Fort Worth, and Houston this year, executed leases average $69.11 per sqft per year, while active proposals are at $79.93 per sqft.",
        "This indicates a positive upward trend in rental rates from executed deals to ongoing negotiations across these markets.",
      ],
    },
  },
  {
    prompt: "How are consessions trending across markets year over year?",
    payload: {
      summary: [
        "Across markets, 2024 executed concessions averaged TI at $108.76 and free rent at 7.16 months in New York, $101.23 TI and 7.05 months in Dallas-Fort Worth/Houston; 2025 figures shifted to $101.23 TI/7.05 months in New York, $108.76 TI/7.16 months in Dallas-Fort Worth, and $69.11 TI/7.16 months in Houston.",
        "This indicates varied year-over-year trends in concessions, with overall declines in some markets amid differing regional dynamics.",
      ],
      keyInsights: [
        "Divergent Market Trends: Concessions show mixed YoY changes—decreasing in New York (TI down 6.9%, free rent down 1.6%) and Houston (TI down 31.7%, free rent up 1.6%), but increasing in Dallas-Fort Worth (TI up 7.4%, free rent up 1.6%)—reflecting varying local demand, with Houston's sharp TI drop signaling potential oversupply or economic shifts.",
        "Strategic Implications for Stakeholders: These inconsistencies offer tenants negotiation leverage in softening markets like Houston, while landlords in growing areas like Dallas-Fort Worth may reduce incentives; investors should target markets with declining concessions for higher effective yields.",
      ],
      suggestedFollowUps: [
        "How are rents trending across markets year over year?",
        "How are rents trending across markets this year?",
        "What's the average rent right now across markets for small tenants? Large tenants?",
      ],
    },
  },
  {
    prompt:
      "What's the average rent right now across markets for small tenants? Large tenants?",
    payload: {
      summary: [
        "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec ullamcorper nulla non metus auctor fringilla.",
      ],
      keyInsights: [
        "Maecenas faucibus mollis interdum. Maecenas faucibus mollis interdum. Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      ],
      suggestedFollowUps: [
        "How are rents trending across markets year over year?",
        "How are rents trending across markets this year?",
        "How are concessions trending across markets year over year?",
      ],
    },
  },
];
