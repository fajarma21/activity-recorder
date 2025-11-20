import type { ActivityRecap } from '@/types';

interface AddLastUpdateParam {
  recap?: ActivityRecap;
}

export interface LastUpdateStore {
  lastRecap?: ActivityRecap;
  addLastUpdate: (args: AddLastUpdateParam) => void;
  removeLastUpdate: () => void;
}
