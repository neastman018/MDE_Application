'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Experimental_CssVarsProvider, experimental_extendTheme as extendTheme} from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface selectProps {
  dropdown: {
    label: string;
    options: string[];
  }
}

const dropdowns = [
    {
      label: 'Indepedent Variable',
      options: ['Algorithm', 'Number of Robots', 'Number of Packages', 'Number of Obstacles', 'Number of Emergency Stops']
    },
    {
      label: 'Dependent Variable',
      options: ['Packages per Hour per Robot', 'Avgerage Time Per Package', 'Emergency Stops per Obstalce']
  
    }
  ]


function IndSelect({ setIndVar }: { setIndVar: React.Dispatch<React.SetStateAction<string>> }) {
  const [indValue, setValue] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
    setIndVar(event.target.value as string);
  };

  return (
    <Box sx={{ width: '100%', display: 'flex'}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Independent Variable</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={indValue}
          label="Independent Variable"
          onChange={handleChange}
        >
            <MenuItem value={'Algorithm'}>Algorithm</MenuItem>
            <MenuItem value={'Number of Robots'}>Number of Robots</MenuItem>
            <MenuItem value={'Number of Packages'}>Number of Packages</MenuItem>
            <MenuItem value={'Number of Obstacles'}>Number of Obstacles</MenuItem>
            
        </Select>
      </FormControl>
    </Box>
  );
}


function DepSelect({ setDepVar }: { setDepVar: React.Dispatch<React.SetStateAction<string>> }) {
    const [depValue, setValue] = React.useState('');
  
    const handleChange = (event: SelectChangeEvent) => {
      setValue(event.target.value as string);
      setDepVar(event.target.value as string);
    };
  
    return (
      <Box sx={{ width: '100%', display: 'flex'}}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Dependent Variable</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={depValue}
            label="Dependent Variable"
            onChange={handleChange}
          >
            <MenuItem value={'Packages per Hour per Robot'}>Packages per Hour per Robot</MenuItem>
            <MenuItem value={'Average Time Per Package'}>Average Time Per Package</MenuItem>
            <MenuItem value={'Emergency Stops per Obstacle'}>Emergency Stops per Obstacle</MenuItem>

              
          </Select>
        </FormControl>
      </Box>
    );
  }



export default function Graphs() {
    const [indVar, setIndVar] = React.useState('');
    const [depVar, setDepVar] = React.useState('');

    return (
        <Box
        sx={{
            paddingTop: '10vh', // Adjust the top padding as needed
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', // Full viewport height
            width: '100vw', // Full viewport width
            flexDirection: 'column', // Stack items vertically        
            shadow: 8, // Optional: for a shadow effect
        }}
        >
        <Box
            sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '70vw',  // Adjust the width as needed
            height: '70vh', // Adjust the height as needed
            border: '2px solid #ccc', // Optional: for visual reference
            borderRadius: '8px', // Optional: for rounded corners
            overflow: 'hidden', // Ensure the image fits within the box
            mb: 2, // Margin bottom to separate from BasicSelect
            }}
        >
            <img 
            src="seaborn_plot.png" 
            alt="Centered" 
            style={{ maxWidth: '100%', maxHeight: '100%' }} 
            />
        </Box>
        
        
        <Box component="main" sx={{ p: 2, display: 'flex', gap: 2, width: '70vw' }}>
            <IndSelect  setIndVar={setIndVar}/>
            <DepSelect setDepVar={setDepVar}/>
        </Box>
        <Typography variant="h6" sx={{ my: 2 }}>
            Independent Variable: {indVar}
        </Typography>
        <Typography variant="h6" sx={{ my: 2 }}>
            Dependent Variable: {depVar}
        </Typography>
        
        </Box>
    )
    

}
