'use client'
import * as React from 'react';
import { Box, CssBaseline, Typography, Card, useMediaQuery} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Experimental_CssVarsProvider, experimental_extendTheme as extendTheme } from '@mui/material/styles';
import DrawerAppBar from '../components/navbar';
import FlipCardPicture from '../components/picflipcard';
import FlipCardComponent from '../components/problemflipcards';
import SimFlipCard from '../components/simflipcard';
import SimEnvBox from '../components/simulationEnvBox';


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
});


const navItems = [
  { name: 'Home', url: '.' },
  { name: 'Approach', url: './methodology' },
  { name: 'Results', url: './results' },
  { name: 'About Us', url: './aboutus' }
];

const picCards = [
  {
    frontPicture: 'RobotsOperating.jpg',
    backPicture: 'RobotBreakdown.png',
  }
];

const simCards = [
  {
    frontTitle: 'Customer Simulation Environment',
    frontPicture: 'custom_sim_env_looped.gif',
    backTitle: 'Our Custom Simulation Environment',
    backPicture: 'custom_sim_env_looped.gif',
  }
]

const overallCards = [
  {
    title: "The Problem",
    description: `
        Prime Visions current robotic path planning system is inefficient and causes bottlenecks in the warehouse.
        This causes the robots to deliver less packages which results in more robots or time required to
        devlier packages.
        `,
  },
  {
    title: "Our Solution",
    description: `
        We investigated different multi-robot path planning algorithms and strategies to increase the robot's efficiency.
        Through this process we hope to be able to make recommendations to Prime Vision to improve their path planning
        system and increase package sorting speeds. 
        `,
  },
];

const problemCards = [
  {
    title: "Bottle Necks",
    description: "When paths are made, other robot paths are not taken into account, causing robots to bottle neck in high traffic areas.",
  },
  {
    title: "Inefficient Path Planning",
    description: "Robots do not take the most efficient path to their destination. The floor plans have contraints that force the robots to take longer paths.",
  },
  {
    title: "No Obstacle Avoidance",
    description: "Robots can detect obstacles but have no way to route around them. Currently they will stop and wait for the obstacle to move, which causes delays.",
  },
];

const objectiveCards = [
  {
    title: "Create Custom Simulation Environment",
    description: `
    Due to the framework, access permissions and limited usablity of the customers simulation environment, we were unable to use it for our testing.
    Therefore our scope greatly increased as we made our own custom simulation environment that models the robots'
    real world operation as close as possible.
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
    We hoped to implement local path replanning and obstacle avoidance, however due to changes in scope and impending deadlines we were not able to pursue these avenues.
    `
  },
  {
    title: "Create a Web Application to Showcase Our Results",
    description: `
    We created a web application to showcase our results. Our hope is that other researchers and developers tackling similar problems can use our reasearch to further their own projects.
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
export default function ProjectPage() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Experimental_CssVarsProvider theme={theme}>
        <CssBaseline />
        <DrawerAppBar navItems={navItems} theme={theme} />
        <Card sx={{ display: 'flex', flexDirection: 'column', width: '100%', textAlign: 'center', paddingTop: 15, justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center', padding: 2 }}>
              {overallCards.map((component, index) => (
                <Grid item xs={12} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <FlipCardComponent key={index} post={component} width={"400px"} height={"200px"} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Card>
        <Box component="main" sx={{ p: 10 }}>
          <Grid container spacing={4} sx={{ paddingBottom: 10 }}>
            <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100vw' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 2 }}>
                <Typography variant="h4">
                  About Prime Vision
                </Typography>
                <Typography variant="body1">
                  Prime Vision is a global leader in computer vision integration and robotics for logistics and fulfillment.
                  They operate fleets of autonomous package sorting robots to automate warehouses across the nation and abroad.
                </Typography>
              </Box>
              <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Box component="img" sx={{width: { xs: '100%', md: '100%' }, height: 'auto'}}
                  alt="Prime Vision Robots"
                  src="autographic.png"
                />
              </Box>
            </Card>
          </Grid>

          <Grid container spacing={4} sx={{ paddingBottom: 0 }}>
            <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100vw' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 2 }}>
                <Typography variant="h4">
                  About the Robots
                </Typography>
                <Typography variant="body1">
                  Prime Vision operates autonomous robots to deliver packages to specified drop-off locations. 
                  These robots follow a specified path given by a central server, who has a floor plan of the warehouse.
                  They have LIDAR sensors that can detect obstacles and two motored wheels that allow it to make tight turns
                  and move around the warehouse.
                </Typography>
              </Box>
              <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <FlipCardPicture post={picCards[0]} />
              </Box>
            </Card>
          </Grid>
         </Box>  
         <Box component="main" sx={{ p: 0}}>
          <Box sx={{ padding: 2, justifyContent: 'center', textAlign: 'center' }}>
              <Typography variant="h4" sx={{ padding: 2, fontWeight: 'bold' }}>
                Current Problems
              </Typography>
              <Grid 
                container 
                spacing={2} 
                sx={{ 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  padding: 2 
                }}
              >
                {problemCards.map((component, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <FlipCardComponent key={index} post={component} width={"400px"} height={"200px"} />
                  </Grid>
                ))}
              </Grid>
            </Box>


            <Box sx={{ padding: 2, justifyContent: 'center', textAlign: 'center' }}>
              <Typography variant="h4" sx={{ padding: 2, fontWeight: 'bold' }}>
                Project Objectives
              </Typography>
              <Grid 
                container 
                spacing={2} 
                sx={{ 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  padding: 2 
                }}
              >
                {objectiveCards.map((component, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <FlipCardComponent key={index} post={component} width={"400px"} height={"275px"} />
                  </Grid>
                ))}
              </Grid>
            </Box>
        </Box>

        <Box component="main" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2, width: '100%' }}>
          <SimEnvBox isMobile={isMobile} />
        </Box>


    </Experimental_CssVarsProvider>
  );
}
