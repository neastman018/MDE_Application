'use client'
import * as React from 'react';
import { Box, CssBaseline, Grid, Typography, Card, useMediaQuery, Toolbar} from '@mui/material';
import { Experimental_CssVarsProvider, experimental_extendTheme as extendTheme} from '@mui/material/styles';
import  AlgorithmTabs from '../components/tabs';
import DrawerAppBar from '../components/navbar';
import FlipCardComponent from '../components/problemflipcards';
import SimFlipCard from '../components/simflipcard';
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
            then will traverse the graph with the lowest cost.
          `,
    },
    {
      title: "D*",
      description: `
          D* is an improvement on A*. Where it will continuously update its path as changes in the environment are detected. Whereas A* will
          need to recalculate the entire path.
          `,
    },
    {
      title: "Rapidly Exploring Random Trees",
      description: `
        Random tree incrementally builds a tree of nodes in a random fashion. then dynamically connects each node based on the closest neightbors
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
  return (
    <Experimental_CssVarsProvider theme={theme}> 
      <Box component="main" sx={{ p: 0}}>
          <Box sx={{ padding: 2, justifyContent: 'center' }}>
          <Grid container spacing={4} sx={{ paddingBottom: 10, paddingTop: 10, justifyContent: 'center',textAlign: 'center'}}>
            <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100vw', textAlign: 'center' }}>
              <Box sx={{ padding: 2, flexDirection: "row", justifyContent: 'center' }}>
              <Typography variant="h4" sx={{ padding: 0, fontWeight: 'bold',  justifyContent: 'center' }}>
                Algorithms
              </Typography>
              <Grid container spacing={2} sx={{ padding: 2 }}>
                {algorithmCards.map((component, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <FlipCardComponent key={index} post={component} width={"400px"} height={"200px"}/>
                  </Grid>
                ))}
              </Grid>
              </Box>
            </Card>
          </Grid>
          </Box>
        </Box>  

      <Box sx={{ display: 'flex', p: 3, flexDirection: 'column'}}>
        <CssBaseline />
        <DrawerAppBar navItems={navItems} theme={theme}/>
        <Toolbar />
        <AlgorithmTabs />
      </Box>  
  

    </Experimental_CssVarsProvider>
  );
}

  