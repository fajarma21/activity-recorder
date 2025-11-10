import type { ReactNode } from 'react';

export interface TickerProps {
  children?: ReactNode;
  isActive: boolean;
  title: string;
  onClickEdit?: () => void;
  onClose: () => void;
}
