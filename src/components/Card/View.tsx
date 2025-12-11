import { Children } from 'react';

import Button from '../Button';
import css from './View.module.scss';
import type { CardProps } from './View.types';

const Card = ({
  actionIcon,
  children,
  contentClassName = '',
  title,
  onClickAction,
}: CardProps) => {
  const [content, footer] = Children.toArray(children);

  return (
    <div className={css.card}>
      {title && (
        <div className={css.header}>
          <h2>{title}</h2>
          {actionIcon && (
            <Button className={css.actionIcon} onClick={onClickAction}>
              {actionIcon}
            </Button>
          )}
        </div>
      )}
      <div className={`${css.container} ${contentClassName}`}>{content}</div>
      {footer}
    </div>
  );
};

export default Card;
