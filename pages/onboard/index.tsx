import { Box, Button, FormControl, Grid, InputLabel, List, ListItem, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useState } from 'react';

export default function Onboard() {
  const [skills, setSkills] = useState<string[]>([]);

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      console.log('wow submitting already?')
    }}>
      <Grid container mt={1} spacing={1} alignItems={'top'}>
        <Grid item xs={12}>
          <Typography variant='h4'>Sign Up</Typography>
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label='Email'
            autoComplete='off'
            name='email'
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label='Username'
            autoComplete='off'
            name='uid'
          />
        </Grid>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <TextField
            fullWidth
            label='First Name'
            autoComplete='off'
            name='first_name'
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label='Last Name'
            autoComplete='off'
            name='last_name'
          />
        </Grid>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <TextField
            fullWidth
            label='Position'
            autoComplete='off'
            name='position'
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id='subdivision'>Subdivision</InputLabel>
            <Select name='subdiv' labelId='subdivision' label='Subdivision'>
              <MenuItem value={'RETAIL'}>RETAIL</MenuItem>
              <MenuItem value={'GIFS'}>GIFS</MenuItem>
              <MenuItem value={'INST'}>INST</MenuItem>
              <MenuItem value={'CDAO'}>CDAO</MenuItem>
              <MenuItem value={'CTO'}>CTO</MenuItem>
              <MenuItem value={'INTL'}>INTL</MenuItem>
              <MenuItem value={'EA'}>EA</MenuItem>
              <MenuItem value={'ESF'}>ESF</MenuItem>
              <MenuItem value={'CS'}>CS</MenuItem>
              <MenuItem value={'FAS'}>FAS</MenuItem>
              <MenuItem value={'GTO'}>GTO</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id='grade'>Grade Level</InputLabel>
            <Select name='grade' labelId='grade' label='Grade Level'>
              <MenuItem value={'corporate_1'}>Corporate 1</MenuItem>
              <MenuItem value={'corporate_2'}>Corporate 2</MenuItem>
              <MenuItem value={'corporate_3'}>Corporate 3</MenuItem>
              <MenuItem value={'corporate_4'}>Corporate 4</MenuItem>
              <MenuItem value={'corporate_5'}>Corporate 5</MenuItem>
              <MenuItem value={'corporate_6'}>Corporate 6</MenuItem>
              <MenuItem value={'technical_1'}>Technical 1</MenuItem>
              <MenuItem value={'technical_2'}>Technical 2</MenuItem>
              <MenuItem value={'technical_3'}>Technical 3</MenuItem>
              <MenuItem value={'technical_4'}>Technical 4</MenuItem>
              <MenuItem value={'technical_5'}>Technical 5</MenuItem>
              <MenuItem value={'technical_6'}>Technical 6</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Typography>Input one or many skills to help us with matching.</Typography>
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label='Skills'
            autoComplete='off'
            name='skill'
            onKeyDown={(e) => {
              if (e.key.toLowerCase() === 'enter') {
                const target = e.target as HTMLInputElement;
                if (!skills.includes(target.value)) {
                  setSkills([target.value, ...skills]);
                  target.value = '';
                }
              }
            }}
          />
        </Grid>
        <Grid item xs={8}>
          <Box border={1} borderRadius={1} p={1} height={200} overflow={'auto'}>
            {skills.length > 0 ? (
              <List>
                {skills.map((e) => (
                  <ListItem>
                    {e}
                  </ListItem>
                ))}
              </List> 
            )
            : (
              <List>
                <ListItem>No skills to display...</ListItem>
              </List> 
            )}
          </Box>
        </Grid>
        <Grid item xs={9} />
        <Grid item xs={3}>
          <Button
            type='submit'
            variant='contained'
            fullWidth
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
