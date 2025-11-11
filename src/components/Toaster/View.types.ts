import type { ReactNode } from 'react';

export interface ToasterProps {
  children?: ReactNode;
  isActive: boolean;
  title: string;
  onClickEdit?: () => void;
  onClose: () => void;
}
