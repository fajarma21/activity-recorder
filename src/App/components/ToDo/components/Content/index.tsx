import loadable from '@loadable/component';

import Loader from '@/components/Loader';

const ContentLazy = loadable(
  () => import(/* webpackChunkName: "todo-content" */ './View'),
  { fallback: <Loader /> }
);

export default ContentLazy;
