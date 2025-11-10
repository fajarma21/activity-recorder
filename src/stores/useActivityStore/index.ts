import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { ActivityStore } from './index.types';

const useActivityStore = create<ActivityStore>()(
  persist(
    (set) => ({
      activities: [],
      addActivity: (activity) =>
        set((state) => {
          if (
            !state.activities.some(
              (item) => item.activityId === activity.activityId
            )
          ) {
            return {
              activities: [...state.activities, activity],
            };
          }
          return {
            activities: state.activities,
          };
        }),
    }),
    {
      name: 'acrec-activities',
    }
  )
);

export default useActivityStore;
