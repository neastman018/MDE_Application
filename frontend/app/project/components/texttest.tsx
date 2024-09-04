import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/system';

export default function ProjectDescription() {
    const theme = useTheme();

return (
    <Box component="main" sx={{ p: 3 } }>
        <Typography variant="h4">
        Project Objective
        </Typography>
        {/* <Typography variant="body1">
            Currently Prime Vision sorting robots operate based on shortest path algorithms to get to
            and from their desired locations. Before the sorting robots are implemented, a separate
            scout robot maps out the facility and creates nodes on the floor based on discrepancies 
            in the concrete. Then a central server routes the robots with these nodes to get the
            package drop-off and pick-up. These robots also have a LiDAR sensor on the front to 
            detect obstacles and avoid collisions.
        <br></br>
        <br></br>     
            Currently the path planning algorithm finds the shortest path along the nodes that map out 
            the factory floor. Without the knowledge of the other robots on the floor the shortest path 
            can become crowded and cause blockages as the robots have to wait for the next node on their
            path to become free. This can compound if the first robot in line is going to the first
            drop off location and blocks all the robots going to the later drop off locations. 
            Furthermore, if a stationary obstacle is detected it can cause a major slow down as the 
            robots cannot navigate around it. 
        </Typography> */}
    </Box>
    );
}