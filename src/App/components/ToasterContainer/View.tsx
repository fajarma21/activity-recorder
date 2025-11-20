import dayjs from 'dayjs';

import Toaster from '@/components/Toaster';
import getFullDate from '@/helpers/getFullDate';
import useLastUpdateStore from '@/stores/useLastUpdateStore';
import useModalFormStore from '@/stores/useModalFormStore';
import useToasterStore from '@/stores/useToasterStore';

const ToasterContainer = () => {
  const removeLastUpdate = useLastUpdateStore(
    (state) => state.removeLastUpdate
  );
  const toasterList = useToasterStore((state) => state.toasterList);
  const hideToaster = useToasterStore((state) => state.hideToaster);
  const openForm = useModalFormStore((state) => state.openForm);

  const handleCloseToaster = () => {
    removeLastUpdate();
    hideToaster();
  };

  return (
    <>
      {toasterList.map(
        (
          { id, activityId, activityText, date, statusId, statusText },
          index
        ) => {
          const openParam = {
            initialValues: {
              activity: [
                {
                  label: activityText,
                  value: String(activityId),
                },
              ],
              date: date ? dayjs(date) : undefined,
              status: {
                label: statusText,
                value: statusId,
              },
            },
            disabledValues: {
              activity: true,
              status: true,
            },
            id,
            onCloseCallback: handleCloseToaster,
          };

          return (
            index <= 1 && (
              <Toaster
                key={id}
                isActive={index === 0}
                title="Marked as done!"
                onClickEdit={() => openForm(openParam)}
                onClose={handleCloseToaster}
              >
                <b>{activityText}</b> at {getFullDate(date)}
              </Toaster>
            )
          );
        }
      )}
    </>
  );
};

export default ToasterContainer;
