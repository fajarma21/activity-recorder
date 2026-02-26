import { Button } from 'antd';
import { FaBed } from 'react-icons/fa6';

import Card from '@/components/Card';

import css from './View.module.scss';
import type { EmptyToDoProps } from './View.types';
import { useState, type MouseEvent } from 'react';
import ModalData from '@/App/components/ModalData';

const EmptyToDo = ({ onClickAdd }: EmptyToDoProps) => {
  const [displayImport, setDisplayImport] = useState(false);

  const toggleModal = (e?: MouseEvent<HTMLAnchorElement>) => {
    if (e) e.preventDefault();
    setDisplayImport((prev) => !prev);
  };

  return (
    <>
      <Card>
        <div className={css.container}>
          <FaBed size={36} />
          <p>You have nothing to do.</p>
          <Button color="primary" variant="outlined" onClick={onClickAdd}>
            Let's do something
          </Button>
          <p>
            or{' '}
            <a href="#!" onClick={toggleModal}>
              import data
            </a>
          </p>
        </div>
      </Card>
      <ModalData onlyImport display={displayImport} onClose={toggleModal} />
    </>
  );
};

export default EmptyToDo;
