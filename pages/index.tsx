import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    let loading = false;
    fetch('http://localhost:8080/auth', {
      credentials: 'include'
    }).then((res) => {
      if (!loading) {
        if (res.status === 401) {
          router.replace('/login');
        } else if (res.status === 200) {
          router.replace('/profile');
        } else {
          console.error('error occurred, check API logs');
        }
      }
    });

    return () => {
      loading = true;
    };
  }, []);

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
