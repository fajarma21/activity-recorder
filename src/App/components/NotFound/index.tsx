import loadable from '@loadable/component';

const NotFoundLazy = loadable(
  () => import(/* webpackChunkName: "404-route" */ './View')
);

export default NotFoundLazy;
