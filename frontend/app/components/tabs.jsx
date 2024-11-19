import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import AStarBox from './astar';
import DStarBox from './dstar';
import AStarMultiBox from './aStarMulti'

export default function AlgorithmTabs({isMobile}) {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                width: '100vw',
                typography: 'body1',
                display: 'flex',
                justifyContent: 'center', // Center align the content
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <TabContext value={value}>
                <Box
                    sx={{
                        borderBottom: 2,
                        borderColor: 'divider',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center', // Center the tabs container
                        marginBottom: '8px', // Reduce the space below the tabs
                    }}
                >
                    <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                        variant="scrollable" // Enable scrolling
                        scrollButtons="auto" // Show scroll buttons if tabs overflow
                        sx={{
                            display: 'flex', // Ensure flex behavior
                            justifyContent: 'center', // Center align tabs
                            '.MuiTab-root': {
                                fontSize: '1rem', // Uniform font size
                                fontWeight: 'bold',
                                width: {
                                    xs: '125px', // 100px on mobile
                                    sm: '250px', // 250px by default
                                },
                                flexShrink: 0, // Prevent shrinking
                                textAlign: 'center', // Center text in tabs
                                padding: '8px', // Adjust padding to reduce space between tabs
                            },
                        }}
                    >
                        <Tab label="A*" value="1" />
                        <Tab label="Dynamic A*" value="2" />
                        <Tab label="Multi-Agent A*" value="3" />
                    </TabList>
                </Box>

                <TabPanel
                    value="1"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center', // Center align the content inside the panel
                        alignItems: 'center',
                        width: '100%',
                        padding: '16px', // Padding for spacing inside panel
                        marginTop: '0', // Remove any default margin on top
                    }}
                >
                    <AStarBox isMobile={isMobile}/>
                </TabPanel>
                <TabPanel
                    value="2"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        padding: '16px',
                        marginTop: '0', // Remove top margin
                    }}
                >
                    <DStarBox isMobile={isMobile}/>
                </TabPanel>
                <TabPanel
                    value="3"
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        padding: '16px',
                        marginTop: '0', // Remove top margin
                    }}
                >
                    <AStarMultiBox />
                </TabPanel>
                
            </TabContext>
        </Box>
    );
}
