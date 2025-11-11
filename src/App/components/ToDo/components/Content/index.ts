import loadable from '@loadable/component';

const ContentLazy = loadable(
  () => import(/* webpackChunkName: "todo-content" */ './View')
);

export default ContentLazy;
