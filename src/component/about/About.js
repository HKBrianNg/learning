import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Navbar from '../header/Navbar';
import AboutTemplate from './AboutTemplate';
import { data as AppServiceData } from '../../data/AppServiceData';
import { data as DevOpsData } from '../../data/DevOpsData';

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
                    <Typography component='span'>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function About() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Navbar />
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Application Service" {...a11yProps(0)} />
                        <Tab label="DevOps" {...a11yProps(1)} />
                        <Tab label="React" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <AboutTemplate data={AppServiceData} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <AboutTemplate data={DevOpsData} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    React component
                </TabPanel>
            </Box>
        </>
    );
}

export default About;