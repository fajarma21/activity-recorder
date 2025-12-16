import loadable from '@loadable/component';

const EstToDoLazy = loadable(
  () => import(/* webpackChunkName: "est-list" */ './View')
);

export default EstToDoLazy;
