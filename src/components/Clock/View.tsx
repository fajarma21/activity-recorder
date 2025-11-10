import { useCallback, useEffect, useRef, useState } from 'react';

import { normalizeDigit } from './View.helpers';
import css from './View.module.scss';
import type { ClockProps } from './View.types';

const Clock = ({ className }: ClockProps) => {
  const [time, setTime] = useState(new Date());
  const frameRef = useRef<number>(null);

  const updateClock = useCallback(() => {
    setTime(new Date());
    frameRef.current = requestAnimationFrame(updateClock);
  }, []);

  useEffect(() => {
    frameRef.current = requestAnimationFrame(updateClock);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [updateClock]);

  return (
    <div className={className}>
      {normalizeDigit(time.getHours())}
      <span className={css.tick}>:</span>
      {normalizeDigit(time.getMinutes())}
    </div>
  );
};

export default Clock;
