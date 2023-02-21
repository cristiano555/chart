import {
  useEffect,
  useState,
} from 'react';
import Box from '@mui/material/Box';
import {
  color,
  DAY,
  MONTH,
  WEEK,
} from 'utils/constants';
import {
  convertDateToWeekScope,
  limitDate,
  mergeBySameDate,
  removeTimeFromOperation,
} from 'utils/helpers';
import { csv } from 'd3';
import dataFromCsvFile from 'assets/blockchain_sample_data.csv';
import { OperationsType } from 'utils/types';

import Chart from './components/Chart';
import ActionBar from './components/ActionBar';

const ChartSection = () => {
  const [
    frequency,
    setFrequency,
  ] = useState<string>(DAY);
  const [
    data,
    setData,
  ] = useState<OperationsType>([]);
  const [
    startDate,
    setStartDate,
  ] = useState<Date | null>(new Date('2022-08-06'));
  const [
    endDate,
    setEndDate,
  ] = useState<Date | null>(new Date());

  const handleTabs = (event: React.SyntheticEvent, newValue: string) => {
    setFrequency(newValue);
  };

  useEffect(() => {
    csv(dataFromCsvFile, removeTimeFromOperation)
      .then((operations: OperationsType) => limitDate(startDate, endDate, operations))
      .then(operations => {
        if (frequency === MONTH) {
          setData(mergeBySameDate(operations));
        } else if (frequency === WEEK) {
          const result = operations.map(operation => (
            {
              ...operation,
              date: convertDateToWeekScope(operation.date),
            }
          ));

          setData(mergeBySameDate(result));
        } else {
          setData(operations);
        }
      });
  }, [
    frequency,
    startDate,
    endDate,
  ]);

  return (
    <Box
      sx={{
        backgroundColor: color.backgroundAdditional,
        borderRadius: '5px',
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        margin: '60px 0',
        padding: '45px',
        width: '100%',
      }}
    >
      <ActionBar
        handleTabs={handleTabs}
        frequency={frequency}
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
      <Chart data={data} />
    </Box>
  );
};

export default ChartSection;
