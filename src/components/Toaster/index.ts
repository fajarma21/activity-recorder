import loadable from '@loadable/component';

const ToasterLazy = loadable(
  () => import(/* webpackChunkName: "toaster" */ './View')
);

export default ToasterLazy;
