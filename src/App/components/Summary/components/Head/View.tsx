import { useState } from 'react';
import { useNavigate } from 'react-router';
import { FaArrowLeft, FaGear } from 'react-icons/fa6';

import Button from '@/components/Button';
import Modal from '@/components/Modal';

import DataManager from './components/DataManager';
import css from './View.module.scss';

const Head = () => {
  const navigate = useNavigate();

  const [displaySetting, setDisplaySetting] = useState(false);

  const handleToggleModal = () => {
    setDisplaySetting((prev) => !prev);
  };

  return (
    <>
      <div className={css.head}>
        <Button
          className={css.button}
          data-type="left"
          onClick={() => navigate('/')}
        >
          <FaArrowLeft size={20} />
        </Button>
        <h1>Summary</h1>
        <Button
          className={css.button}
          data-type="right"
          onClick={handleToggleModal}
        >
          <FaGear size={20} />
        </Button>
      </div>

      <Modal
        display={displaySetting}
        className={css.modalData}
        onClose={handleToggleModal}
      >
        <DataManager onClose={handleToggleModal} />
      </Modal>
    </>
  );
};

export default Head;
