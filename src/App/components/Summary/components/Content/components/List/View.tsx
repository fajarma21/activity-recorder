import ListItem from '@/components/ListItem';
import getFullDate from '@/helpers/getFullDate';
import sortToDo from '@/helpers/sortToDo';

import css from './View.module.scss';
import { groupList } from './View.helpers';
import type { ListProps } from './View.types';

const List = ({ list, groupBy, sortBy, order }: ListProps) => {
  const sortedList = sortToDo(list, sortBy, order);

  return groupBy ? (
    <>
      {groupList(sortedList, groupBy).map((parent) => (
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
                  groupBy !== 'activityText' ? item.activityText : undefined
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
  );
};

export default List;
