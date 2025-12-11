import type { Dayjs } from 'dayjs';

export interface ActivityOption {
  value: string;
  label: string;
}

export interface StatusOption {
  value: number;
  label: string;
}

export interface StatusData {
  statusId: number;
  statusText: string;
}

export interface ActivityData {
  activityId: number;
  activityText: string;
}

export interface ActivityRecord extends ActivityData, StatusData {
  id: number;
  date: number;
}

export interface ActivityRecap extends ActivityData, StatusData {
  id: number;
  count: number;
  first: number;
  latest: number;
  next: number;
}

export interface FormFields {
  activity: ActivityOption[];
  status: StatusOption;
  date: Dayjs;
}

export interface SummaryParams {
  groupBy: '' | 'activityText' | 'day' | 'month' | 'year';
  sortBy: 'activityText' | 'date';
  order: 'asc' | 'desc';
}

interface GenericOption {
  label: string;
}
interface GroupByOption extends GenericOption {
  value: SummaryParams['groupBy'];
}
interface SortByOption extends GenericOption {
  value: SummaryParams['sortBy'];
}
interface OrderOption extends GenericOption {
  value: SummaryParams['order'];
}

export interface SummaryFields {
  groupBy: GroupByOption;
  sortBy: SortByOption;
  order: OrderOption;
}
