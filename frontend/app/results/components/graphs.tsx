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

export default function DataGraph(){
    return (
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
        
    );
}
