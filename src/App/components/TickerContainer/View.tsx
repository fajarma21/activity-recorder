import Ticker from '@/components/Ticker';
import getFullDate from '@/helpers/getFullDate';
import useModalFormStore from '@/stores/useModalFormStore';
import useTickerStore from '@/stores/useTickerStore';
import dayjs from 'dayjs';

const TickerContainer = () => {
  const tickerList = useTickerStore((state) => state.tickerList);
  const hideTicker = useTickerStore((state) => state.hideTicker);
  const openForm = useModalFormStore((state) => state.openForm);

  return (
    <>
      {tickerList.map(
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
            onCloseCallback: hideTicker,
          };

          return (
            index <= 1 && (
              <Ticker
                key={id}
                isActive={index === 0}
                title="Marked as done!"
                onClickEdit={() => openForm(openParam)}
                onClose={hideTicker}
              >
                <b>Lari Pagi</b> at {getFullDate(date)}
              </Ticker>
            )
          );
        }
      )}
    </>
  );
};

export default TickerContainer;
