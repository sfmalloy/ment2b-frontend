import { Grid, Paper, TextField, Typography } from '@mui/material';

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
          console.log(uid);
        }}>
          <TextField
            variant='filled'
            label='Username'
            name='uid'
            autoComplete='off'
            fullWidth
          />
        </form>
      </Grid>
    </Paper>
  )
}
