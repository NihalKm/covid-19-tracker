import { Box, Checkbox, FormControl, Grid, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, SelectChangeEvent, Stack } from '@mui/material';
import { GraphData } from '../utilities/types';
import { ThreeDots } from 'react-loader-spinner';

const StateFilter = ({label,value,options,onChange}:{label:string,value:string[],options:string[],onChange: (event: SelectChangeEvent<string[]>) => void;}) => {
    return (
      <FormControl sx={{ m: 1, width: 300 }} >
        <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
        <Select 
          MenuProps={{
          sx: {
            "&.MuiMenu-root": {
              maxHeight: "250px",
              maxWidth: "350px"
            }
          }}}
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={value}
          onChange={onChange}
          input={<OutlinedInput label={label} />}
          renderValue={(selected) => selected.join(', ')}
        >
          <MenuItem value={"Select All"}>
            <Checkbox checked={options.length===value.length} />
            <ListItemText primary={"Select All"} />
          </MenuItem>
          {options.map((name:string) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={value.includes(name)} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    )
}

const StatsSection = ({graphData,stateFilterApplied}:{graphData:GraphData,stateFilterApplied:Boolean}) => {
    const { totalCases, activeCases, recoveredCases, deaths } = graphData;

    type Label = 'Active' | 'Total' | 'Recovered' | 'Deaths';

    const colorMap: Record<Label, string> = {
      'Active': "#ffcc99",     
      'Total': "#66b3ff",
      'Recovered': "#99ff99",
      'Deaths': "#ff9999"
    };
    
    interface StatBoxProps {
      label: Label;             // Use the defined Label type here
      value: number;
    }

    const StatBox: React.FC<StatBoxProps> = ({ label, value }) => {
        return (
            <Grid item xs={6} p={1.5} >
                <Box sx={{fontSize:"12px",height:"100%", background:colorMap[label], borderRadius:"10px", color:"#a18156", boxShadow:"0px 0px 0px 1px white"}}>
                    <p>{label}</p>
                    <strong>{value}</strong>
                    <p>{stateFilterApplied? "In India" : "Selected States"}</p>
                </Box>
            </Grid>
        )
    }
    return (
        <Grid container flex={1}>
            <StatBox label='Active' value={activeCases} />
            <StatBox label='Total' value={totalCases} />
            <StatBox label='Recovered' value={recoveredCases} />
            <StatBox label='Deaths' value={deaths} />
        </Grid>
    )
}

const Loader = () => {
  return (
    <Stack sx={{background:"#e5e1e1",width:"100%",height:"100%",alignItems:"center",justifyContent:"center"}}>
      <ThreeDots height="80" width="80" radius="9" color="#61c4fb" ariaLabel="loading" /> 
    </Stack>
  )
}
export { StateFilter, StatsSection, Loader };