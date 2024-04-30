import { SkillSet, SimpleRadioGroup } from '@/components';
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const selectMenuProps = {
  slotProps: {
    paper: {
      sx: {
        maxHeight: 200
      }
    }
  }
}

export default function Onboard() {
  const [skills, setSkills] = useState<string[]>([]);
  const [mentorGrades, setMentorGrades] = useState<string[]>([]);
  const [openToMentor, setOpenToMentor] = useState(false);
  const [bioLength, setBioLength] = useState(0);
  const [openToBeMentored, setOpenToBeMentored] = useState(false);

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      console.log('wow submitting already?')
    }}>
      <Grid container mt={1} spacing={1} alignItems={'top'}>
        <Grid item xs={12}>
          <Typography variant='h4'>Sign Up</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Personal Information</Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label='Email'
            autoComplete='off'
            name='email'
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label='Username'
            autoComplete='off'
            name='uid'
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label='First Name'
            autoComplete='off'
            name='first_name'
            required
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label='Last Name'
            autoComplete='off'
            name='last_name'
            required
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label='Position'
            autoComplete='off'
            name='position'
            required
          />
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id='subdivision' required>Subdivision</InputLabel>
            <Select
              name='subdiv'
              labelId='subdivision'
              label='Subdivision'
              MenuProps={selectMenuProps}
              defaultValue={''}
              required
            >
              <MenuItem value={'Personal Investor'}>Personal Investor</MenuItem>
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
            <InputLabel id='grade' required>Grade Level</InputLabel>
            <Select
              name='grade'
              labelId='grade'
              label='Grade Level'
              MenuProps={selectMenuProps}
              defaultValue={''}
              required
            >
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
          <Typography mt={2}>Tell us a bit about yourself! ({bioLength}/500)</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            fullWidth
            required
            rows={4}
            onChange={(e) => setBioLength(e.target.value.length)}
            inputProps={{ maxLength: 500 }}
            label='About Me'
          />
        </Grid>
        <Grid item xs={12} mt={2}>
          <Typography>Input one or many skills that you have. Click on a skill to remove it from the list.</Typography>
        </Grid>
        <SkillSet onChange={(currSkills) => setSkills(currSkills)} />
        <SimpleRadioGroup
          question='Are you open to being mentored?'
          onChange={(value) => setOpenToBeMentored(value)}
          xs={12}
          id='open-to-be-mentored'
          name='openToBeMentored'
        />
        {openToBeMentored && (
          <>
            <Grid item xs={12} mt={2}>
              <Typography>Input one or many skills you would like mentorship on. Click on a skill to remove it from the list.</Typography>
            </Grid>
            <SkillSet onChange={(currSkills) => setSkills(currSkills)} />
            <Grid item xs={12} mt={2}>
              <Typography>Select what grade levels you want your mentors to be at.</Typography>
            </Grid>
            <Grid item xs={9}>
              <FormControl fullWidth>
                <InputLabel id='grade'>Mentor Grades</InputLabel>
                <Select
                  onChange={(e) => {
                    const target = e.target as HTMLInputElement;
                    if (typeof target.value === 'string') {
                      setMentorGrades([target.value]);
                    } else {
                      setMentorGrades(target.value);
                    }
                  }}
                  value={mentorGrades}
                  multiple
                  name='mentorGrades'
                  labelId='mentor-grade'
                  label='Mentor Grade'
                  MenuProps={selectMenuProps}
                >
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
          </>
        )}
        <SimpleRadioGroup
          question='Are you open to being a mentor?'
          onChange={(value) => setOpenToMentor(value)}
          xs={12}
          id='open-to-mentor'
          name='openToMentor'
        />
        <Grid item xs={9} />
        <Grid item xs={3} mb={4}>
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
