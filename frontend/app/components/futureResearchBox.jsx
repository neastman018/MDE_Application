import * as React from 'react';
import { Box, Button, Collapse, Typography, Card} from '@mui/material';
import Grid from '@mui/material/Grid2';
import InfoIcon from '@mui/icons-material/Info';
import FlipCardComponent from './problemflipcards';



export default function FutureResearchBox({futureResearchCards, isMobile}) {
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
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
              {futureResearchCards.map((component, index) => (
                <Grid item xs={12} md={3} key={index} sx={{ flexShrink: 0 }}>
                  <FlipCardComponent key={index} post={component} width={"300px"} height={"275px"}/>
                </Grid>
              ))}
            </Grid>
        </Box>
      </Collapse>
    </Card>
  );
}