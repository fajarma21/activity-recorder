import { create } from 'zustand';
import type { TickerStore } from './index.types';

const useTickerStore = create<TickerStore>((set) => ({
  tickerList: [],
  showTicker: (value) =>
    set((state) => ({
      tickerList: [...state.tickerList, value],
    })),
  hideTicker: () =>
    set((state) => ({
      tickerList: state.tickerList.slice(1),
    })),
}));

export default useTickerStore;
