import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { RecapStore } from './index.types';
import { STATUS_EST } from '@/constants';

const useRecapStore = create<RecapStore>()(
  persist(
    (set) => ({
      recaps: [],
      addRecap: (newRecord) =>
        set((state) => {
          const prevRecaps = state.recaps;

          let newRecaps = [
            {
              ...newRecord,
              count: 1,
              first: newRecord.date,
              latest: newRecord.date,
              next: 0,
              statusId: STATUS_EST.value,
              statusText: STATUS_EST.label,
            },
            ...prevRecaps,
          ];

          if (
            prevRecaps.some((item) => item.activityId === newRecord.activityId)
          ) {
            newRecaps = prevRecaps.map((item2) => {
              if (item2.activityId === newRecord.activityId) {
                const newCount = item2.count + 1;
                const newFirst =
                  newRecord.date < item2.first ? newRecord.date : item2.first;
                const newLatest =
                  newRecord.date > item2.latest ? newRecord.date : item2.latest;
                return {
                  ...item2,
                  id: newRecord.id,
                  count: newCount,
                  first: newFirst,
                  latest: newLatest,
                  next: newLatest + (newLatest - newFirst) / newCount,
                };
              }
              return item2;
            });
          }

          return {
            recaps: newRecaps,
          };
        }),
    }),
    {
      name: 'acrec-recaps',
    }
  )
);

export default useRecapStore;
