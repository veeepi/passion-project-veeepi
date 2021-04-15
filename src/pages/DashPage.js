import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import TabPanel from '../containers/TabPanel';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import UserBanner from '../containers/UserBanner';
import SchedulePanel from '../containers/SchedulePanel';
import SessionsPanel from '../containers/SessionsPanel';
import dashStyles from '../styles/dashStyles';
import SessionsCreatePanel from '../containers/SessionCreatePanel';

export default function DashPage({authUser, dataUser}) {
    const classes = dashStyles();

    const [value, setValue] = React.useState(0);
    const [selectedTabTitle, setSelectedTabTitle] = useState('Sessions');
    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (newValue === 0) { 
            setSelectedTabTitle('Sessions')
        }
        if (newValue === 1) {
            setSelectedTabTitle('Schedule')
        }
        if (newValue === 2) {
            setSelectedTabTitle('Create Session')
        }
    };

    console.log("DashPage, dataUser.userType: ", dataUser.userType)
    return (
        <div className={classes.container}>
            <UserBanner dataUser={dataUser} />

            <AppBar className={classes.dashAppBar} position="static">
                <Tabs
                    className={classes.authTabs}
                    value={value}
                    onChange={handleChange}
                    // indicatorColor="primary"
                    // textColor="primary"
                    centered
                >
                    <Tab label="Sessions" />
                    <Tab label="Schedule" />
                    {
                        dataUser?.userType === 'coach' &&
                        <Tab label="Create Session" />
                    }
                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0}>
                <SessionsPanel authUser={authUser} dataUser={dataUser} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SchedulePanel dataUser={dataUser} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <SessionsCreatePanel dataUser={dataUser} />
            </TabPanel>
        </div>
    )
}
