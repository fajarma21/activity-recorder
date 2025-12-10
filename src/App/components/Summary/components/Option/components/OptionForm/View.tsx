import { Button, Form, Select } from 'antd';

import css from './View.module.scss';

import {
  DEFAULT_SUMMARY_PARAMS,
  SUMMARY_GROUP_LIST,
  SUMMARY_ORDER_LIST,
  SUMMARY_SORT_LIST,
} from '@/constants';
import type { SummaryFields } from '@/types';

import type { OptionFormProps } from './View.types';

const OptionForm = ({
  horizontal,
  urlParams,
  onCancel,
  onSubmit,
}: OptionFormProps) => {
  const dataHorizontal = horizontal || undefined;
  const [form] = Form.useForm();

  const handleSubmit = (values: SummaryFields) => {
    const keys = Object.keys(values) as (keyof SummaryFields)[];

    const newParams = keys.reduce((acc, key) => {
      return { ...acc, [key]: values[key].value };
    }, DEFAULT_SUMMARY_PARAMS);

    onSubmit(newParams);
  };

  return (
    <Form
      className={css.options}
      form={form}
      autoComplete="off"
      data-horizontal={dataHorizontal}
      initialValues={urlParams}
      onFinish={handleSubmit}
    >
      <Form.Item label="Group By" name="groupBy">
        <Select labelInValue options={SUMMARY_GROUP_LIST} />
      </Form.Item>
      <Form.Item label="Sort By" name="sortBy">
        <Select labelInValue options={SUMMARY_SORT_LIST} />
      </Form.Item>
      <Form.Item name="order">
        <Select labelInValue options={SUMMARY_ORDER_LIST} />
      </Form.Item>
      <Form.Item
        className={css.submitContainer}
        data-horizontal={dataHorizontal}
      >
        {!dataHorizontal && (
          <Button color="default" variant="filled" onClick={onCancel}>
            Cancel
          </Button>
        )}
        <Button color="primary" variant="outlined" htmlType="submit">
          Apply
        </Button>
      </Form.Item>
    </Form>
  );
};

export default OptionForm;
