import type { ReactNode } from 'react';

export interface CardProps {
  actionIcon?: ReactNode;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  title?: string;
  onClickAction?: () => void;
}
