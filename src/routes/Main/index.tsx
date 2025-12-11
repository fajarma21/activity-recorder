import loadable from '@loadable/component';

const MainLazy = loadable(
  () => import(/* webpackChunkName: "main-route" */ './View')
);

export default MainLazy;
