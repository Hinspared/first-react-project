import * as React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: '#1B1B3A',
          '&:hover': {
            backgroundColor: '#1B1B3A',
          },
        },
      },
    },
  },
});

export default theme;
