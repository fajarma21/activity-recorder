import { DatePicker, Form } from 'antd';
import dayjs from 'dayjs';

import { MOBILE_MAX_WIDTH } from '@/constants';
import type { FormFields } from '@/types';

import type { DueDateProps } from './View.types';

const DueDate = ({ isTodo, disabled }: DueDateProps) => {
  return (
    <Form.Item<FormFields> label="Date" name="date">
      <DatePicker
        showTime={window.innerWidth >= MOBILE_MAX_WIDTH}
        format="YYYY-MM-DD HH:mm"
        minDate={isTodo ? dayjs() : undefined}
        maxDate={isTodo ? undefined : dayjs()}
        minuteStep={10}
        disabled={disabled}
        style={{ width: '100%' }}
      />
    </Form.Item>
  );
};

export default DueDate;
