import loadable from '@loadable/component';

const RecapLazy = loadable(
  () => import(/* webpackChunkName: "summary-route" */ './View')
);

export default RecapLazy;
