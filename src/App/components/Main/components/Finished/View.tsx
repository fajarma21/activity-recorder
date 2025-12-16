import { useNavigate } from 'react-router-dom';
import { FaRegFileLines } from 'react-icons/fa6';

import Card from '@/components/Card';
import ListItem from '@/components/ListItem';
import { STATUS_VALUE_DONE } from '@/constants';
import getFullDate from '@/helpers/getFullDate';

import type { FinishedProps } from './View.types';

const Finished = ({ data }: FinishedProps) => {
  const navigate = useNavigate();

  return (
    <Card
      title="Finished Activities"
      actionIcon={<FaRegFileLines size={24} />}
      onClickAction={() =>
        navigate({
          pathname: '/summary',
          search: '?groupBy=&sortBy=date&order=desc',
        })
      }
    >
      <ul>
        {[...data]
          .sort((a, b) => b.date - a.date)
          .map(
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
