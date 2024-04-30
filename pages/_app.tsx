import { AppBar, Container, CssBaseline, ThemeProvider, Typography, createTheme } from '@mui/material';
import type { AppProps } from "next/app";

const theme = createTheme({
  palette: {
    'mode': 'light',
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position='sticky' sx={{p: 1}} elevation={0}>
        <Typography variant='h3'>ment2b</Typography>
      </AppBar>
      <Container>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  );
}
