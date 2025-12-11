import type { ActivityRecord, SummaryParams } from '@/types';

const sortToDo = (
  list: ActivityRecord[],
  sortBy: SummaryParams['sortBy'],
  order: SummaryParams['order']
) => {
  if (list.length)
    return [...list].sort((a, b) => {
      let first = a[sortBy];
      let second = b[sortBy];

      if (order === 'desc') {
        [first, second] = [second, first];
      }

      if (typeof first === 'number' && typeof second === 'number')
        return first - second;
      if (typeof first === 'string' && typeof second === 'string')
        return first.localeCompare(second);
      return 0;
    });

  return [];
};
export default sortToDo;
