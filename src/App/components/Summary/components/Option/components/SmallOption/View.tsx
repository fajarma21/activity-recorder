import { useState } from 'react';
import { FaGear } from 'react-icons/fa6';

import Button from '@/components/Button';
import Modal from '@/components/Modal';

import OptionForm from '../OptionForm';
import css from './View.module.scss';
import type { SmallOptionProps } from './View.types';

const SmallOption = ({ urlParams, onSubmit }: SmallOptionProps) => {
  const [displayForm, setDisplayForm] = useState(false);

  const handleCloseForm = () => {
    setDisplayForm(false);
  };

  const handleSubmit = (value: Record<string, string>) => {
    onSubmit(value);
    handleCloseForm();
  };

  return (
    <>
      <div className={css.container}>
        <span>
          <span className={css.text}>
            Group by: <b>{urlParams.groupBy.label}</b>
          </span>
          <span className={css.noWrap}>
            <span className={css.text}>
              Sort by: <b>{urlParams.sortBy.label}</b>
            </span>
            <span className={css.text}>
              <b>{urlParams.order.label}</b>
            </span>
          </span>
        </span>
        <Button className={css.formBtn} onClick={() => setDisplayForm(true)}>
          <FaGear size={14} />
        </Button>
      </div>

      <Modal display={displayForm} onClose={handleCloseForm}>
        <OptionForm
          urlParams={urlParams}
          onCancel={handleCloseForm}
          onSubmit={handleSubmit}
        />
      </Modal>
    </>
  );
};

export default SmallOption;
