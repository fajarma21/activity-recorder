import useLastUpdateStore from '@/stores/useLastUpdateStore';
import useRecapStore from '@/stores/useRecapStore';
import type { ActivityRecap, ActivityRecord } from '@/types';

const useActionRecap = (recapList: ActivityRecap[]) => {
  const addLastUpdate = useLastUpdateStore((state) => state.addLastUpdate);
  const addRecap = useRecapStore((state) => state.addRecap);

  const handleAddRecap = (newRecap: ActivityRecord) => {
    const existRecap = recapList.find(
      (item) => item.activityId === newRecap.activityId
    );
    if (existRecap) addLastUpdate({ recap: existRecap });
    addRecap(newRecap);
  };

  return {
    handleAddRecap,
  };
};

export default useActionRecap;
