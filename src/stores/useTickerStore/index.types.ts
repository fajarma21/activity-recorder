import type { ActivityRecord } from '@/types';

export interface TickerStore {
  tickerList: ActivityRecord[];
  showTicker: (value: ActivityRecord) => void;
  hideTicker: () => void;
}
