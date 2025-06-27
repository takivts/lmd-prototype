export const markets = [
  {
    name: "Seattle",
    top: "20px",
    left: "50px",
    direction: "right"
  },
  {
    name: "San Francisco",
    top: "165px",
    left: "20px",
    direction: "right"
  },
  {
    name: "Los Angeles",
    top: "210px",
    left: "25px",
    direction: "right"
  },
  {
    name: "Denver",
    top: "170px",
    left: "215px",
    direction: "right"
  },
  {
    name: "Dallas",
    top: "290px",
    left: "310px",
    direction: "right"
  },
  {
    name: "Austin",
    top: "320px",
    left: "290px",
    direction: "right"
  },
  {
    name: "Houston",
    top: "330px",
    left: "330px",
    direction: "right"
  },
  {
    name: "Chicago",
    top: "120px",
    left: "400px",
    direction: "left"
  },
  {
    name: "New York",
    top: "125px",
    left: "570px",
    direction: "left"
  },
  {
    name: "Maryland",
    top: "155px",
    left: "555px",
    direction: "left"
  },
  {
    name: "Washington",
    top: "160px",
    left: "525px",
    direction: "left"
  },
  {
    name: "Northern  Virginia",
    top: "190px",
    left: "555px",
    direction: "left"
  },
  {
    name: "Atlanta",
    top: "265px",
    left: "475px",
    direction: "left"
  },
  {
    name: "Boston",
    top: "95px",
    left: "595px",
    direction: "left"
  },
];

export const marketTooltips = [
  {
    header: "Large Block Demand Softens",
    body: "Total requirements for spaces 50k+ sf declined sharply — reposition larger vacancies to avoid prolonged downtime.",
  },
  {
    header: "Small Tenant Activity Driving Market",
    body: "Spaces under 10k sf account for 47% of active demand — consider demising strategies for underutilized space.",
  },
  {
    header: "Flight to Quality Accelerates",
    body: "Class A assets represent 65% of total touring activity — prioritize upgrades and premium marketing for top-tier spaces.",
  },
  {
    header: "Tech Sector Pullback Continues",
    body: "Tech-driven demand fell 18% quarter-over-quarter — reassess exposure to tech-heavy leasing pipelines.",
  },
  {
    header: "Healthcare Expanding in Submarkets",
    body: "Healthcare tenants make up 12% of active demand in suburban areas — target outreach for medical space conversions.",
  },
  {
    header: "Velocity Rebounds After Two Quarters of Decline",
    body: "Total new requirements and square footage increased 9% from last quarter — signaling early signs of market recovery.",
  },
  {
    header: "Downtown Core Facing Elevated Vacancy Risk",
    body: "Touring and active demand for downtown locations lags suburban markets by 22% — evaluate competitive concessions.",
  },
  {
    header: "Renewal Activity Remains Elevated",
    body: "Tenants are opting to stay put — renewals account for 38% of total deal activity — adjust pipeline expectations.",
  },
  {
    header: "Slowdown in Large New Requirements",
    body: "New 100k+ sf requirements decreased 27% year-over-year — fewer mega deals on the horizon.",
  },
  {
    header: "Demand for Flexible Space Rising",
    body: "Flexible and spec suites now comprise 19% of inquiries — increase plug-and-play offerings to meet tenant needs.",
  },
  {
    header: "Mid-Sized Tenants Driving Leasing Volume",
    body: "Requirements between 10k–50k sf represent the fastest-growing segment — optimize floor plates accordingly.",
  },
  {
    header: "Market Volatility Impacting Forecasts",
    body: "Sharp quarter-over-quarter swings in demand — update leasing strategies to account for shifting sentiment.",
  },
];

export interface Market {
  name: string;
  top: string;
  left: string;
}

export const exploreMarkets = {
  "Market Fundamentals": [
    "How does vacancy in this market compare to the average?",
    "Is rental growth positive or declining over the past 4 quarters?",
    "What is the historical trend for availability rates in this area?",
    "Are asking rents stabilizing, increasing, or under pressure?"
  ],
  "Tenant Demand": [
    "How much new demand entered X market in the last 12 months?",
    "What percentage of active demand comes from tech or finance tenants?",
    "Are larger space requirements (50k+ sf) trending up or down?",
    "Which industries are driving the most demand in this submarket?",
    "Has total square footage of tenant requirements increased or declined recently?"
  ],
  "Deal Economics": [
    "What are the current active proposals deal economic terms for this market?",
    "Are recent deals closing above or below asking rents?",
    "What is the average net effective rent (NER) compared to market benchmarks?",
    "How are concession packages trending in this submarket?",
    "Is there evidence of landlords discounting rents to fill space?"
  ],
  "Competitive Landscape": [
    "How much new supply is expected to deliver in the next 12 months?",
    "Are competitive buildings offering aggressive incentives?",
    "Is there significant shadow space or sublease inventory in this area?",
    "What is the leasing velocity compared to other nearby submarkets?"
  ],
  "Risk Indicators": [
    "Are vacancy rates rising faster than historical norms?",
    "Is absorption negative, signaling weakening market conditions?",
    "Has large-block tenant demand dried up recently?",
    "Is there an oversupply risk based on upcoming deliveries?"
  ],
  "Investment Signals": [
    "Is this submarket showing signs of recovery based on leasing activity?",
    "Are cap rates compressing or widening compared to other core markets?",
    "Does improving tenant demand suggest potential for rent growth?",
    "Is declining large-block demand creating repositioning opportunities?"
  ]
};
