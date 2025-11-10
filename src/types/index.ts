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
