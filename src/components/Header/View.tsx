import dayjs from 'dayjs';

import Clock from '../Clock';
import { getGreetingData } from './View.helpers';
import css from './View.module.scss';

const Header = () => {
  const greetingText = getGreetingData();

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
        <Clock className={css.clock} />
      </div>
      <div className={css.background}>
        <div />
      </div>
    </div>
  );
};

export default Header;
