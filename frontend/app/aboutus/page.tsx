'use client'
import * as React from 'react';

import {Box, CssBaseline, Grid} from '@mui/material';
import { Experimental_CssVarsProvider, experimental_extendTheme as extendTheme} from '@mui/material/styles';
import FeaturedPost from '../components/personcard';
import DrawerAppBar from '../components/navbar';
import AboutUsCard from '../components/aboutuscard';


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

const aboutUsCards = [
  {
    name: "Nick Eastman",
    major: "EE - Energy and Power Electronic Systems",
    role: "Web Delevoper and Heart of the team",
    alt: "Nick Eastman",
    image: "NickEastman.jpg",
    description: `
    Nick is studying electrical engineering, focusing on energy and power electronic systems. He will be graduating in May 2025.
    You may be wondering what a power electronics guy is doing on this CS project. You would not be alone, as Nick was wondering about that too!
    The answer is learning multiple software languages, several frameworks, and how to be a web developer. He looks forward to taking a break from
    electrical engineering to pursue ministry serving the homeless or the youth.
    `,
  },
  {
    name: "Nic Cicerella",
    major: "CPE - Machine Learning",
    role: "Administrator, Customer Contact, Simulation Envirnmonet Specialist",
    alt: "Nic Cicarella",
    image: "NicCicerlla.png",
    description: `
    This cat
    `,
  },
  {
    name: "Haley Rindfliech",
    major: "CPE - Control Robotics and Autonomy",
    role: "Algorithm and Simulation Environment Developer",
    alt: "Haley Rindfleisch",
    image: "HaleyRindfleisch.png",
    description: `
    Something about General Motors probably and IEEE and open bar at expo
    `,
  },
  {
    name: "Mitchell Huynh",
    major: "CPE - Machine Learning",
    role: "Algorithm and Simulation Environment Developer",
    alt: "Mitchell Huynh",
    image: "Mitchell.png",
    description: `
    From Nova and I cannot spell his name correctly off the top of my head
    `,
  },  
  {
    name: "Kelley Andrews",
    major: "General Electrical: On Shore Wind Divion (Retired)",
    role: "Major Design Experience Mentor",
    alt: "Kelley Andrews",
    image: "KelleyAndrews.png",
    description: `
    Graduated from the University of Maine with a degree in electrical engineering. She has over 30 year of industry experience with General Electric. She now works as a mentor
    for the major design experience course at Virginia Tech, as well as assists in women in engineering out reach programs for high school students.
    `,
  },
  {
    name: "Ryan Williams",
    major: "Assistant Professor of Elecrical and Computer Engineering",
    role: "Subject Matter Expert",
    alt: "RyanWilliams",
    image: "RyanWilliams.jpg",
    description: `
    Dr. Williams is a professor at Virginia Tech who has done research in multi robotic pathing algorithms. He currently works in the Coordination At Scale (CAS) lab at Virginia Tech.
    His technical knowledge has been invaluable on this project in helping us pursure the correct direction for the customer.
    `,
  },
  {
    name: "Henry Forsyth",
    major: "CPE - Controls Robotic and Autonomy",
    role: "Graduate Teaching Assistant",
    alt: "Henry Forsyth",
    image: "HenryForsyth.jpg",
    description: `
    Henry is a graduate student at Virginia Tech studying controls, robotics, and autonomy. He has been invaluable in helping the web design part of this project. His is a very incredible
    engineer and an even better man. He has been a big help in the project and has been a great friend to Nick Eastman. He was invaluable in directing the big picture structure of the
    website, saving the team hours of work by helping prevent us from pursueing deadends or suboptimal solutions.
    `
  }
]

export default function AboutUsPage(props: Props) {
 
  return (
    <Experimental_CssVarsProvider theme={theme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <DrawerAppBar navItems={navItems} theme={theme}/>
      <Box component="main" sx={{ p: 10, paddingTop: "100px" }}>
        <Grid container spacing={4}>
            {aboutUsCards.map((post) => (
              <AboutUsCard key={post.name} post={post} width='250px' height='300px'/>
            ))}
        </Grid>
      </Box>
    </Box>

    </Experimental_CssVarsProvider>
  );
}
