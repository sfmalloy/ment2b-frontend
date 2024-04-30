import { FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from '@mui/material';

type SimpleRadioGroupProps = {
  onChange: (value: boolean) => void;
  question: string;
  name: string;
  xs: number;
  id: string;
}

export default function SimpleRadioGroup(props: SimpleRadioGroupProps) {
  return (
    <Grid item xs={props.xs}>
      <FormControl required>
        <FormLabel id={`${props.id}-label`}>{props.question}</FormLabel>
        <RadioGroup
          aria-labelledby='open-to-mentor-label'
          defaultValue=''
          name='openToMentor'
          row
        >
          <FormControlLabel value={true} control={<Radio onInput={() => props.onChange(true)} />} label='Yes' />
          <FormControlLabel value={false} control={<Radio onInput={() => props.onChange(false)} />} label='No' />
        </RadioGroup>
      </FormControl>
    </Grid>
  )
}
