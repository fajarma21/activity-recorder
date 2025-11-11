import CheckList from '@/components/CheckList';
import { STATUS_DONE } from '@/constants';
import determineDate from '@/helpers/determineDate';
import getFullDate from '@/helpers/getFullDate';
import useRecapStore from '@/stores/useRecapStore';
import useRecordStore from '@/stores/useRecordStore';
import useToasterStore from '@/stores/useToasterStore';
import type { ActivityRecap } from '@/types';

import type { EstToDoProps } from './View.types';

const EstToDo = ({ data }: EstToDoProps) => {
  const showToaster = useToasterStore((state) => state.showToaster);

  const addRecord = useRecordStore((state) => state.addRecord);
  const addRecap = useRecapStore((state) => state.addRecap);

  const handleChange = (item: ActivityRecap) => () => {
    const newItem = {
      ...item,
      id: Date.now(),
      date: determineDate(item.next),
      statusId: STATUS_DONE.value,
      statusText: STATUS_DONE.label,
    };

    addRecord(newItem);
    addRecap(newItem);
    showToaster(newItem);
  };

  return (
    <>
      <h3>Estimated next todo</h3>
      <ul>
        {data.map((item) => (
          <CheckList
            key={item.id}
            text={item.activityText}
            subText={getFullDate(item.next)}
            onChange={handleChange(item)}
          />
        ))}
      </ul>
    </>
  );
};

export default EstToDo;
