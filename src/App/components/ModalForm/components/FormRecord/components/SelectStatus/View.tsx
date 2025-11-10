import { Form, Select } from 'antd';

import { STATUS_LIST } from '@/constants';
import type { FormFields } from '@/types';

import type { SelectStatusProps } from './View.types';

const SelectStatus = ({ disabled }: SelectStatusProps) => {
  return (
    <Form.Item<FormFields>
      label="Status"
      name="status"
      rules={[{ required: true, message: 'Please input the status!' }]}
    >
      <Select
        labelInValue
        aria-required
        placeholder="Status"
        disabled={disabled}
        options={STATUS_LIST}
      />
    </Form.Item>
  );
};

export default SelectStatus;
