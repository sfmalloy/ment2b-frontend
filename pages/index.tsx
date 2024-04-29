import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function Home() {
  const [cookies, setCookies] = useState<Map<string, string>>(new Map());
  const router = useRouter();

  useEffect(() => {
    if (!cookies) {
      console.log('yo')
      setCookies(new Map(
        document.cookie.split('; ').map(elem => {
          const [key, value] = elem.split('=');
          return [key, value];
        })));
    }
  }, []);

  useEffect(() => {
    if (cookies.size > 0 && !cookies.get('uid')) {
      console.log('hi there');
    } else {
      router.replace('/login');
    }
  }, [cookies]);

  return (
    <>
      <Box sx={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        p: 2
      }}>
        <Grid container alignItems={'center'} gap={2} justifyContent={'center'} direction={'column'}>
          <Typography variant='h5'>Loading</Typography>
          <CircularProgress />
        </Grid>
      </Box>
    </>
  );
}
