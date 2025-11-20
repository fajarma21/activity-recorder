import { Button } from 'antd';

import Card from '@/components/Card';
import CheckList from '@/components/CheckList';
import { STATUS_DONE } from '@/constants';
import determineDate from '@/helpers/determineDate';
import getFullDate from '@/helpers/getFullDate';
import useActionRecap from '@/hooks/useActionRecap';
import useRecordStore from '@/stores/useRecordStore';
import useToasterStore from '@/stores/useToasterStore';
import type { ActivityRecord } from '@/types';

import EstToDo from './components/EstToDo';
import css from './View.module.scss';
import type { ContentProps } from './View.types';

const Content = ({
  todoList,
  estimationList,
  onClickOpenForm,
}: ContentProps) => {
  const showToaster = useToasterStore((state) => state.showToaster);
  const updateStatus = useRecordStore((state) => state.updateStatus);

  const { handleAddRecap } = useActionRecap(estimationList);

  const handleChange = (item: ActivityRecord) => () => {
    const newItem = {
      ...item,
      date: determineDate(item.date),
      statusId: STATUS_DONE.value,
      statusText: STATUS_DONE.label,
    };
    updateStatus(item.id, newItem.date, {
      statusId: newItem.statusId,
      statusText: newItem.statusText,
    });

    handleAddRecap(newItem);

    showToaster(newItem);
  };

  return (
    <Card>
      <>
        <ul>
          {[...todoList]
            .sort((a, b) => a.date - b.date)
            .map((item) => (
              <CheckList
                key={item.id}
                text={item.activityText}
                subText={item.date ? getFullDate(item.date) : ''}
                onChange={handleChange(item)}
              />
            ))}
        </ul>
        {estimationList.length > 0 && <EstToDo data={estimationList} />}
      </>
      <div className={css.buttonContainer}>
        <Button color="primary" variant="outlined" onClick={onClickOpenForm}>
          Add Activity
        </Button>
      </div>
    </Card>
  );
};

export default Content;
