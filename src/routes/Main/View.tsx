import Finished from '@/App/components/Finished';
import FormRecord from '@/App/components/FormRecord';
import ToDo from '@/App/components/ToDo';
import Modal from '@/components/Modal';
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

      <Modal display={displayModal} onClose={handleCloseForm}>
        <FormRecord onClose={handleCloseForm} />
      </Modal>
    </>
  );
};

export default Main;
