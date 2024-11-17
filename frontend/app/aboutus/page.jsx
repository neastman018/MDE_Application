'use client'
import * as React from 'react';

import {Box, CssBaseline, Grid} from '@mui/material';
import { Experimental_CssVarsProvider, experimental_extendTheme as extendTheme} from '@mui/material/styles';
import DrawerAppBar from '../components/navbar';
import AboutUsCard from '../components/aboutUsCard';


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
  {name:'Home', url:'.'}, 
  {name:'Project Info', url:'./project'},
  {name:'Approach', url:'./methodology'},
  {name:'Results', url:'./results'}
];

const aboutUsCards = [
  {
    name: "Nic Cicerella",
    major: "CPE - Machine Learning",
    role: "Administrator, Customer Contact, Simulation Envirnmonet Specialist",
    alt: "Nic Cicarella",
    image: "NicCicerlla.png",
    description: `
    Nic is studying computer engineering and is graduating in december of 2024. After graduation he will be focusing on hardware and cybersecurity 
    applications in corporate America. He wants to continue exploring new technologies and how they can be implimented to improve the fields of 
    cybersecurity and hardware.
    `,
  },
  {
    name: "Haley Rindfliesch",
    major: "CPE - Control Robotics and Autonomy",
    role: "Algorithm and Simulation Environment Developer",
    alt: "Haley Rindfleisch",
    image: "HaleyRindfliesch.png",
    description: `
    Haley is studying computer engineering and will be graduating in December of 2024. After graduation she will
    continue here studies at Virginia Tech, working towards her Masters of Science in Computer Engineering. She will 
    be working at the Center for Marine Autonomy and Robotics. She hopes to work on the control systems of robots. 
    Specifically, the movements of the robots so that they can move smoothly.
    `,
  },
  {
    name: "Mitchell Huynh",
    major: "CPE - Machine Learning",
    role: "Algorithm and Simulation Environment Developer",
    alt: "Mitchell Huynh",
    image: "Mitchell.png",
    description: `
    Mitchell is a senior studying computer engineering and will be graduation in December of 2024. After graduation
    he will be working as a software developer analyst at Freddie Mac. He is interested in eventually working with
    robotics, automation, or embedded systems, for medical applications.
    `,
  },  
  {
    name: "Nick Eastman",
    major: "EE - Energy and Power Electronic Systems",
    role: "Lead Web Developer",
    alt: "Nick Eastman",
    image: "NickEastman.jpg",
    description: `
    Nick is studying electrical engineering, focusing on energy and power electronic systems and will be graduating in May 2025.
    He hopes to return to full time engineering after graduation after a year spent on mission doing service work in the United States.
    He hopes to continue to improve his engineering and web development skills in the meantime before finishing out his degree on a strong note, 
    and use his skills on a variety of personal projects.
    `,
  },
  {
    name: "Kelley Andrews",
    major: "General Electrical: On Shore Wind Division (Retired)",
    role: "Major Design Experience Mentor",
    alt: "Kelley Andrews",
    image: "KelleyAndrews.png",
    description: `
    Graduated from the University of Maine with a degree in electrical engineering. She has over 30 year of industry experience with General Electric. She now works as a mentor
    for the major design experience course and SME for renewable projects at Virginia Tech, as well as assists in women in engineering out reach programs for high school students.
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
  // {
  //   name: "Henry Forsyth",
  //   major: "CPE - Controls Robotic and Autonomy",
  //   role: "Graduate Teaching Assistant",
  //   alt: "Henry Forsyth",
  //   image: "HenryForsyth.jpg",
  //   description: `
  //   Henry is a graduate student at Virginia Tech studying controls, robotics, and autonomy. He has been invaluable in helping the web design part of this project. Through his academic and professional experience
  //   he has alot of knowledge in the field of application development. Because of his help, the team not only only a visually appealing and fuctional website, but also one that follows industry standard.
  //   His help was invaluable in the completion of this project.
  //   `
  // }
]

export default function AboutUsPage() {
 
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
