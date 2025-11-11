import { Button } from 'antd';
import { FaBed } from 'react-icons/fa6';

import Card from '@/components/Card';

import css from './View.module.scss';
import type { EmptyToDoProps } from './View.types';

const EmptyToDo = ({ onClickAdd }: EmptyToDoProps) => {
  return (
    <Card>
      <div className={css.container}>
        <FaBed size={36} />
        <p>You have nothing to do.</p>
        <Button color="primary" variant="outlined" onClick={onClickAdd}>
          Let's do something
        </Button>
      </div>
    </Card>
  );
};

export default EmptyToDo;
