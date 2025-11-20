import type { ActivityRecap, ActivityRecord } from '@/types';

export interface RecapStore {
  recaps: ActivityRecap[];
  addRecap: (value: ActivityRecord) => void;
  updateRecap: (
    id: number,
    newRecord: ActivityRecord,
    lastValue?: ActivityRecap
  ) => void;
}
