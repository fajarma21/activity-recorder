import type { ReactNode } from 'react';

export interface ModalProps {
  children: ReactNode;
  display: boolean;
  onClose: () => void;
}
