import type { ActivityRecord, SummaryParams } from '@/types';

export interface ListProps extends SummaryParams {
  list: ActivityRecord[];
}

export interface SummaryGroup {
  id: number;
  text: string;
  list: ActivityRecord[];
}
