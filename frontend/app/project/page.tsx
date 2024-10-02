'use client'
'use client'
import * as React from 'react';
import {Box, CssBaseline, Grid} from '@mui/material';
import { Experimental_CssVarsProvider, experimental_extendTheme as extendTheme} from '@mui/material/styles';
import DrawerAppBar from '../components/navbar';
import ProjectComponent from '../components/projectcomponents';
import ProjectComponentImgLeft from '../components/projectcompentsimgleft';


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


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}


const navItems = [
  {name:'Home', url:'.'}, 
  {name:'Approach', url:'./methodology'},
  {name:'Results', url:'./results'},
  {name:'About Us', url:'./aboutus'}
];

const components = [
  {
    heading: "The Problem",
    description: `
                Prime Vision is an autonomous robotics company that develops warehouse package sorting robots. 
                These robot recieve a package and can autonomous navigate to a specific drop off location.
                However, their current algorithm has room for improvement. Currently the robots operate in a 
                carosuel fashion instead of intelligenctly navigation to the drop off location.
                `,
    image: 'robot.jpg',
    imageLabel: 'Image Text',
    imageWidth: 240
  },
  {
    heading: "Project Description",
    description: `
                The goal of this project is to develop a new motion planning algorithm that will allow the robots to
                intelligently navigate to the drop off location. This will involve developing a new motion planning
                algorithm that will allow the robots to navigate around obstacles and other robots in the warehouse.
                `,
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
    imageWidth: 320 }
];

export default function ProjectPage(props: Props) {

  return (
    <Experimental_CssVarsProvider theme={theme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <DrawerAppBar navItems={navItems} theme={theme}/>
      <Box component="main" sx={{ p: 10 }}>
        <Grid container spacing={4}>
          <ProjectComponent key={"Project Description"} post={components[0]} />
          <ProjectComponentImgLeft key={"Project Description"} post={components[1]} />
        </Grid>
      </Box>
    </Box>
    </Experimental_CssVarsProvider>
  );
}
  