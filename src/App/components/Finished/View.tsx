import Card from '@/components/Card';
import ListItem from '@/components/ListItem';
import { STATUS_VALUE_DONE } from '@/constants';
import getFullDate from '@/helpers/getFullDate';

import type { FinishedProps } from './View.types';

const Finished = ({ data }: FinishedProps) => {
  return (
    <Card title="Finished Activities">
      <ul>
        {data.map(
          (item) =>
            item.statusId === STATUS_VALUE_DONE && (
              <ListItem
                key={item.id}
                text={item.activityText}
                subText={getFullDate(item.date)}
              />
            )
        )}
      </ul>
    </Card>
  );
};

export default Finished;
