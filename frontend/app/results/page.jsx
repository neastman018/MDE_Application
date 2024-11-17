'use client'
import * as React from 'react';
import {Box, CssBaseline, Toolbar, useMediaQuery} from '@mui/material';
import { Experimental_CssVarsProvider, experimental_extendTheme as extendTheme} from '@mui/material/styles';
import DrawerAppBar from '../components/navbar';
import Graphs from '../components/graphdisplay';
import SimsDrawer from '../components/simsdrawer';
import FutureResearchBox from '../components/futureResearchBox';
import ConclusionsBox from '../components/conclusionsBox';

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

const conclusionCards = [
  {
    title: "A* Multi is the most effective for large numbers of robots",
    description: `
    Because A* multi is able to calculate the shortest path for multiple robots at once, 
    it is the most effective algorithm for large numbers of robots. We can see the when we graph number of robots vs total parcels
    per hour we can see that while the other algorithms are close, A* multi is sligtly better. Addtionally it requires far less
    emergency stops than the other algorithms.

    ` 
  },
  {
    title: "Direct Correlation between Number of Emergency Stop and Number of Robots",
    description: `
    In order to better improve the robots movement in high traffic areas or around obstalces, we were hoping to be able to 
    dynamically increase the resolution of nodes. This would of allowed the robots to move with great accuracy which would
    reduce robots interfering with each other.
    `
  },
  {
    title: "All Algorithms were Effective in Solving the Multi-Robot Pathing Problem",
    description: `
    While there were some differences in the effectiveness of the algorithms, all of them preformed similarly. While we did see slight improvements with A* multi
    both normal A* and D* were effective in routing the robots to there desired drop off locations. Therefore either  algorithm could be effective to improve Prime
    Vision's current system.
    `
  },
]


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
      <ConclusionsBox conclusionCards={conclusionCards} isMobile={isMobile}/>
    </Box>
    <Box sx={{ width:"75vw", marginX: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 2 }}>
      <FutureResearchBox futureResearchCards={futureResearchCards} isMobile={isMobile}/>
    </Box>
    </Experimental_CssVarsProvider>
  );
}
  