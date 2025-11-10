import type { CheckboxChangeEvent } from 'antd';

export interface CheckListProps {
  text: string;
  subText?: string;
  onChange: (e: CheckboxChangeEvent) => void;
}
