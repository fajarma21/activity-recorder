import loadable from '@loadable/component';

const OptionFormLazy = loadable(
  () => import(/* webpackChunkName: "form-option" */ './View')
);

export default OptionFormLazy;
