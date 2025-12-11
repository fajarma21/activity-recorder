import Card from '@/components/Card';

import css from './View.module.scss';
import type { ContentProps } from './View.types';
import List from './components/List';
import NoData from './components/NoData';

const Content = ({
  list,
  urlParams: { groupBy, sortBy, order },
}: ContentProps) => {
  return (
    <Card contentClassName={css.content}>
      {list.length ? (
        <List
          list={list}
          groupBy={groupBy.value}
          sortBy={sortBy.value}
          order={order.value}
        />
      ) : (
        <NoData />
      )}
    </Card>
  );
};

export default Content;
