import { useNavigate } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa6';

import Button from '@/components/Button';

import css from './View.module.scss';

const Head = () => {
  const navigate = useNavigate();

  return (
    <div className={css.head}>
      <Button className={css.backButton} onClick={() => navigate('/')}>
        <FaArrowLeft size={20} />
      </Button>
      <h1>Summary</h1>
    </div>
  );
};

export default Head;
