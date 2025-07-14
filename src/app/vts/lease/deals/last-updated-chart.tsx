// "use client";

// import { Bar } from "@visx/shape";
// import { Group } from "@visx/group";
// import { ParentSize } from "@visx/responsive";

// export interface PipelineData {
//   label: string;
//   value: number;
// }

// export interface DealPipelineChartProps {
//   data: PipelineData[];
//   width?: number;
//   height?: number;
//   barWidth?: number;
// }

// function truncateText(
//   text: string,
//   maxWidth: number,
//   fontSize: number = 14,
// ): string {
//   const avgCharWidth = fontSize * 0.6;
//   const maxChars = Math.floor(maxWidth / avgCharWidth);

//   if (text.length <= maxChars) {
//     return text;
//   }
//   return text.substring(0, maxChars - 3) + "...";
// }

// function LastUpdatedChartInner({
//   data,
//   width,
//   height = 140,
// }: DealPipelineChartProps & { width: number }) {
//   const maxValue = Math.max(...data.map((d) => d.value));
//   const scale = Math.min(5, (height - 60) / maxValue);

//   const spacing = 8;
//   const totalSpacing = (data.length - 1) * spacing;
//   const availableWidth = width - totalSpacing;
//   const barWidth = Math.max(50, availableWidth / data.length);

//   const labelFontSize = 12;
//   const maxLabelWidth = barWidth - 4;

//   return (
//     <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
//       <Group left={0} top={0}>
//         {data.map((d, i) => {
//           const truncatedLabel = truncateText(
//             d.label,
//             maxLabelWidth,
//             labelFontSize,
//           );

//           return (
//             <Group key={d.label} left={i * (barWidth + spacing)}>
//               <Bar
//                 x={0}
//                 y={height - d.value * scale - 40}
//                 width={barWidth}
//                 height={d.value * scale}
//                 fill="var(--color-vts-purple-700)"
//                 rx={4}
//               />
//               <text
//                 x={barWidth / 2}
//                 y={height - 10}
//                 textAnchor="middle"
//                 fontSize={labelFontSize}
//                 fill="var(--color-vts-purple-700)"
//               >
//                 <title>{d.label}</title>
//                 {truncatedLabel}
//               </text>
//               <text
//                 x={barWidth / 2}
//                 y={height - d.value * scale - 45}
//                 textAnchor="middle"
//                 fontSize={14}
//                 fill="var(--color-vts-purple-700)"
//               >
//                 {d.value}
//               </text>
//             </Group>
//           );
//         })}
//       </Group>
//     </svg>
//   );
// }

// export default function LastUpdatedChart(props: DealPipelineChartProps) {
//   return (
//     <ParentSize>
//       {({ width }) => <LastUpdatedChartInner {...props} width={width} />}
//     </ParentSize>
//   );
// }
