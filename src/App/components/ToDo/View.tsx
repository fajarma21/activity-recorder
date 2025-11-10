import { Button } from 'antd';

import { STATUS_DONE, STATUS_VALUE_ESTIMATED } from '@/constants';
import Card from '@/components/Card';
import CheckList from '@/components/CheckList';
import determineDate from '@/helpers/determineDate';
import getFullDate from '@/helpers/getFullDate';
import useRecapStore from '@/stores/useRecapStore';
import useRecordStore from '@/stores/useRecordStore';
import useTickerStore from '@/stores/useTickerStore';
import type { ActivityRecord } from '@/types';

import EstToDo from './components/EstToDo';
import EmptyToDo from './components/EmptyToDo';
import css from './View.module.scss';
import type { ToDoProps } from './View.types';
import useModalFormStore from '@/stores/useModalFormStore';

const ToDo = ({ data }: ToDoProps) => {
  const openForm = useModalFormStore((state) => state.openForm);

  const showTicker = useTickerStore((state) => state.showTicker);

  const updateStatus = useRecordStore((state) => state.updateStatus);
  const addRecap = useRecapStore((state) => state.addRecap);

  const recaps = useRecapStore((state) => state.recaps);
  const displayRecap = recaps.filter(
    (item) => item.statusId === STATUS_VALUE_ESTIMATED && item.count > 1
  );

  const listAvailable = data.length > 0 || displayRecap.length > 0;

  const handleChange = (item: ActivityRecord) => () => {
    const newItem = {
      ...item,
      date: determineDate(item.date),
    };
    updateStatus(item.id, newItem.date, {
      statusId: STATUS_DONE.value,
      statusText: STATUS_DONE.label,
    });
    addRecap({
      ...newItem,
      id: Date.now(),
    });

    showTicker(newItem);
  };

  if (listAvailable) {
    return (
      <Card>
        <>
          <ul>
            {data.map((item) => (
              <CheckList
                key={item.id}
                text={item.activityText}
                subText={item.date ? getFullDate(item.date) : ''}
                onChange={handleChange(item)}
              />
            ))}
          </ul>
          {displayRecap.length > 0 && <EstToDo data={displayRecap} />}
        </>
        <div className={css.buttonContainer}>
          <Button color="primary" variant="outlined" onClick={() => openForm()}>
            Add Activity
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card>
      <EmptyToDo onClickAdd={openForm} />
    </Card>
  );
};

export default ToDo;
