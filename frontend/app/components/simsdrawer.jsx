import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import WestIcon from '@mui/icons-material/West';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import DeleteIcon from '@mui/icons-material/Delete';
import UploadIcon from '@mui/icons-material/Upload';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import DragNDrop from './uploadpopup';


const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [files, setFiles] = React.useState([]);


  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClearClick = () => {
    if (window.confirm('Do you want to delete all the Simulation Logs')) {
      const password = prompt('Please enter the password to clear logs:');
      if (password === 'ClearLogs') {
        alert('All logs have been cleared');
      } else {
        alert('Incorrect password. Logs have not been cleared.');
      }
    }
  };


  const [showDragNDrop, setShowDragNDrop] = React.useState(false);

  const handleUploadClick = () => {
    setShowDragNDrop(!showDragNDrop);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box sx={{ position: 'absolute', paddingTop: '85px', paddingLeft: '15px' }}>
        <Button
          variant="contained"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            mr: 2,
            height: '40px',
            display: 'flex',
            alignItems: 'center', // Align icon and text vertically
            justifyContent: 'center', // Ensure content is centered
            whiteSpace: 'nowrap', // Prevent text wrapping
            border: '2px solid darkgrey', // Dark grey border
            backgroundColor: 'lightgrey', // Light grey fill
            color: 'black', // Text color
            textTransform: 'none', // Prevent text from being all caps
            '&:hover': {
              backgroundColor: 'grey', // Slightly darker grey on hover
            },
          }}
        >
          <MenuOpenIcon sx={{ marginRight: '8px', color: 'black' }} /> {/* Icon color to match text */}
          <Typography sx={{ fontSize: '12px' }}>Show Simulation Logs</Typography>
        </Button>
      </Box>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader />
        <ListItemIcon
          onClick={handleDrawerClose}
          sx={{ height: '40px', minHeight: '40px', padding: '16px', justifyContent: 'flex-end', alignContent: 'center' }}
        >
          <Typography sx={{ color: 'grey', fontWeight: 'bold', fontSize: '16px' }}>
            <WestIcon />
          </Typography>
        </ListItemIcon>
        <Divider />
        <List>
          <ListItemButton onClick={handleClearClick}>
            <DeleteIcon sx={{ marginRight: '16px' }} /> {/* Add margin to create indent */}
            <Typography>Clear Logs</Typography>
          </ListItemButton>
          <ListItemButton onClick={handleUploadClick}>
            <UploadIcon sx={{ marginRight: '16px' }} /> {/* Add margin to create indent */}
            <Typography>Upload Logs</Typography>
          </ListItemButton>
          <Popup open={showDragNDrop} onClose={() => setShowDragNDrop(false)} modal sx={{ borderTopLeftRadius: '16px', borderTopRightRadius: '16px',}}>
            <DragNDrop onFilesSelected={setFiles} />
          </Popup>
        </List>
        <Divider />
      </Drawer>
      <Main open={open}></Main>
    </Box>
  );
}
