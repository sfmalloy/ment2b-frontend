import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Home() {
  const [cookies, setCookies] = useState<Map<string, string>>(new Map());
  const [loadingCookies, setLoadingCookies] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    if (cookies.size === 0) {
      setCookies(new Map(
        document.cookie.split('; ').map(elem => {
          const [key, value] = elem.split('=');
          return [key, value];
        }
      )));
      setLoadingCookies(false);
    }
  }, []);

  useEffect(() => {
    if (!loadingCookies) {
      if (!cookies.get('ment2b_session') || cookies.size === 0) {
        router.replace('/login');
      } else {
        console.log('not done yet :)');
      }
    }
  }, [loadingCookies]);

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
