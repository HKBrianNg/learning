import React, { useState } from 'react';
import Navbar from '../header/Navbar';
import AppService from './AppService';
import DevOps from './DevOps';
import { Container, Box, Tabs, Tab, Typography } from '@mui/material';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function About() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Navbar />
            <Container maxWidth='xl'>
                <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <Tabs scrollButtons allowScrollButtonsMobilevalue={value} onChange={handleChange} centered>
                        <Tab label="Application Service" />
                        <Tab label="DevOps" />
                        <Tab label="" />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <AppService />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <DevOps />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>

            </Container>


        </>
    );
}

export default About;