import {
  OperationsType,
  OperationType,
} from 'utils/types';
import { DSVRowString } from 'd3';

export const removeTimeFromOperation = (rawRow: DSVRowString<keyof OperationType>) => {
  if (rawRow.avg_transfer_value !== undefined &&
    rawRow.date !== undefined &&
    rawRow.transfers_count !== undefined) {
    const operation: OperationType = {
      avg_transfer_value: +rawRow.avg_transfer_value,
      date: rawRow.date,
      transfers_count: +rawRow.transfers_count,
    };

    const dateModifier = operation.date.split(' ');

    operation.date = dateModifier[0];

    return operation;
  }

  return new Error('CSV file has');
};

export const limitDate = (startDate: Date, endDate: Date, operations: OperationsType) => {
  const startDateStr = startDate.toISOString().split('T')[0];
  const endDateStr = endDate.toISOString().split('T')[0];
  const limitedOperations = operations.filter(
    (operation: OperationType) => operation.date >= startDateStr && operation.date <= endDateStr
  );

  return limitedOperations;
};

export function mergeBySameDate(data: OperationsType) {
  const modifiedArray = data.reduce((accumulator: Array<OperationType>, currentValue) => {
    const key = currentValue.date.split('-');

    key.length = 2;
    const yearMonthDate = key.join('-');
    const existingElement = accumulator.find(
      (element: OperationType) => element.date === yearMonthDate
    ) as OperationType;

    if (existingElement) {
      existingElement.transfers_count += currentValue.transfers_count;
      existingElement.avg_transfer_value += currentValue.avg_transfer_value;
    } else {
      accumulator.push({
        avg_transfer_value: currentValue.avg_transfer_value,
        date: yearMonthDate,
        transfers_count: currentValue.transfers_count,
      });
    }

    return accumulator;
  }, []);

  return modifiedArray;
}

export function convertDateToWeekScope(isoDate: string) {
  const date = new Date(isoDate);
  const monday = new Date(date);

  monday.setDate(date.getDate() - date.getDay() + 1);
  const sunday = new Date(monday);

  sunday.setDate(monday.getDate() + 6);

  return `${monday.getDate()}-${sunday.getDate()}.${(monday.getMonth() + 1).toString().padStart(2, '0')}`;
}
