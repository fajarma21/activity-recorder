import type { ActivityRecord, SummaryFields } from '@/types';

export interface ContentProps {
  list: ActivityRecord[];
  urlParams: SummaryFields;
}
