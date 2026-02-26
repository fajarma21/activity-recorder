import Modal from '@/components/Modal';

import css from './View.module.scss';
import DataManager from './components/DataManager';
import type { ModalDataProps } from './View.types';

const ModalData = ({ display, onlyImport, onClose }: ModalDataProps) => {
  return (
    <Modal display={display} className={css.modalData} onClose={onClose}>
      <DataManager onlyImport={onlyImport} onClose={onClose} />
    </Modal>
  );
};

export default ModalData;
