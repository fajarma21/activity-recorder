import type { ActivityRecap } from '@/types';

export const getEstDate = (date: number, data: ActivityRecap) => {
  const count = data.count + 1;
  const first = date < data.first ? date : data.first;
  const latest = date > data.latest ? date : data.latest;
  const next = (latest - first) / (count - 1) + latest;

  return { count, first, latest, next };
};
