import loadable from '@loadable/component';

const FinishedLazy = loadable(
  () => import(/* webpackChunkName: "finished-list" */ './View')
);

export default FinishedLazy;
