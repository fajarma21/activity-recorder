import loadable from '@loadable/component';

import Loader from '@/components/Loader';

const SummaryNoDataLazy = loadable(
  () => import(/* webpackChunkName: "summary-no-data" */ './View'),
  { fallback: <Loader /> }
);

export default SummaryNoDataLazy;
