import type { ActivityData } from '@/types';

export interface ActivityStore {
  activities: ActivityData[];
  addActivity: (activity: ActivityData) => void;
}
