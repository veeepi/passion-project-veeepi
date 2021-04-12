import React, {useState, useEffect} from 'react';
import LandingHeader from './LandingHeader';
import AppBar from '@material-ui/core/AppBar';
import Login from './Login';
import Register from './Register';
import { makeStyles } from '@material-ui/core/styles';
import authStyles from '../styles/authStyles';
import TabPanel from './TabPanel';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function Auth() {
    // const classes = useStyles();
    const classes = authStyles();

    const [value, setValue] = React.useState(0);
    const [selectedTabTitle, setSelectedTabTitle] = useState('Login');
    // const [activeTab, setActiveTab] = useState('login'); // default tab selected is Login


    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (newValue === 0) { 
            setSelectedTabTitle('Login')
        }
        if (newValue === 1) {
            setSelectedTabTitle('Register')
        }
    };

    console.log(value)
    return (
        <div className={classes.authContainer}>

            <Typography>{selectedTabTitle}</Typography>
            <AppBar className={classes.authAppBar} position="static">
            <Tabs
                className={classes.authTabs}
                value={value}
                onChange={handleChange}
                // indicatorColor="primary"
                // textColor="primary"
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
