import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Imagelist from './Imagelist';
import imageData from '../imagesources';
import Navbar from './Navbar';
import Footer from './Footer';

const Homepage = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };

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

    return (
        <>
            <Navbar />
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', color: "#ff9800" }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="#d37e00 tabs example"
                        variant="scrollable"
                    >
                        <Tab label="All" {...a11yProps(0)} />
                        <Tab label="Doors" {...a11yProps(1)} />
                        <Tab label="Windows" {...a11yProps(2)} />
                        <Tab label="Terrace" {...a11yProps(3)} />
                        <Tab label="Miscellaneous" {...a11yProps(4)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Imagelist itemData={imageData.all} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Imagelist itemData={imageData.doors} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Imagelist itemData={imageData.windows} />
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Imagelist itemData={imageData.terrace} />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Imagelist itemData={imageData.miscellaneous} />
                </TabPanel>
            </Box>
            <Footer />
        </>
    )
}

export default Homepage