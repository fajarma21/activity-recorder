import { useState } from 'react';
import { useNavigate } from 'react-router';
import { FaArrowLeft, FaGear } from 'react-icons/fa6';

import ModalData from '@/App/components/ModalData';
import Button from '@/components/Button';

import css from './View.module.scss';
import Card from '@/components/Card';

const Head = () => {
  const navigate = useNavigate();

  const [displaySetting, setDisplaySetting] = useState(false);

  const handleToggleModal = () => {
    setDisplaySetting((prev) => !prev);
  };

  return (
    <>
      <Card className={css.container}>
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
      </Card>

      <ModalData display={displaySetting} onClose={handleToggleModal} />
    </>
  );
};

export default Head;
