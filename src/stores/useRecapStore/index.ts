import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { INIT_RECAP } from './index.constants';
import { getEstDate } from './index.helpers';
import type { RecapStore } from './index.types';

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
              ...INIT_RECAP,
              first: newRecord.date,
              latest: newRecord.date,
            },
            ...prevRecaps,
          ];

          if (
            prevRecaps.some((item) => item.activityId === newRecord.activityId)
          ) {
            newRecaps = prevRecaps.map((item) => {
              if (item.activityId === newRecord.activityId) {
                return {
                  ...item,
                  ...getEstDate(newRecord.date, item),
                  id: newRecord.id,
                };
              }
              return item;
            });
          }

          return {
            recaps: newRecaps,
          };
        }),
      updateRecap: (id, newRecord, lastRecap) =>
        set((state) => ({
          recaps: state.recaps.map((item) => {
            if (item.id === id) {
              if (lastRecap) {
                return {
                  ...item,
                  ...getEstDate(newRecord.date, lastRecap),
                };
              }
              return {
                ...item,
                first: newRecord.date,
                latest: newRecord.date,
              };
            }
            return item;
          }),
        })),
    }),
    {
      name: 'acrec-recaps',
    }
  )
);

export default useRecapStore;
