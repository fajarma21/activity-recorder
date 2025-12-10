import type { ReactNode } from 'react';

export interface CardProps {
  actionIcon?: ReactNode;
  children: ReactNode;
  contentClassName?: string;
  title?: string;
  onClickAction?: () => void;
}
