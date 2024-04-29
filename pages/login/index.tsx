import { Box, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material';

export default function Login() {
  return (
    <Paper
      sx={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        p: 2
      }}
    >
      <Grid container gap={2} alignItems={'center'} direction={'column'}>
        <Typography variant='h4'>Login</Typography>
        <form onSubmit={(e) => {
          e.preventDefault();
          const uid = e.currentTarget.uid.value;
          // TODO: call the API
          console.log(uid);
        }}>
          <TextField
            variant='filled'
            label='Username'
            name='uid'
            autoComplete='off'
            fullWidth
            sx={{mb: 2}}
          />
          <TextField
            variant='filled'
            label='Password'
            name='pwd'
            autoComplete='off'
            type='password'
            fullWidth
          />
        </form>
      </Grid>
    </Paper>
  )
}
