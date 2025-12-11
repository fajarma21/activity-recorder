import type { ActivityRecord, SummaryParams } from '@/types';
import dayjs from 'dayjs';
import type { SummaryGroup } from './View.types';

export const groupList = (
  list: ActivityRecord[],
  groupBy: Exclude<SummaryParams['groupBy'], ''>
) => {
  return list.reduce((prev: SummaryGroup[], curr) => {
    let text = '';
    if (groupBy !== 'activityText') {
      let format = 'dddd, DD MMMM YYYY'; // day
      if (groupBy === 'month') format = 'MMMM YYYY';
      else if (groupBy === 'year') format = 'YYYY';

      text = dayjs(curr.date).format(format);
    } else {
      text = curr[groupBy];
    }

    const exist = prev.some((item) => item.text === text);

    if (exist) {
      return prev.map((item) => {
        if (item.text === text)
          return {
            ...item,
            list: [...item.list, curr],
          };
        return item;
      });
    } else {
      return [
        ...prev,
        {
          id: curr.date,
          text,
          list: [curr],
        },
      ];
    }
  }, []);
};
