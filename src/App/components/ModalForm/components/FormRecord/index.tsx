import loadable from '@loadable/component';

const FormRecordLazy = loadable(
  () => import(/* webpackChunkName: "form-record" */ './View')
);

export default FormRecordLazy;
