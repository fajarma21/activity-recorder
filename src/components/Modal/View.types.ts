import type { ReactNode } from 'react';

export interface ModalProps {
  children: ReactNode;
  className?: string;
  display: boolean;
  onClose: () => void;
}
