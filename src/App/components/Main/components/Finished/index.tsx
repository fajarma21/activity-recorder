import loadable from '@loadable/component';

import Loader from '@/components/Loader';

const FinishedLazy = loadable(
  () => import(/* webpackChunkName: "finished-list" */ './View'),
  { fallback: <Loader /> }
);

export default FinishedLazy;
