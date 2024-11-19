import * as React from 'react';
import { Box, Button, Collapse, Typography, Card } from '@mui/material';
import Grid from '@mui/material/Grid2';
import InfoIcon from '@mui/icons-material/Info';

export default function SimEnvBox({ isMobile }) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', width: '85vw', textAlign: 'center' }}>
      {/* Header Box with Title and Button */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: 2 }}>
        <Typography variant="h4" sx={{ padding: 2, fontWeight: 'bold' }}>
          Customer Simulation Environment
        </Typography>
        {!isMobile && ( // Change the Location of the info button on mobile phones to be below
          <Button onClick={handleClick}>
            <InfoIcon />
          </Button>
        )}
      </Box>
      {isMobile && (
        <Button onClick={handleClick}>
          <InfoIcon />
        </Button>
      )}

      {/* Collapsible Content Below */}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box component="main" sx={{ p: 1 }}>
          <Grid container spacing={4} sx={{ paddingBottom: 1 }}>
            <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100vw' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 2, textAlign: 'left'}}>
                <Typography variant="body1" sx={{ paddingBottom: 5 }}>
                  The customer has their own simulation environment to test their robots on actual floor plans. 
                  The environment simulates not only the robot&apos;s movements but also
                  their physics, package pick-ups, and drop-offs. The environment is designed to closely resemble the robots&apos; actual working environment.
                </Typography>
                <Typography variant="body1">
                  Each floor plan is represented as a list of nodes, which represents pick-up, drop-off, and available spots for the robots
                  to occupy. Robots can move between nodes as they traverse the floor plan.
                </Typography>
              </Box>
              <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Box
                  component="img"
                  sx={{ width: { xs: '100%', md: '100%' }, height: 'auto' }}
                  alt="Prime Vision Robots"
                  src="simEnvironment.png"
                />
              </Box>
            </Card>
          </Grid>
        </Box>
      </Collapse>
    </Card>
  );
}
