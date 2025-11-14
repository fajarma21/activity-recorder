import { useState } from 'react';
import { Button, Form } from 'antd';
import type { FormProps } from 'antd';

import DueDate from './components/DueDate';
import SelectActivity from './components/SelectActivity';
import SelectStatus from './components/SelectStatus';
import { STATUS_VALUE_DONE, STATUS_VALUE_TODO } from '@/constants';
import useActivityName from '@/stores/useActivityStore';
import useModalFormStore from '@/stores/useModalFormStore';
import useRecordStore from '@/stores/useRecordStore';
import useRecapStore from '@/stores/useRecapStore';
import type { FormFields } from '@/types';

import css from './View.module.scss';
import { getSingleActivity, getSubmitValue } from './View.helpers';
import type { FormRecordProps } from './View.types';

const FormRecord = ({ onClose }: FormRecordProps) => {
  const id = useModalFormStore((state) => state.id);
  const initialData = useModalFormStore((state) => state.initialData);
  const disabled = useModalFormStore((state) => state.disabled);

  const activities = useActivityName((state) => state.activities);
  const addActivity = useActivityName((state) => state.addActivity);
  const addRecord = useRecordStore((state) => state.addRecord);
  const updateRecord = useRecordStore((state) => state.updateRecord);
  const addRecap = useRecapStore((state) => state.addRecap);

  // form
  const isFormAdd = !id;

  // status
  const [status, setStatus] = useState(STATUS_VALUE_DONE);
  const isTodo = status === STATUS_VALUE_TODO;

  const [form] = Form.useForm();

  const handleValueChange = (newValue: FormFields) => {
    if (newValue.activity) {
      const newActivity = getSingleActivity(activities, newValue.activity);
      form.setFieldsValue({
        activity: newActivity,
      });
    }

    if (newValue.status) setStatus(newValue.status.value);
  };

  const handleSubmit: FormProps<FormFields>['onFinish'] = (values) => {
    const { normalizedActivity, newRecord, newRecap } = getSubmitValue(
      values,
      activities
    );

    addActivity(normalizedActivity);

    if (isFormAdd) {
      addRecord(newRecord);
      if (newRecap) addRecap(newRecap);
    } else updateRecord(id, newRecord);

    if (onClose) onClose();
  };

  return (
    <>
      <Form
        form={form}
        autoComplete="off"
        layout="vertical"
        requiredMark="optional"
        initialValues={initialData}
        onValuesChange={handleValueChange}
        onFinish={handleSubmit}
      >
        <SelectActivity disabled={disabled.activity} activities={activities} />
        <SelectStatus disabled={disabled.status} />
        <DueDate disabled={disabled.date} isTodo={isTodo} />

        <Form.Item className={css.submitContainer}>
          <Button color="default" variant="filled" onClick={onClose}>
            Cancel
          </Button>
          <Button color="primary" variant="outlined" htmlType="submit">
            {isFormAdd ? 'Add' : 'Change'} Activity
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default FormRecord;
