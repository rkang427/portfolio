'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';

const theme = createTheme({
  typography: {
    fontFamily: `'Quicksand', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
  },
});

export default function Theme({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
