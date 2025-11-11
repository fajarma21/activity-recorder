import { STATUS_VALUE_ESTIMATED } from '@/constants';
import useModalFormStore from '@/stores/useModalFormStore';
import useRecapStore from '@/stores/useRecapStore';

import Content from './components/Content';
import EmptyToDo from './components/EmptyToDo';
import type { ToDoProps } from './View.types';

const ToDo = ({ data }: ToDoProps) => {
  const openForm = useModalFormStore((state) => state.openForm);

  const recaps = useRecapStore((state) => state.recaps);
  const displayRecap = recaps.filter(
    (item) => item.statusId === STATUS_VALUE_ESTIMATED && item.count > 1
  );

  const listAvailable = data.length > 0 || displayRecap.length > 0;

  if (listAvailable) {
    return (
      <Content
        todoList={data}
        estimationList={displayRecap}
        onClickOpenForm={openForm}
      />
    );
  }

  return <EmptyToDo onClickAdd={openForm} />;
};

export default ToDo;
