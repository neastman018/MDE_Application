'use client'
import * as React from 'react';

import {Box, CssBaseline, Grid} from '@mui/material';
import { Experimental_CssVarsProvider, experimental_extendTheme as extendTheme} from '@mui/material/styles';
import FeaturedPost from '../components/personcard';
import DrawerAppBar from '../components/navbar';



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

  const featuredPosts = [
    {
      title: 'Nic Cicerella',
      major: 'CPE - Machine Learning',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random?wallpapers',
      imageLabel: 'Image Text',
    },
    {
      title: 'Post title',
      major: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random?wallpapers',
      imageLabel: 'Image Text',
    },
    {
      title: 'Post title',
      major: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random?wallpapers',
      imageLabel: 'Image Text',
    },
    {
      title: 'Nick Eastman',
      major: 'EE - Energy and Power Electronic Systems',
      description: 'Test',
      image: 'Logo.png',
      imageLabel: 'Image Text',
    },
  ];

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const navItems = [
  {name:'Home', url:'.'}, 
  {name:'Project Info', url:'./project'},
  {name:'Approach', url:'./methodology'},
  {name:'Results', url:'./results'}
];

export default function AboutUsPage(props: Props) {
 
  return (
    <Experimental_CssVarsProvider theme={theme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <DrawerAppBar navItems={navItems} theme={theme}/>
      <Box component="main" sx={{ p: 10 }}>
        <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
        </Grid>
      </Box>
    </Box>
    W
    </Experimental_CssVarsProvider>
  );
}
