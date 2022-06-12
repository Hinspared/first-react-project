import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
//
// const matches = useMediaQuery('(min-width: 600px');
const mql = window.matchMedia('(max-width: 600px)');
const match = mql.matches;
const condition = match ? 'transparent' : '#8E5572';
console.log(match);
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

    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': { backgroundColor: condition },
        },
      },
    },
  },
});

export default theme;
