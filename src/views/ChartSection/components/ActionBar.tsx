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
      display: 'grid',
      gridTemplateColumns: {
        lg: '1fr 1fr',
        md: '1fr 1fr',
        xs: '1f',
      },
      marginBottom: '50px',
    }}
  >
    <Box
      sx={{
        textAlign: {
          md: 'left',
          xs: 'center',
        },
      }}
    >
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
              sx={{
                margin: {
                  md: 0,
                  xs: '20px',
                },
              }}
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
                margin: {
                  md: '0px 0px 0px 15px',
                  xs: '0px 0px 15px 0px',
                },
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
      sx={{
        '& .MuiTabs-flexContainer': {
          justifyContent: {
            md: 'end',
            xs: 'space-around',
          },
        },
      }}
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
