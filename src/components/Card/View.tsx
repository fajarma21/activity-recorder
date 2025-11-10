import { Children } from 'react';

import css from './View.module.scss';
import type { CardProps } from './View.types';

const Card = ({ children, title }: CardProps) => {
  const [content, footer] = Children.toArray(children);

  return (
    <div className={css.card}>
      {title && (
        <div className={css.header}>
          <h2>{title}</h2>
        </div>
      )}
      <div className={css.container}>{content}</div>
      {footer}
    </div>
  );
};

export default Card;
