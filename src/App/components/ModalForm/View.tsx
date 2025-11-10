import { Dialog } from 'fajarma-react-lib';

import FormRecord from './components/FormRecord';
import css from './View.module.scss';
import type { ModalFormProps } from './View.types';

const ModalForm = ({ display, onClose }: ModalFormProps) => {
  return (
    <Dialog display={display} className={css.dialogModifier} onClose={onClose}>
      <FormRecord onClose={onClose} />
    </Dialog>
  );
};

export default ModalForm;
