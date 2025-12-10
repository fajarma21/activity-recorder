import Button from '@/components/Button';
import { FaArrowLeft } from 'react-icons/fa6';

import css from './View.module.scss';
import { useNavigate } from 'react-router-dom';

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
