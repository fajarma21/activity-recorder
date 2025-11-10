import dayjs, { type Dayjs } from 'dayjs';

import { FULL_DATE_FORMAT } from '@/constants';

const getFullDate = (date?: number | Dayjs) => {
  return dayjs(date).format(FULL_DATE_FORMAT);
};

export default getFullDate;
