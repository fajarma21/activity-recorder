import { Checkbox } from 'antd';
import css from './View.module.scss';
import type { CheckListProps } from './View.types';

const CheckList = ({ text, subText, onChange }: CheckListProps) => {
  return (
    <div className={css.container}>
      <Checkbox className={css.checkboxModifier} onChange={onChange}>
        <div>
          <p className={css.text}>{text}</p>
          {subText && <p className={css.sub}>{subText}</p>}
        </div>
      </Checkbox>
    </div>
  );
};

export default CheckList;
