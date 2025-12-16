import { useNavigate } from 'react-router';
import { Button } from 'antd';

import css from './View.module.scss';

const NotFound = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className={css.container}>
      <h2 className={css.notFound}>404</h2>
      <p className={css.desc}>you will get nothing here</p>
      <Button color="primary" variant="outlined" onClick={handleRedirect}>
        Let's go home
      </Button>
    </div>
  );
};

export default NotFound;
