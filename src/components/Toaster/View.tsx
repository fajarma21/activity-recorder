import { useCallback, useEffect, useRef, useState } from 'react';
import type { CSSProperties, MouseEvent } from 'react';
import { FaRegPenToSquare } from 'react-icons/fa6';

import css from './View.module.scss';
import { TIMER_INTERVAL } from './View.constants';
import type { ToasterProps } from './View.types';

const Toaster = ({
  children,
  isActive,
  title,
  onClickEdit,
  onClose,
}: ToasterProps) => {
  const [display, setDisplay] = useState(true);
  const [stopCountdown, setStopCountdown] = useState(false);

  const toasterRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    if (!display) {
      if (!toasterRef.current) return;

      Promise.all(
        toasterRef.current
          .getAnimations()
          .map((animation) => animation.finished)
      ).then(() => {
        onClose();
      });
    }
  }, [display, onClose]);

  const handleClose = useCallback(() => {
    if (!isActive) return;

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDisplay(false);
  }, [isActive]);

  useEffect(() => {
    if (!isActive) return;

    timeoutRef.current = setTimeout(() => {
      handleClose();
    }, TIMER_INTERVAL);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isActive, handleClose]);

  const handleClickEdit = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    setStopCountdown(true);

    if (onClickEdit) onClickEdit();
  };

  return (
    <div
      className={css.container}
      data-active={isActive || undefined}
      onClick={handleClose}
    >
      <div ref={toasterRef} className={css.inner} data-display={display}>
        <div
          className={css.lineTimer}
          data-play={!stopCountdown && isActive}
          style={
            {
              '--timer': `${TIMER_INTERVAL}ms`,
            } as CSSProperties
          }
        />
        <div>
          <h4 className={css.title}>{title}</h4>
          <p className={css.desc}>{children}</p>
        </div>
        {onClickEdit && (
          <button
            type="button"
            className={css.editButton}
            aria-label="Edit"
            onClick={handleClickEdit}
          >
            <FaRegPenToSquare size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Toaster;
