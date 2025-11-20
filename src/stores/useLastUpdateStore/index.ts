import { create } from 'zustand';
import type { LastUpdateStore } from './index.types';

const useLastUpdateStore = create<LastUpdateStore>()((set) => ({
  addLastUpdate: ({ recap }) => set(() => ({ lastRecap: recap })),
  removeLastUpdate: () => set(() => ({ lastRecap: undefined })),
}));

export default useLastUpdateStore;
