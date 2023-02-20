import React from 'react';
import ReactDOM from 'react-dom/client';
import { color } from 'utils/constants';
// import {
//   css,
//   Global,
// } from '@emotion/react';
import {
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import App from './App';

const theme = createTheme({
  breakpoints: {
    values: {
      lg: 1310,
      md: 1024,
      sm: 640,
      xl: 1920,
      xs: 0,
    },
  },
  palette: {
    background: {
      default: color.background,
    },
    primary: {
      main: color.primary,
    },
  },
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
          html {
            font-family: 'Roboto', sans-serif;
          }
          @supports (font-variation-settings: normal) {
            html {
              font-family: 'Roboto', sans-serif;
            }
          }

          html,
          body {
            margin: 0;
            padding: 0;
            background-color: ${color.background};
          }
        `}
      /> */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
