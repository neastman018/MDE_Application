'use client'
import * as React from 'react';
import { extendTheme, useMediaQuery, Typography, Box, CircularProgress, Button, FormControl, InputLabel, MenuItem, Select, TextField, Autocomplete } from '@mui/material';
import { useGraphVariables } from '../hooks/get_graph.jsx'; // Adjust the import as necessary

const indOptions = ['Algorithm', 'Floor Plan', 'Number of Robots', 'Number of Nodes', 'Regional Reroute Radius'];

const depOptions = [
  { choice: 'Time' },
  { choice: 'Total Distance' },
  { choice: 'Total Dropoffs' },
  { choice: 'Total Planned Drops' }
];

export default function Graphs() {
  // Determine if the screen width is within the mobile range
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const [indVar, setIValue] = React.useState('');
  const [depVar, setDValue] = React.useState([]);

  const [submittedIndVar, setSubmittedIndVar] = React.useState('');
  const [submittedDepVar, setSubmittedDepVar] = React.useState([]);

  const { data: graph, isLoading, isError } = useGraphVariables(submittedIndVar, submittedDepVar);

  const handleChangeInd = (event) => {
    setIValue(event.target.value);
  };

  const handleChangeDep = (event, newValue) => {
    // Restrict to a maximum of 2 selections
    if (newValue.length <= 3) {
      setDValue(newValue);
    } else {
      alert('You can only select up to 2 options.');
    }
  };

  const handleSubmit = () => {
    setSubmittedIndVar(indVar);
    setSubmittedDepVar(depVar.map(item => item.choice));
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
              <Autocomplete
                multiple
                limitTags={2}
                id="multiple-limit-tags"
                options={depOptions}
                getOptionLabel={(option) => option.choice}
                value={depVar}
                onChange={handleChangeDep}
                renderInput={(params) => (
                  <TextField {...params} label="Dependent Variable" />
                )}
              />
            </FormControl>
          )}
        </Box>
        {isMobile && (
          <FormControl sx={{ width: '100%' }}>
            <Autocomplete
              multiple
              limitTags={2}
              id="multiple-limit-tags"
              options={depOptions}
              getOptionLabel={(option) => option.choice}
              value={depVar}
              onChange={handleChangeDep}
              renderInput={(params) => (
                <TextField {...params} label="Dependent Variable" />
              )}
            />
          </FormControl>
        )}
        <Button variant="contained" sx={{ mt: 0, width: isMobile ? "100px" : "200px" }} onClick={handleSubmit}>
          Show Graph
        </Button>
      </Box>
    </Box>
  );
}
