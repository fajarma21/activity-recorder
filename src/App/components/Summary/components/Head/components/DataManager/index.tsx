import loadable from '@loadable/component';

const DataManagerLazy = loadable(
  () => import(/* webpackChunkName: "data-manager" */ './View'),
);

export default DataManagerLazy;
