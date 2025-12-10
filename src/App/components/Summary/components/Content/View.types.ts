import type { ActivityRecord, SummaryFields } from '@/types';

export interface ContentProps {
  list: ActivityRecord[];
  urlParams: SummaryFields;
}

export interface SummaryGroup {
  id: number;
  text: string;
  list: ActivityRecord[];
}
