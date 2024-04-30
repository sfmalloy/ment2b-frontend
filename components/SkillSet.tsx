import { Box, Grid, List, ListItem, ListItemButton, TextField } from '@mui/material';
import { useState } from 'react';

type SkillSetProps = {
  onChange: (skills: string[]) => void;
}

export default function SkillSet({ onChange }: SkillSetProps) {
  const [skills, setSkills] = useState<string[]>([]);
  const [textboxValue, setTextboxValue] = useState<string>('');

  return (
    <>
      <Grid item xs={4}>
        <TextField
          fullWidth
          value={textboxValue}
          label='Skills'
          autoComplete='off'
          onKeyDown={(e) => {
            const target = e.target as HTMLInputElement;
            if (e.key.toLowerCase() === 'enter') {
              if (!skills.includes(target.value)) {
                setSkills([target.value, ...skills]);
              } else {

              }
            }
          }}
          onInput={(e) => {
            const target = e.target as HTMLInputElement;
            setTextboxValue(target.value);
          }}
        />
      </Grid>
      <Grid item xs={8}>
        <Box border={1} borderRadius={1} p={1} height={200} overflow={'auto'}>
          {skills.length > 0 ? (
            <List>
              {skills.map((e) => (
                <ListItemButton key={e} onClick={() => {
                  const skillsCopy = [...skills];
                  const idx = skillsCopy.findIndex((val) => val === e);
                  const start = skillsCopy.slice(0, idx);
                  const end = skillsCopy.slice(idx + 1);
                  setSkills([...start, ...end]);
                  onChange(skills);
                }}>
                  {e}
                </ListItemButton>
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
    </>
  )
}