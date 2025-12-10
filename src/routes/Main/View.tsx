import Finished from '@/App/components/Finished';
import ModalForm from '@/App/components/ModalForm';
import ToDo from '@/App/components/ToDo';
import { STATUS_VALUE_DONE, STATUS_VALUE_TODO } from '@/constants';
import useModalFormStore from '@/stores/useModalFormStore';
import useRecordStore from '@/stores/useRecordStore';

const Main = () => {
  const displayModal = useModalFormStore((state) => state.display);
  const onCloseCallback = useModalFormStore((state) => state.onCloseCallback);
  const closeForm = useModalFormStore((state) => state.closeForm);

  const records = useRecordStore((state) => state.records);
  const todoRecords = records.filter(
    (item) => item.statusId === STATUS_VALUE_TODO
  );
  const finishedRecords = records.filter(
    (item) => item.statusId === STATUS_VALUE_DONE
  );

  const handleCloseForm = () => {
    if (onCloseCallback) onCloseCallback();
    closeForm();
  };

  return (
    <>
      <ToDo data={todoRecords} />
      {finishedRecords.length > 0 && <Finished data={finishedRecords} />}

      <ModalForm display={displayModal} onClose={handleCloseForm} />
    </>
  );
};

export default Main;
