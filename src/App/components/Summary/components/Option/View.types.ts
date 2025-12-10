import type { SummaryFields } from '@/types';

export interface OptionProps {
  urlParams: SummaryFields;
  onChangeParams: (param: Record<string, string>) => void;
}
