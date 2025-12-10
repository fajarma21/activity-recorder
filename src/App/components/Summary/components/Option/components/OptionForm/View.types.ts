import type { SummaryFields } from '@/types';

export interface OptionFormProps {
  urlParams: SummaryFields;
  horizontal?: boolean;
  onCancel?: () => void;
  onSubmit: (param: Record<string, string>) => void;
}
