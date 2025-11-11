import { create } from 'zustand';
import type { ToasterStore } from './index.types';

const useToasterStore = create<ToasterStore>((set) => ({
  toasterList: [],
  showToaster: (value) =>
    set((state) => ({
      toasterList: [...state.toasterList, value],
    })),
  hideToaster: () =>
    set((state) => ({
      toasterList: state.toasterList.slice(1),
    })),
}));

export default useToasterStore;
