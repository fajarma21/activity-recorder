import Card from '@/components/Card';
import ListItem from '@/components/ListItem';
import getFullDate from '@/helpers/getFullDate';

import css from './View.module.scss';
import type { ContentProps } from './View.types';
import sortToDo from '@/helpers/sortToDo';
import { groupList } from './View.helpers';

const Content = ({
  list,
  urlParams: { groupBy, sortBy, order },
}: ContentProps) => {
  const sortedList = sortToDo(list, sortBy.value, order.value);

  return (
    <Card contentClassName={css.content}>
      {groupBy.value ? (
        <>
          {groupList(sortedList, groupBy.value).map((parent) => (
            <div key={parent.text} className={css.group}>
              <div className={css.head}>
                <h4>{parent.text}</h4>
                <p className={css.total}>
                  {parent.list.length} record{parent.list.length > 1 && 's'}
                </p>
              </div>
              <div className={css.groupList}>
                {parent.list.map((item) => (
                  <ListItem
                    key={`${sortBy}-${order}-${item.id}`}
                    text={
                      groupBy.value !== 'activityText'
                        ? item.activityText
                        : undefined
                    }
                    subText={getFullDate(item.date)}
                  />
                ))}
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          {sortedList.map((item) => (
            <ListItem
              key={`${sortBy}-${order}-${item.id}`}
              text={item.activityText}
              subText={getFullDate(item.date)}
            />
          ))}
        </>
      )}
    </Card>
  );
};

export default Content;
