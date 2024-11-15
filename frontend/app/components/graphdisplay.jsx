'use client'
import * as React from 'react';
import { extendTheme, useMediaQuery, Typography, Box, CircularProgress, Button, FormControl, InputLabel, MenuItem, Select, TextField, Autocomplete } from '@mui/material';
import { useGraphVariables } from '../hooks/get_graph.jsx'; // Adjust the import as necessary

const indOptions = ["Number of Robots", "Total Time", "Total Distance", "Total Dropoffs"];

const depOptions = ['Total E-Stops', 'Parcels per Hour per Robot', 'Average Time per Agent', 'Total Parcels per Hour' ]


export default function Graphs() {
  // Determine if the screen width is within the mobile range
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const [indVar, setIValue] = React.useState('');
  const [depVar, setDValue] = React.useState('');


  const [submittedIndVar, setSubmittedIndVar] = React.useState('');
  const [submittedDepVar, setSubmittedDepVar] = React.useState('');

  const { data: graph, isLoading, isError } = useGraphVariables(submittedIndVar, submittedDepVar);

  const handleChangeInd = (event) => {
    setIValue(event.target.value);
  };

  const handleChangeDep = (event) => {
    setDValue(event.target.value);
  };


  const handleSubmit = () => {
    setSubmittedIndVar(indVar);
    setSubmittedDepVar(depVar);
  };

  return (
    <Box
      sx={{
        paddingTop: '10vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        flexDirection: 'column',
        shadow: 8,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: isMobile ? '90vw' : '70vw',
          height: '60vh',
          border: '2px solid #ccc',
          borderRadius: '8px',
          overflow: 'hidden',
          mb: 2,
        }}
      >
        {isLoading ? (
          <CircularProgress />
        ) : isError ? (
          <Typography color="error">Error fetching data</Typography>
        ) : graph?.encoded_graph ? (
          <img src={`data:image/png;base64,${graph?.encoded_graph}`} alt="Graph" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        ) : (
          <Typography>Select the variables you would like to graph.</Typography>
        )}
      </Box>

      <Box component="main" sx={{ p: 2, display: 'flex', gap: 2, width: '70vw', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ width: '100%', display: 'flex', gap: 2 }}>
          <FormControl sx={{ width: '100%' }}>
            <InputLabel id="demo-simple-select-label">Independent Variable</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={indVar}
              label="Independent Variable"
              onChange={handleChangeInd}
            >
              {indOptions.map((ind) => (
                <MenuItem key={ind} value={ind}>
                  {ind}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {!isMobile && (
            <FormControl sx={{ width: '100%' }}>
              <InputLabel id="demo-simple-select-label">Dependent Variable</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={depVar}
                label="Dependent Variable"
                onChange={handleChangeDep}
              >
                {depOptions.map((dep) => (
                  <MenuItem key={dep} value={dep}>
                    {dep}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </Box>
        {isMobile && (
          <FormControl sx={{ width: '100%' }}>
            <InputLabel id="demo-simple-select-label">Dependent Variable</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={depVar}
              label="Dependent Variable"
              onChange={handleChangeDep}
            >
              {depOptions.map((dep) => (
                <MenuItem key={dep} value={dep}>
                  {dep}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
        <Button variant="contained" sx={{ mt: 0, width: isMobile ? "100px" : "200px" }} onClick={handleSubmit}>
          Show Graph
        </Button>
      </Box>
    </Box>
  );
}
