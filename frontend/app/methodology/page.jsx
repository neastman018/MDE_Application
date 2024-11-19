'use client'
import * as React from 'react';
import { Box, CssBaseline, Grid, Typography, Card, useMediaQuery, Toolbar} from '@mui/material';
import { Experimental_CssVarsProvider, experimental_extendTheme as extendTheme} from '@mui/material/styles';
import  AlgorithmTabs from '../components/tabs';
import DrawerAppBar from '../components/navbar';
import FlipCardComponent from '../components/problemflipcards';
import OurSimBox from '../components/ourSimBox'
const theme = extendTheme({
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: '#630031',
          },
        },
      },
      dark: {
        palette: {
          primary: {
            main: '#000',
          },
        },
      },
    },
    // ...other properties
  });

  const algorithmCards = [
    {
      title: "A*",
      description: `
            A* is the core of our pathing algorithm. it starts by initializing a list of nodes. then finding the cost to travers each node.
            then will traverse the graph with the lowest cost
          `,
    },
    {
      title: "D*",
      description: `
          D* description
          `,
    },
    {
      title: "Random Tree",
      description: `
        random tree description
      `,
    }
  
  ];
const navItems = [
  {name:'Home', url:'.'}, 
  {name:'Project Info', url:'./project'},
  {name:'Results', url:'./results'},
  {name:'About Us', url:'./aboutus'}
];

export default function ApproachPage() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <Experimental_CssVarsProvider theme={theme}> 

      <Box sx={{ display: 'flex', p: 3, flexDirection: 'column'}}>
        <CssBaseline />
        <DrawerAppBar navItems={navItems} theme={theme}/>
        <Toolbar />
      </Box>  
      <Box component="main" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2, width: '100%' }}>
        <OurSimBox isMobile={isMobile}/>
      </Box>
    <Box sx={{ display: 'flex', p: 3, flexDirection: 'column', textAlign: 'center'}}>
      <Typography variant="h4" sx={{ padding: 2, fontWeight: 'bold' }}>
        Algorithms Simulated
      </Typography>
    </Box>

    <AlgorithmTabs isMobile={isMobile}/>

  
    </Experimental_CssVarsProvider>
  );
}

  