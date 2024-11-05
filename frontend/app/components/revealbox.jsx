import * as React from 'react';
import { Box, Button, Collapse, Typography, Card, Grid } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import FlipCardComponent from './problemflipcards';



export default function SlideDownBox({futureResearchCards, isMobile}) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', width: '85vw', textAlign: 'center' }}>
      {/* Header Box with Title and Button */}

      
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: 2 }}>
        <Typography variant="h4" sx={{ padding: 2, fontWeight: 'bold' }}>
          Future Research
        </Typography>
        {!isMobile && ( //Change the Location of the info button on mobile phones to be below
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
        <Box
          sx={{
            mt: 2,
            p: 2,
            borderRadius: '8px',
            boxShadow: 2,
          }}
        >
            <Grid container spacing={2} sx={{ padding: 2 }}>
                {futureResearchCards.map((component, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <FlipCardComponent key={index} post={component} width={"400px"} height={"275px"}/>
                  </Grid>
                ))}
            </Grid>
        </Box>
      </Collapse>
    </Card>
  );
}