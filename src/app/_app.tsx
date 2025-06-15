import type { AppProps } from 'next/app'; //global layouts, styles, or providers.
import '../styles/globals.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  //TODO: for themes
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
