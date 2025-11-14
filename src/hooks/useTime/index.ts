import { useCallback, useEffect, useRef, useState } from 'react';

import { normalizeDigit } from './index.helpers';
import type { Time } from './index.types';

const useTime = () => {
  const [time, setTime] = useState<Time>({
    hour: undefined,
    minute: undefined,
  });
  const frameRef = useRef<number>(null);

  const updateClock = useCallback(() => {
    const h = normalizeDigit(new Date().getHours());
    const m = normalizeDigit(new Date().getMinutes());
    if (h !== time.hour || m !== time.minute) {
      console.log('here');
      setTime({
        hour: h,
        minute: m,
      });
    }
    frameRef.current = requestAnimationFrame(updateClock);
  }, [time.hour, time.minute]);

  useEffect(() => {
    frameRef.current = requestAnimationFrame(updateClock);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [updateClock]);

  return { ...time };
};

export default useTime;
