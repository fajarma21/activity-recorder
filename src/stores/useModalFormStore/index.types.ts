import type { FormFields } from '@/types';

type DisabledData = Record<keyof FormFields, boolean>;

interface OpenFormParams {
  initialValues?: Partial<FormFields>;
  disabledValues?: Partial<DisabledData>;
  id?: number;
  onCloseCallback?: () => void;
}

export interface ModalFormStore {
  display: boolean;
  disabled: DisabledData;
  initialData: Partial<FormFields>;
  id?: number;
  onCloseCallback?: () => void;
  openForm: (args?: OpenFormParams) => void;
  closeForm: () => void;
}
