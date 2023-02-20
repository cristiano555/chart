import {
  Dispatch,
  SetStateAction,
} from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {
  DAY,
  MONTH,
  WEEK,
} from 'utils/constants';

type ActionBarPropsType = {
  frequency: string;
  handleTabs: (event: React.SyntheticEvent, newValue: string) => void;
  startDate: Date | null;
  endDate: Date | null;
  // setStartDate: (a: Date) => Date;
  // setEndDate: (a: Date) => Date;
  setStartDate: Dispatch<SetStateAction<Date | null>>;
  setEndDate: Dispatch<SetStateAction<Date | null>>;
};

const ActionBar = ({
  frequency,
  handleTabs,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}: ActionBarPropsType) => (
  <Box
    sx={{
      borderColor: 'divider',
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '30px',
    }}
  >
    <Box>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        adapterLocale="pl-PL"
      >
        <DatePicker
          label="From"
          inputFormat="DD/MM/YYYY"
          value={startDate}
          onChange={value => setStartDate(value)}
          renderInput={params => (
            <TextField
              {...params}
              name="date"
            />
          )}
        />
        <DatePicker
          label="To"
          inputFormat="DD/MM/YYYY"
          value={endDate}
          onChange={value => setEndDate(value)}
          renderInput={params => (
            <TextField
              {...params}
              name="date"
              sx={{
                marginLeft: '15px',
              }}
            />
          )}
        />
      </LocalizationProvider>
    </Box>
    <Tabs
      value={frequency}
      onChange={handleTabs}
      textColor="primary"
      indicatorColor="primary"
      aria-label="primary tabs"
    >
      <Tab
        value={DAY}
        label={DAY}
      />
      <Tab
        value={WEEK}
        label={WEEK}
      />
      <Tab
        value={MONTH}
        label={MONTH}
      />
    </Tabs>
  </Box>
);

export default ActionBar;
