import type { ButtonHTMLAttributes } from 'react';

import css from './View.module.scss';

const Button = ({
  children,
  className,
  type = 'button',
  ...restProps
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button type={type} className={`${css.button} ${className}`} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
