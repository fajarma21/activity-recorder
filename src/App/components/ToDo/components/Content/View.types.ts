import type { ActivityRecap, ActivityRecord } from '@/types';

export interface ContentProps {
  todoList: ActivityRecord[];
  estimationList: ActivityRecap[];
  onClickOpenForm: () => void;
}
