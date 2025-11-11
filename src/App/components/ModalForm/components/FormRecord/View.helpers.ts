import dayjs from 'dayjs';

import { STATUS_VALUE_TODO } from '@/constants';
import type { ActivityData, ActivityOption, FormFields } from '@/types';

const capitalizeFirstLetter = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

export const getSingleActivity = (
  activityList: ActivityData[],
  newValue?: ActivityOption[]
) => {
  if (newValue && newValue.length) {
    const newData = newValue[newValue.length - 1];

    if (!newData.label) {
      newData.value = capitalizeFirstLetter(newData.value);
      const exist = activityList.find(
        (item) =>
          item.activityText.toLowerCase() === newData.value.trim().toLowerCase()
      );

      if (exist) {
        return [
          {
            ...newData,
            value: String(exist.activityId),
            label: exist.activityText,
          },
        ];
      }
    }

    return [newData];
  }
  return [];
};

export const getSubmitValue = (
  values: FormFields,
  activities: ActivityData[]
) => {
  let submitedActivity = values.activity[0];
  if (!submitedActivity.label) {
    submitedActivity = {
      ...submitedActivity,
      label: submitedActivity.value,
      value: String(activities.length + 1),
    };
  }

  const normalizedActivity = {
    activityId: Number(submitedActivity.value),
    activityText: submitedActivity.label.trim(),
  };

  const isTodo = values.status.value === STATUS_VALUE_TODO;

  const newRecord = {
    ...normalizedActivity,
    id: Date.now(),
    date: !values.date && isTodo ? 0 : dayjs(values.date).valueOf(),
    statusId: values.status.value,
    statusText: values.status.label,
  };

  return {
    normalizedActivity,
    newRecord,
    newRecap: isTodo ? null : newRecord,
  };
};
