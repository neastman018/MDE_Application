import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import CodeBlock from './codeblock';



const a_star_code = `
    # A* Search Algorithm

    `;

const d_star_code = `
    # D* Search Algorithm

        `;

const random_tree_code = `
    # Random Tree Pathing Algorithm
   
`;


export default function AlgorithmTabs() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100vw', typography: 'body1', display: 'flex', justifyContent: 'right', alignItems: 'center', flexDirection: 'column' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 2, borderColor: 'divider', width: '100%' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                            <Tab label="A*" value="1" />
                            <Tab label="D*" value="2" />
                            <Tab label="Dynamic A*" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1" sx={{ width: '60%', transform: 'rotateY(5deg) translateZ(10px)', transition: 'transform 0.5s' }}>
                    <Box
                        component="img"
                        alt="A* flow chart"
                        src="astarChart.png"
                        objectFit="cover"
                        />
                    </TabPanel>
                    <TabPanel value="2" sx={{ width: '60%', transform: 'rotateY(5deg) translateZ(10px)', transition: 'transform 0.5s' }}>
                    <Box
                        component="img"
                        alt="D* flow chart"
                        src="dstarChart.png"
                        objectFit="cover"
                        />
                    </TabPanel>
                    <TabPanel value="3" sx={{ width: '60%', transform: 'rotateY(5deg) translateZ(10px)', transition: 'transform 0.5s' }}>
                            <Box
                        component="img"
                        alt="Dynamic A* animation"
                        src="dynamicAstar.gif"
                        objectFit="cover"
                        />
                    </TabPanel>
                </TabContext>
        </Box>

    );
}