import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { RecordStore } from './index.types';

const useRecordStore = create<RecordStore>()(
  persist(
    (set) => ({
      records: [],
      addRecord: (record) =>
        set((state) => ({
          records: [record, ...state.records],
        })),
      updateRecord: (id, record) =>
        set((state) => ({
          records: state.records.map((item) => {
            if (item.id === id)
              return {
                ...record,
                id: item.id,
              };
            return item;
          }),
        })),
      updateStatus: (id, date, { statusId, statusText }) =>
        set((state) => ({
          records: state.records.map((item) => {
            if (item.id === id) {
              return {
                ...item,
                date,
                statusId,
                statusText,
              };
            }
            return item;
          }),
        })),
    }),
    {
      name: 'acrec-records',
    }
  )
);

export default useRecordStore;
