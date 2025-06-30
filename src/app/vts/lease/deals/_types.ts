export interface Deal {
  tenant: string;
  requirementSize: string;
  totalSize: string;
  asset: string;
  stage: string;
  ner: string;
  contact: string;
  comment: string;
  lastUpdated: string;
}

export interface DealsTableProps {
  data: Deal[];
}

export interface PipelineData {
  label: string;
  value: number;
}

export interface DealPipelineChartProps {
  data: PipelineData[];
  width?: number;
  height?: number;
  barWidth?: number;
}
