import { Button, Grid, Paper, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { red } from '@mui/material/colors';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Login() {
  const [error, setError] = useState('');
  const router = useRouter();

  return (
    <Paper
      variant='outlined'
      sx={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        p: 2
      }}
    >
      <Grid container alignItems={'center'} direction={'column'} rowSpacing={1}>
        <Grid item>
          <Typography variant='h4'>Login</Typography>
        </Grid>
        <Grid item>
          {error && (
            <>
              <Paper
                variant='outlined'
                sx={{
                  backgroundColor: 'error.light',
                  p: 1
                }}
              >
                <Stack alignItems={'center'} direction={'row'} gap={1} justifyContent={'center'}>
                  <ErrorOutlineIcon />
                  <Typography>{error}</Typography>
                </Stack>
              </Paper>
            </>
          )}
        </Grid>
        <Grid item>
          <form onSubmit={(e) => {
            e.preventDefault();
            setError('');
            const uid = e.currentTarget.uid.value;
            fetch('http://localhost:8080/login', {
              credentials: 'include',
              headers: {
                'uid': uid
              }
            }).then(async (res) => {
              if (!res.ok) {
                const text = await res.json();
                setError(text.detail);
              } else {
                router.replace('/profile');
              }
            }).catch((err) => {
              console.log(err);
              setError(err);
            });
          }}>
            <TextField
              variant='filled'
              label='Username'
              name='uid'
              autoComplete='off'
              fullWidth
            />
            <Button
              type='submit'
              variant='contained'
              fullWidth
              sx={{mt: 1}}
            >
              Login
            </Button>
          </form>
        </Grid>
        <Grid item>
          No account? <Link href='/onboard'>Sign up</Link>
        </Grid>
      </Grid>
    </Paper>
  )
}
