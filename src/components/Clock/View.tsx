import css from './View.module.scss';
import type { ClockProps } from './View.types';

const Clock = ({ className, hour, minute }: ClockProps) => {
  return (
    <div className={className}>
      {hour}
      <span className={css.tick}>:</span>
      {minute}
    </div>
  );
};

export default Clock;
