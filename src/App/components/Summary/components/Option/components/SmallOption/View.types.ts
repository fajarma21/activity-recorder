import type { SummaryFields } from '@/types';

export interface SmallOptionProps {
  urlParams: SummaryFields;
  onSubmit: (param: Record<string, string>) => void;
}
