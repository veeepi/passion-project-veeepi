import React, {useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Login from './Login';
import Register from './Register';
import authStyles from '../styles/authStyles';
import TabPanel from './TabPanel';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

export default function Auth() {
    const classes = authStyles();

    const [value, setValue] = React.useState(0);
    const [selectedTabTitle, setSelectedTabTitle] = useState('Login');

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (newValue === 0) { 
            setSelectedTabTitle('Login')
        }
        if (newValue === 1) {
            setSelectedTabTitle('Register')
        }
    };

    // console.log(value)
    return (
        <div className={classes.authContainer}>

            <Typography className={classes.authTitle}>{selectedTabTitle}</Typography>
            <AppBar className={classes.authAppBar} position="static">
            <Tabs
                className={classes.authTabs}
                value={value}
                onChange={handleChange}
                centered
            >
                <Tab label="Login" />
                <Tab label="Register" />
            </Tabs>
            </AppBar>

            <TabPanel value={value} index={0}>
                <Login />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Register />
            </TabPanel>

        </div>
    )
}
