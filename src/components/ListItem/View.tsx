import css from './View.module.scss';
import type { ListItemProps } from './View.types';

const ListItem = ({ text, subText }: ListItemProps) => {
  return (
    <div className={css.container}>
      <p className={css.text}>{text}</p>
      {subText && <p className={css.sub}>{subText}</p>}
    </div>
  );
};

export default ListItem;
