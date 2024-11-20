import * as React from 'react';
import { Box, Typography, Card } from '@mui/material';
import Grid from '@mui/material/Grid2';

export default function AStarMultiBox() {
    return (
        <Box component="main" sx={{ p: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Grid container spacing={4} sx={{ paddingBottom: 1, justifyContent: 'center' }}>

            {/* First Card: Title above the text and image side by side */}
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column', // Stack the title on top
                width: { xs: '100%', md: '75%' },
                alignContent: 'center',
                justifyContent: 'center', // Center content inside the card
                boxShadow: 3, // Optional: add a shadow to make it stand out more
                margin: 'auto', // Center the card horizontally
                padding: 2, // Add padding inside the card
              }}
            >
              {/* Title: Algorithms Simulated */}
              <Typography variant="h4" sx={{ padding: 2, fontWeight: 'bold', textAlign: 'center',  fontSize: '150%' }}>
                A* Multi
              </Typography>

              {/* Content: Text on the left and image on the right */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' }, // Row layout on larger screens, column on smaller screens
                  width: '100%',
                  justifyContent: 'center', // Center content inside the box
                  alignItems: 'center',
                }}
              >
                {/* Left Section: Text */}
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: 2,
                    textAlign: { xs: 'center', sm: 'left' }, // Center text on mobile, left on larger screens
                    width: { xs: '100%', md: '50%' },
                  }}
                >
                  <Typography variant="body1" sx={{ paddingBottom: 3 }}>
                    A* Multi is a expansion onto A* but specifically designed with multiple agents in mind.
                  </Typography>
                  <Typography variant="body1" sx={{ paddingBottom: 3 }}>
                    Each robot uses A* to calculate its path, and the algorithm will loop through all paths that need to be taken.
                  </Typography>
                  <Typography variant="body1" sx={{ paddingBottom: 3 }}>
                      If it detects a conflict between two robots, it will blacklist that node from the path and recalculate until a clear path is found.
                  </Typography>
                  <Typography variant="body1" sx={{ paddingBottom: 3 }}>
                      This continues until all clear paths are found.
                  </Typography>
                  <Typography variant="body1" sx={{ paddingBottom: 3 }}>
                      Unfortunately this does not prevent all emergency stops as sometimes the algorithm will think the path is clear when it is not.
                      However we could clearly see a clear reduction in emergency stops.
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
                    width: { xs: '100%', md: '50%' },
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
                    alt="AstarMulti.png"
                    src="AstarMulti.png"
                  />
                </Box>
              </Box>
            </Card>

            {/* Second Card: Title above the text and image side by side */}
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column', // Stack the title on top
                width: { xs: '100%', md: '75%' },
                alignContent: 'center',
                justifyContent: 'center', // Center content inside the card
                boxShadow: 3, // Optional: add a shadow to make it stand out more
                margin: 'auto', // Center the card horizontally
                padding: 2, // Add padding inside the card
              }}
            >
              {/* Title: Algorithms Simulated */}
              <Typography variant="h4" sx={{ padding: 2, fontWeight: 'bold', textAlign: 'center',  fontSize: '125%' }}>
                Example in Our Environment
              </Typography>

              {/* Content: Text on the left and image on the right */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' }, // Row layout on larger screens, column on smaller screens
                  width: '100%',
                  justifyContent: 'center', // Center content inside the box
                  alignItems: 'center',
                }}
              >
                {/* Right Section: Image */}
                <Box
                  sx={{
                    padding: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: { xs: '100%', md: '50%' },
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
                    alt="AStarMultiEx.gif"
                    src="AStarMultiEx.gif"
                  />
                </Box>
              </Box>
            </Card>

          </Grid>
        </Box>
    );
}
