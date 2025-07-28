import { vtsAiPromptsWithContext, vtsAiPromptsWithoutContext, VtsAiPrompt } from "./vts-ai-prompts";
import * as fs from "fs";
import * as path from "path";

function randomizeFollowUps(prompts: VtsAiPrompt[]): VtsAiPrompt[] {
  const allPrompts = prompts.map((p) => p.prompt);
  return prompts.map((prompt) => {
    const otherPrompts = allPrompts.filter((p) => p !== prompt.prompt);
    const shuffled = otherPrompts.sort(() => 0.5 - Math.random());
    const suggestedFollowUps = shuffled.slice(0, 3);
    return {
      ...prompt,
      payload: {
        ...prompt.payload,
        suggestedFollowUps,
      },
    };
  });
}

const newPromptsWithContext = randomizeFollowUps(vtsAiPromptsWithContext);
const newPromptsWithoutContext = randomizeFollowUps(vtsAiPromptsWithoutContext);

function promptsToString(prompts: VtsAiPrompt[]): string {
  return prompts
    .map(
      (p) => `{
    prompt: '${p.prompt}',
    payload: {
      marketMetadata: {
        category: '${p.payload.marketMetadata?.category}',
      },
      summary: [
        '${p.payload.summary?.join("',\n        '")}',
      ],
      keyInsights: [
        '${p.payload.keyInsights?.join("',\n        '")}',
      ],
      suggestedFollowUps: [
        '${p.payload.suggestedFollowUps?.join("',\n        '")}',
      ],
    },
  }`,
    )
    .join(",\n  ");
}

const fileContent = `export type MarketMetadata = {
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
  ${promptsToString(newPromptsWithContext)}
];

export const vtsAiPromptsWithoutContext: VtsAiPrompt[] = [
  ${promptsToString(newPromptsWithoutContext)}
];
`;

const filePath = path.join(__dirname, "vts-ai-prompts.ts");
fs.writeFileSync(filePath, fileContent);

console.log("Successfully updated vts-ai-prompts.ts");
