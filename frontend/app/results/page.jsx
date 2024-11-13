'use client'
import * as React from 'react';
import {Box, CssBaseline, Toolbar, useMediaQuery} from '@mui/material';
import { Experimental_CssVarsProvider, experimental_extendTheme as extendTheme} from '@mui/material/styles';
import DrawerAppBar from '../components/navbar';
import Graphs from '../components/graphdisplay';
import SimsDrawer from '../components/simsdrawer';
import SlideDownBox from '../components/revealbox';

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


const navItems = [
  {name:'Home', url:'.'}, 
  {name:'Project Info', url:'./project'},
  {name:'Approach', url:'./methodology'},
  {name:'About Us', url:'./aboutus'}
];


const futureResearchCards = [
  {
    title: "Regional Rerouting on Encountering Obstacles",
    description: `
    We would like to have implemented more sophiscated rerouting techniques to better avoid obstacles. This is one of the problems
    that currently slows down the robots significantly. However after our change in scope we were not able to pursue
    the avenues we outlined in our initial research.
    ` 
  },
  {
    title: "Dynamic Node Resolution",
    description: `
    In order to better improve the robots movement in high traffic areas or around obstalces, we were hoping to be able to 
    dynamically increase the resolution of nodes. This would of allowed the robots to move with great accuracy which would
    reduce robots interfering with each other.
    `
  },
  {
    title: "Algorithm to Choose Optimal Pickup Location",
    description: `
    Within a warehouse there are multiple places a robot can pick up a package. We hoped to implement and algorithm that would
    `
  },
]
export default function ResultsPage() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <Experimental_CssVarsProvider theme={theme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <DrawerAppBar navItems={navItems} theme={theme}/>
      {!isMobile && <SimsDrawer />}
      <Toolbar />
      <Graphs isMobile={isMobile}/>
    </Box>
    <Box sx={{ width:"75vw", marginX: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 2 }}>
      <SlideDownBox futureResearchCards={futureResearchCards} isMobile={isMobile}/>
    </Box>
    </Experimental_CssVarsProvider>
  );
}
  