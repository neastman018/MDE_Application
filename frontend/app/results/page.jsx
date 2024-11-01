'use client'
import * as React from 'react';
import {Box, CssBaseline, Toolbar} from '@mui/material';
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
    title: "Create Custom Simulation Environment",
    description: `
    Due to the framework of the customers simulation environment, access permissions and limited usablity, we experienced a great increase in scope. A key objectice
    was to create our own simulation environment to test our multi robotic path planning algorithms in. Our simulation environment seeks to mimic the customer simulation
    as close as possible.
    ` 
  },
  {
    title: "Research and Implement Multi-Robot Path Planning Algorithms",
    description: `
    We researched the cutting edge of multi-robot path planning algorithms to find solutions to best fit the customers needs. We then implemented them in our simulation environment
    to test their effectiveness against key, quantitative metrics.
    `
  },
  {
    title: "Optimize Robot Path Planning",
    description: `
    We optimized the robots path planning to reduce the time it takes to deliver packages. We did this by implemening cutting edge solutions to multi-robotic path planning algorithms.
    We hoped to implement local path replanning and obstacle avoidance, however due to changes a scope and impending deadlines we were not able to pursue these avenues.
    `
  },
  {
    title: "Create a Web Application to Showcase Our Results",
    description: `
    We created a web application to showcase our results. Our hopes is that other researchers and developers tackling similar problems can use our reasearch to further their own projects.
    `
  },
  {
    title: "Create Graphics to Visualize Our Results",
    description: `
    A key customer requirement was to create graphics that would help viewers understand our data and key takeaways. These graphics were created to update automatically with new data, 
    as well as be interactive to allow for a more engaging experience.
    `
  },
  {
    title: "Have a Database to Store Simulation Data",
    description: `
    All of our simulation logs are stored on a MongoDB database. This allows us long term storage as well as easy access to the data. Addtionally this database can be manipulated
    through the website, to upload, store, view and delete simulation logs.
    `
  } 
]
export default function ResultsPage() {


  return (
    <Experimental_CssVarsProvider theme={theme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <DrawerAppBar navItems={navItems} theme={theme}/>
      <SimsDrawer />
      <Toolbar />
      <Graphs />
    </Box>
    <Box sx={{ width:"75vw", marginX: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 2 }}>
      <SlideDownBox futureResearchCards={futureResearchCards}/>
    </Box>
    </Experimental_CssVarsProvider>
  );
}
  