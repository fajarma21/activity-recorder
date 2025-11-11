import type { ActivityRecord } from '@/types';

export interface ToasterStore {
  toasterList: ActivityRecord[];
  showToaster: (value: ActivityRecord) => void;
  hideToaster: () => void;
}
