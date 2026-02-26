import { useState, type ChangeEvent } from 'react';
import { Button, Form } from 'antd';

import useActivityStore from '@/stores/useActivityStore';
import useRecapStore from '@/stores/useRecapStore';
import useRecordStore from '@/stores/useRecordStore';

import { downloadFile } from './View.helpers';
import css from './View.module.scss';
import type { DataManagerProps } from './View.types';

const DataManager = ({ onClose }: DataManagerProps) => {
  const records = useRecordStore((state) => state.records);
  const replaceRecords = useRecordStore((state) => state.replaceRecords);

  const recaps = useRecapStore((state) => state.recaps);
  const replaceRecaps = useRecapStore((state) => state.replaceRecaps);

  const activities = useActivityStore((state) => state.activities);
  const replaceActivities = useActivityStore(
    (state) => state.replaceActivities,
  );

  const [file, setFile] = useState<File>();

  const handleExport = () => {
    const allData = {
      records,
      recaps,
      activities,
    };
    const jsonContent = JSON.stringify(allData, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    downloadFile(`activity-data-${Date.now()}.json`, blob);
    onClose();
  };

  const handleInputFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) setFile(files[0]);
    else setFile(undefined);
  };

  const handleImport = () => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        if (!event.target) return;

        const content = event.target.result;
        if (typeof content === 'string') {
          const jsonData = JSON.parse(content);
          if (
            jsonData.activities &&
            jsonData.activities.length &&
            jsonData.records &&
            jsonData.records.length
          ) {
            replaceActivities(jsonData.activities);
            replaceRecords(jsonData.records);
            if (jsonData.recaps && jsonData.recaps.length)
              replaceRecaps(jsonData.recaps);
            else replaceRecaps([]);
          } else throw new Error();

          alert('Data imported successfully!');
          onClose();
        } else alert('Invalid file content.');
      } catch {
        alert('Error parsing JSON file.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <Form layout="vertical">
      <Form.Item label="Import">
        <input
          className={css.fileInput}
          type="file"
          accept="application/json"
          onChange={handleInputFile}
        />
        {file && (
          <>
            <div className={css.waringText}>
              <p>
                All activities and records will be replaced with imported data.
              </p>
            </div>
            <Button
              block
              color="magenta"
              variant="outlined"
              onClick={handleImport}
            >
              Import Data
            </Button>
          </>
        )}
      </Form.Item>
      <Form.Item label="Export">
        <Button block color="magenta" variant="outlined" onClick={handleExport}>
          Export Data
        </Button>
      </Form.Item>

      <Form.Item className={css.btnContainer}>
        <Button color="primary" variant="outlined" onClick={onClose}>
          Done
        </Button>
      </Form.Item>
    </Form>
  );
};

export default DataManager;
