import { FaKiwiBird } from 'react-icons/fa6';
import css from './View.module.scss';

const NoData = () => {
  return (
    <div className={css.container}>
      <FaKiwiBird size={36} className={css.kiwiIcon} />
      <p>
        Create an activity and then mark it as done.
        <br />
        That's how you fill this page.
      </p>
    </div>
  );
};

export default NoData;
