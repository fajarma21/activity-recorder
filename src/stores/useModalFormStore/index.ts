import { create } from 'zustand';

import {
  INITIAL_DATA,
  INITIAL_DISABLED,
  INITIAL_FORM,
} from './index.constants';
import type { ModalFormStore } from './index.types';

const useModalFormStore = create<ModalFormStore>((set) => ({
  display: false,
  initialData: INITIAL_DATA,
  disabled: INITIAL_DISABLED,
  id: 0,
  openForm: (args) => {
    if (args) {
      const { initialValues, disabledValues, id, onCloseCallback } = args;
      set((state) => ({
        display: true,
        initialData: initialValues
          ? { ...state.initialData, ...initialValues }
          : state.initialData,
        disabled: disabledValues
          ? { ...state.disabled, ...disabledValues }
          : state.disabled,
        id: id || state.id,
        onCloseCallback,
      }));
    } else {
      set(() => ({ display: true }));
    }
  },
  closeForm: () => {
    set(() => INITIAL_FORM);
  },
}));

export default useModalFormStore;
