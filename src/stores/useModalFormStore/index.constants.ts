import { STATUS_DONE } from '@/constants';

export const INITIAL_DATA = {
  activity: undefined,
  date: undefined,
  status: STATUS_DONE,
};

export const INITIAL_DISABLED = {
  activity: false,
  date: false,
  status: false,
};

export const INITIAL_FORM = {
  display: false,
  id: 0,
  initialData: INITIAL_DATA,
  disabled: INITIAL_DISABLED,
  onCloseCallback: undefined,
};
