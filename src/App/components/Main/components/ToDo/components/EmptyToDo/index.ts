import loadable from '@loadable/component';

const EmptyToDoLazy = loadable(
  () => import(/* webpackChunkName: "empty-todo" */ './View')
);

export default EmptyToDoLazy;
