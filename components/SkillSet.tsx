import { Box, Button, Grid, List, ListItem, ListItemButton, TextField } from '@mui/material';
import { useRef, useState } from 'react';

type SkillSetProps = {
  onChange: (skills: string[]) => void;
}

export function SkillSet({ onChange }: SkillSetProps) {
  const [skills, setSkills] = useState<string[]>([]);
  const [textboxValue, setTextboxValue] = useState<string>('');
  const ref = useRef<HTMLInputElement>();

  return (
    <>
      <Grid item xs={4}>
        <TextField
          inputRef={ref}
          fullWidth
          value={textboxValue}
          label='Skills'
          autoComplete='off'
          onKeyDown={(e) => {
            const target = e.target as HTMLInputElement;
            if (e.key.toLowerCase() === 'enter') {
              if (!skills.includes(target.value)) {
                e.preventDefault();
                setSkills([target.value, ...skills]);
              }
              setTextboxValue('');
            }
          }}
          onInput={(e) => {
            const target = e.target as HTMLInputElement;
            setTextboxValue(target.value);
          }}
        />
        <Button
          fullWidth
          variant='contained'
          sx={{mt: 1}}
          onClick={() => {
            if (ref.current) {
              setSkills([ref.current.value, ...skills]);
              setTextboxValue('');
            }
          }}
        >
          Add
        </Button>
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