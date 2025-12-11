export const STATUS_VALUE_DONE = 0;
export const STATUS_VALUE_TODO = 1;
export const STATUS_VALUE_ESTIMATED = 2;

export const STATUS_DONE = {
  value: STATUS_VALUE_DONE,
  label: 'Done',
};
export const STATUS_TODO = {
  value: STATUS_VALUE_TODO,
  label: 'To do',
};
export const STATUS_EST = {
  value: STATUS_VALUE_ESTIMATED,
  label: '',
};

export const STATUS_LIST = [STATUS_DONE, STATUS_TODO];

export const FULL_DATE_FORMAT = 'dddd, DD MMM YYYY HH:mm';

export const MOBILE_MAX_WIDTH = 480;

export const PARAM_GROUP_NONE = {
  label: 'None',
  value: '',
};

export const PARAM_SORT_FINISHED = {
  label: 'Finished',
  value: 'date',
};

export const PARAM_ORDER_DESC = {
  label: 'Descending',
  value: 'desc',
};

export const DEFAULT_SUMMARY_PARAMS = {
  groupBy: PARAM_GROUP_NONE.value,
  sortBy: PARAM_SORT_FINISHED.value,
  order: PARAM_ORDER_DESC.value,
};

export const SUMMARY_GROUP_LIST = [
  PARAM_GROUP_NONE,
  {
    label: 'Activity',
    value: 'activityText',
  },
  {
    label: 'Day',
    value: 'day',
  },
  {
    label: 'Month',
    value: 'month',
  },
  {
    label: 'Year',
    value: 'year',
  },
];

export const SUMMARY_SORT_LIST = [
  {
    label: 'Activity',
    value: 'activityText',
  },
  PARAM_SORT_FINISHED,
];

export const SUMMARY_ORDER_LIST = [
  {
    label: 'Ascending',
    value: 'asc',
  },
  PARAM_ORDER_DESC,
];
