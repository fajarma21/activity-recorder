import { useState } from 'react';
import { Form, Select } from 'antd';

import type { FormFields } from '@/types';

import type { SelectActivityProps } from './View.types';

const SelectActivity = ({ activities, disabled }: SelectActivityProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Form.Item<FormFields>
      label="Activity"
      name="activity"
      rules={[{ required: true, message: 'Please input an activity!' }]}
    >
      <Select
        labelInValue
        aria-required
        mode="tags"
        placeholder="Activity"
        optionFilterProp="label"
        notFoundContent="No previous activity"
        disabled={disabled}
        options={activities.map((item) => ({
          value: String(item.activityId),
          label: item.activityText,
        }))}
        open={open}
        onOpenChange={(visible) => {
          setOpen(visible);
        }}
        onChange={() => {
          setOpen(false);
        }}
      />
    </Form.Item>
  );
};

export default SelectActivity;
