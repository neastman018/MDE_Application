import * as React from 'react';
import { Box, Button, Collapse, Typography, Card, Dialog, DialogContent } from '@mui/material';
import Grid from '@mui/material/Grid2';
import InfoIcon from '@mui/icons-material/Info';

export default function OurSimBox({ isMobile }) {
  const [open, setOpen] = React.useState(false);

  const [showLog, setShowLog] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleExampleLogClick = () => {
    setShowLog(true);
  }

  const handleClose = () => setShowLog(false);


  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', width: '85vw', textAlign: 'center', margin: 'auto' }}>
      {/* Header Box with Title and Button */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: 2 }}>
        <Typography variant="h4" sx={{ padding: 2, fontWeight: 'bold' }}>
          Simulation Environment
        </Typography>
        {!isMobile && (
          <Button onClick={handleClick}>
            <InfoIcon />
          </Button>
        )}
      </Box>

      {/* Button below on mobile */}
      {isMobile && (
        <Button onClick={handleClick} sx={{ display: 'block', margin: 'auto' }}>
          <InfoIcon />
        </Button>
      )}

      {/* Collapsible Content Below */}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box component="main" sx={{ p: 1 }}>
          <Grid container spacing={4} sx={{ paddingBottom: 1 }}>
            {/* Content Box: Text on the left and image on the right */}
            <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100%' }}>
              {/* Left Section: Typography (Text) */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  padding: 2,
                  textAlign: { xs: 'center', sm: 'left' }, // Center text on mobile (xs), left on larger screens (sm and up)
                  width: { xs: '100%', md: '50%' }, // Full width on small screens, half width on larger screens
                }}
              >
                <Typography variant="body1" sx={{ paddingBottom: 3 }}>
                  The first step of our project was to create our own simulation environment. Due to how the customer&apos;s was set up we were unable to use their environment
                  to simulate our algorithm.
                </Typography>
                <Typography variant="body1" sx={{ paddingBottom: 3 }}>
                  Our customer gave us their floor plans which model real world warehouses by specifying the layout as nodes. Pickup, drop-off, and nodes available for the robots to
                  navigate on are specified in JSON files.
                </Typography>
                <Typography variant="body1" sx={{ paddingBottom: 3 }}>
                  We could take these JSON files and create our own graph of the nodes to animate the robot&apos;s movement during the simulation.
                </Typography>
              </Box>

              {/* Right Section: Image */}
              <Box
                sx={{
                  padding: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: { xs: '100%', md: '50%' }, // Full width on small screens, half width on larger screens
                }}
              >
                <Box
                  component="img"
                  sx={{
                    width: '100%', // Full width of the box
                    maxWidth: '700px', // Increase maxWidth to make the image larger
                    height: 'auto',
                    objectFit: 'contain', // Keep the aspect ratio intact
                  }}
                  alt="Simulation Environment Comparison"
                  src="simComparison.png"
                />
              </Box>
            </Card>
          </Grid>
        </Box>
        <Box component="main" sx={{ p: 1 }}>
          <Grid container spacing={4} sx={{ paddingBottom: 1 }}>
            {/* Content Box: Image on the left and text on the right */}
            <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100%' }}>
              {/* Left Section: Image */}
              <Box
                sx={{
                  padding: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: { xs: '100%', md: '50%' }, // Full width on small screens, half width on larger screens
                }}
              >
                <Box
                  component="img"
                  sx={{
                    width: '100%', // Full width of the box
                    maxWidth: '700px', // Increase maxWidth to make the image larger
                    height: 'auto',
                    objectFit: 'contain', // Keep the aspect ratio intact
                  }}
                  alt="Simulation Environment Demo"
                  src="custom_sim_env_looped.gif"
                />
              </Box>

              {/* Right Section: Typography (Text) */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  padding: 2,
                  textAlign: { xs: 'center', sm: 'right' }, // Center text on mobile (xs), left on larger screens (sm and up)
                  width: { xs: '100%', md: '50%' }, // Full width on small screens, half width on larger screens
                }}
              >
                <Typography variant="body1" sx={{ paddingBottom: 3 }}>
                  As we were developing algorithms we could use this environment to simulate them. Helper methods within the environment
                  would animate and save the run.
                </Typography>
                <Typography variant="body1" sx={{ paddingBottom: 3 }}>
                  Additional methods were also implemented to keep track of key metrics as well as produced simulation logs.
                </Typography>
                <Typography variant="body1" sx={{ paddingBottom: 3 }}>
                  The environmnet could not directly handle emergency stops and obstacle avoidance. Therefore if two robots try
                  to occupy the same node they cause an emergency stop. To get around this the robots switch nodes and continue on
                  their route and a time penatly is charged.
                </Typography>
                <Button
                  variant="contained"
                  onClick={handleExampleLogClick}
                  sx={{
                    width: '50%', // Button width is 50% of its parent
                    alignSelf: 'center', // Centers the button horizontally in the parent
                    textTransform: 'none'
                  }}
                >
                  Show Example Simulation Log
                </Button>

                <Dialog open={showLog} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogContent
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 4,
                  }}
                >
                  <Box
                    component="img"
                    src="example_simulation_log.png" // Replace with your image path
                    alt="A Star Example"
                    sx={{
                      maxWidth: "100%", // Ensures the image doesn't exceed dialog width
                      height: "auto",
                    }}
                  />
                </DialogContent>
              </Dialog>
              </Box>
            </Card>
          </Grid>
        </Box>

      </Collapse>
    </Card>
  );
}
