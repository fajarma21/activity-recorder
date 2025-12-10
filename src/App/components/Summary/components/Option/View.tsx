import { Button, Form, Select } from 'antd';

import Card from '@/components/Card';
import {
  DEFAULT_SUMMARY_PARAMS,
  SUMMARY_GROUP_LIST,
  SUMMARY_ORDER_LIST,
  SUMMARY_SORT_LIST,
} from '@/constants';
import type { SummaryFields } from '@/types';

import css from './View.module.scss';
import type { OptionProps } from './View.types';

const Option = ({ urlParams, onChangeParams }: OptionProps) => {
  const [form] = Form.useForm();

  const handleSubmit = (values: SummaryFields) => {
    const keys = Object.keys(values) as (keyof SummaryFields)[];

    const newParams = keys.reduce((acc, key) => {
      return { ...acc, [key]: values[key].value };
    }, DEFAULT_SUMMARY_PARAMS);

    onChangeParams(newParams);
  };

  return (
    <Card>
      <Form
        className={css.options}
        form={form}
        autoComplete="off"
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
        <Form.Item>
          <Button color="primary" variant="outlined" htmlType="submit">
            Apply
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Option;
