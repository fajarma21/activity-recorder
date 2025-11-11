import Header from '@/components/Header';
import { STATUS_VALUE_DONE, STATUS_VALUE_TODO } from '@/constants';
import useRecordStore from '@/stores/useRecordStore';

import Finished from './components/Finished';
import ModalForm from './components/ModalForm';
import ToasterContainer from './components/ToasterContainer';
import ToDo from './components/ToDo';
import css from './View.module.scss';
import useModalFormStore from '@/stores/useModalFormStore';

// TODO: check edit date on toaster

const App = () => {
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
    <div className={css.container}>
      <Header />

      <div className={css.content}>
        <ToDo data={todoRecords} />
        {finishedRecords.length > 0 && <Finished data={finishedRecords} />}
      </div>

      <ModalForm display={displayModal} onClose={handleCloseForm} />

      <ToasterContainer />
    </div>
  );
};

export default App;
