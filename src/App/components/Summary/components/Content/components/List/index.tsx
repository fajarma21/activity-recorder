import loadable from '@loadable/component';

import Loader from '@/components/Loader';

const SummaryListLazy = loadable(
  () => import(/* webpackChunkName: "summary-list" */ './View'),
  { fallback: <Loader /> }
);

export default SummaryListLazy;
