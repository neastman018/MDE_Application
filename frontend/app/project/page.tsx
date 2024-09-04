'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Experimental_CssVarsProvider, experimental_extendTheme as extendTheme} from '@mui/material/styles';
import ProjectComponent from './components/projectcomponents';
import ProjectComponentImgLeft from './components/projectcompentsimgleft';


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


const drawerWidth = 240;
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

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const ButtonList = () => {


  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Senior Design Project: F24-06
      </Typography>
      <Divider />
      <List>
        {navItems.map((item,index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Experimental_CssVarsProvider theme={theme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            F24-06: State of the Art Robotic Motion Planning
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item, index) => (
              <Button key={index} sx={{ color: '#fff' }} href={item.url}>
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
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
  