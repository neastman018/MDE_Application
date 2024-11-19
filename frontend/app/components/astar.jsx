import * as React from 'react';
import { Box, Typography, Card } from '@mui/material';
import Grid from '@mui/material/Grid2';

export default function AStarBox({ isMobile }) {
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
                A*
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
                    A* is the first pathing algorithm we developed.
                  </Typography>
                  <Typography variant="body1" sx={{ paddingBottom: 3 }}>
                      It is a basic path planning algorithm that uses a heuristic to guide the search. Between each node it assigns a cost based on the 
                      distance or other factors between the nodes. Then it traverses the graph to find the shortest path.
                  </Typography>
                  <Typography variant="body1" sx={{ paddingBottom: 3 }}>
                      By its nature, it does not support multiple agents very well. Therefore, A* alone caused a large number of emergency stops.
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
                    alt="AstarExample.gif"
                    src="AstarExample.gif"
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
                    alt="AstarExample.gif"
                    src="AstarExample.gif"
                  />
                </Box>
              </Box>
            </Card>

          </Grid>
        </Box>
    );
}
