import type { ActivityRecord, StatusData } from '@/types';

export interface RecordStore {
  records: ActivityRecord[];
  addRecord: (record: ActivityRecord) => void;
  updateRecord: (id: number, record: ActivityRecord) => void;
  updateStatus: (id: number, date: number, status: StatusData) => void;
}
