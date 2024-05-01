import { Autocomplete, Box, Button, Grid, List, ListItem, ListItemButton, TextField } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

type SkillSetProps = {
  onChange: (skills: string[]) => void;
}

export function SkillSet({ onChange }: SkillSetProps) {
  const [skills, setSkills] = useState<string[]>([]);
  const [textboxValue, setTextboxValue] = useState<string>('');
  const ref = useRef<HTMLInputElement>();
  const [autocompleteValues, setAutocompleteValues] = useState<string[]>([]);
  const [autocompleteDelay, setAutocompleteDelay] = useState<NodeJS.Timeout>();

  const addSkill = (e: any, value: string, preventDefault: boolean = true) => {
    if (!skills.includes(value)) {
      if (preventDefault) {
        e.preventDefault();
      }
      const newSkills = [value, ...skills];
      setSkills(newSkills);
      onChange(newSkills);
    }
    setTextboxValue('');
  }

  return (
    <>
      <Grid item xs={4}>
        <Autocomplete
          options={autocompleteValues}
          popupIcon={null}
          clearIcon={null}
          filterOptions={(autocompleteValues) => autocompleteValues}
          freeSolo
          renderInput={(params) => (
            <TextField
              {...params}
              inputRef={ref}
              fullWidth
              value={textboxValue}
              label='Skills'
              autoComplete='off'
              onKeyDown={(e) => {
                const target = e.target as HTMLInputElement;
                if (e.key.toLowerCase() === 'enter') {
                  addSkill(e, target.value);
                }
              }}
              onChange={(e) => {
                if (autocompleteDelay) {
                  clearTimeout(autocompleteDelay);
                  setAutocompleteDelay(undefined);
                }

                const skill = e.target.value;
                if (skill.length > 0) {
                  const timeoutId = setTimeout(() => {
                    fetch('http://localhost:8080/skills?' + new URLSearchParams({ skillSubstring: skill }))
                      .then((res) => res.json())
                      .then((json) => setAutocompleteValues(json));
                  }, 100);
                  setAutocompleteDelay(timeoutId);
                } else {
                  setAutocompleteValues([]);
                }
              }}
              onInput={(e) => {
                const target = e.target as HTMLInputElement;
                setTextboxValue(target.value);
              }}
            />
          )}
        />
        <Button
          fullWidth
          variant='contained'
          sx={{ mt: 1 }}
          onClick={(e) => {
            if (ref.current) {
              addSkill(e, ref.current.value, false);
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

                  const newSkills = [...start, ...end];
                  setSkills(newSkills);
                  onChange(newSkills);
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