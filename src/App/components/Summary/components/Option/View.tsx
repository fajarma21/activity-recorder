import Card from '@/components/Card';

import css from './View.module.scss';
import type { OptionProps } from './View.types';
import OptionForm from './components/OptionForm';
import SmallOption from './components/SmallOption';

const Option = ({ urlParams, onChangeParams }: OptionProps) => {
  return (
    <Card>
      <>
        <div className={css.wide}>
          <OptionForm
            horizontal
            urlParams={urlParams}
            onSubmit={onChangeParams}
          />
        </div>
        <div className={css.small}>
          <SmallOption urlParams={urlParams} onSubmit={onChangeParams} />
        </div>
      </>
    </Card>
  );
};

export default Option;
