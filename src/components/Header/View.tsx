import dayjs from 'dayjs';

import Clock from '../Clock';
import { getGreetingData } from './View.helpers';
import css from './View.module.scss';
import useTime from '@/hooks/useTime';

const Header = () => {
  const time = useTime();
  const greetingText = getGreetingData(Number(time.hour));

  return (
    <div className={css.wrapper} data-time={greetingText}>
      <div className={css.container}>
        <div className={css.spaceCircle} />
        <div className={css.textContainer}>
          <p className={css.date}>{dayjs().format('dddd, DD MMMM YYYY')}</p>
          <p className={css.greeting}>
            <b>Good {greetingText}!</b>
          </p>
        </div>
        <Clock className={css.clock} {...time} />
      </div>
      <div className={css.background}>
        <div />
      </div>
    </div>
  );
};

export default Header;
