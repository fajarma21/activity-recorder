import type { ActivityRecap, ActivityRecord } from '@/types';

export interface RecapStore {
  recaps: ActivityRecap[];
  addRecap: (value: ActivityRecord) => void;
  replaceRecaps: (values: ActivityRecap[]) => void;
  updateRecap: (
    id: number,
    newRecord: ActivityRecord,
    lastValue?: ActivityRecap,
  ) => void;
}
