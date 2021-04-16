import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import TabPanel from '../containers/TabPanel';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import UserBanner from '../containers/UserBanner';
import UserConnections from '../containers/UserConnections';
import SchedulePanel from '../containers/SchedulePanel';
import SessionsPanel from '../containers/SessionsPanel';
import { dashStyles } from '../styles/dashStyles';
import SessionsCreatePanel from '../containers/SessionCreatePanel';

export default function DashPage({authUser, dataUser}) {
    const classes = dashStyles();

    const [value, setValue] = useState(0);
    const [selectedTabTitle, setSelectedTabTitle] = useState('Upcoming');
    const changeTab = (event, newValue) => {
        setValue(newValue);
        if (newValue === 0) { 
            setSelectedTabTitle('Upcoming')
        }
        if (newValue === 1) {
            setSelectedTabTitle('Completed')
        }
        if (newValue === 2) {
            setSelectedTabTitle('Drafts')
        }
        if (newValue === 3) {
            setSelectedTabTitle('Create Session')
        }
    };

    console.log("DashPage, dataUser.userType: ", dataUser.userType)
    return (
        <div className={classes.container}>
            <Paper classes={classes.header}>
                <UserBanner dataUser={dataUser} />
                <UserConnections dataUser={dataUser}/>
            </Paper>
            <AppBar className={classes.dashAppBar} position="static">
                <Tabs
                    className={classes.authTabs}
                    value={value}
                    onChange={changeTab}
                    // indicatorColor="primary"
                    // textColor="primary"
                    centered
                >
                    <Tab label="Upcoming" />
                    <Tab label="Completed" />
                    <Tab label="Drafts" />
                    {
                        dataUser?.userType === 'coach' &&
                        <Tab label="Create Session" />
                    }
                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0}>
                <SessionsPanel authUser={authUser} dataUser={dataUser} sessionStatus={'upcoming'} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SessionsPanel authUser={authUser} dataUser={dataUser} sessionStatus={'completed'} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <SessionsPanel authUser={authUser} dataUser={dataUser} sessionStatus={'draft'}/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <SessionsCreatePanel authUser={authUser} dataUser={dataUser} changeTab={changeTab}/>
            </TabPanel>
        </div>
    )
}
