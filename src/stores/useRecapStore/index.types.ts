import type { ActivityRecap, ActivityRecord } from '@/types';

export interface RecapStore {
  recaps: ActivityRecap[];
  addRecap: (recap: ActivityRecord) => void;
}
