import { useSearchParams } from 'react-router';

import Content from '@/App/components/Summary/components/Content';
import Head from '@/App/components/Summary/components/Head';
import Option from '@/App/components/Summary/components/Option';
import useRecordStore from '@/stores/useRecordStore';
import {
  PARAM_GROUP_NONE,
  PARAM_ORDER_DESC,
  PARAM_SORT_FINISHED,
  STATUS_VALUE_DONE,
  SUMMARY_GROUP_LIST,
  SUMMARY_ORDER_LIST,
  SUMMARY_SORT_LIST,
} from '@/constants';
import type { SummaryFields } from '@/types';

// TODO: mobile options

const Summary = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const groupByParam = searchParams.get('groupBy');
  const sortByParam = searchParams.get('sortBy');
  const orderParam = searchParams.get('order');

  const allParams = {
    groupBy:
      SUMMARY_GROUP_LIST.find((item) => item.value === groupByParam) ||
      PARAM_GROUP_NONE,
    sortBy:
      SUMMARY_SORT_LIST.find((item) => item.value === sortByParam) ||
      PARAM_SORT_FINISHED,
    order:
      SUMMARY_ORDER_LIST.find((item) => item.value === orderParam) ||
      PARAM_ORDER_DESC,
  } as SummaryFields;

  const records = useRecordStore((state) => state.records).filter(
    (item) => item.statusId === STATUS_VALUE_DONE
  );

  return (
    <>
      <Head />
      <Option urlParams={allParams} onChangeParams={setSearchParams} />
      <Content urlParams={allParams} list={records} />
    </>
  );
};

export default Summary;
