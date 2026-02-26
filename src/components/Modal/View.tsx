import { Dialog } from 'fajarma-react-lib';

import css from './View.module.scss';
import type { ModalProps } from './View.types';

const Modal = ({ children, className, display, onClose }: ModalProps) => {
  return (
    <Dialog
      display={display}
      className={className || css.dialogModifier}
      onClose={onClose}
    >
      {children}
    </Dialog>
  );
};

export default Modal;
