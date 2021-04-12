import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../containers/TabPanel';
import authStyles from '../styles/authStyles';
import RegisterClientForm from '../components/forms/RegisterClientForm';
import RegisterCoachForm from '../components/forms/RegisterCoachForm';


export default function Register() {
    const classes = authStyles();

    const [typeValue, setTypeValue] = React.useState(0);
    const [error, setError] =  useState('');
    const [user, setUser] = useState({
        // common props (client and coach)
        username: '', // required
        email: '', // required
        password: '', // required
        confirmPassword: '', // required
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        province: '',
        country: '',
        phoneNumber: '',
        emergencyContactName: '', // client only
        emergencyContactPhone: '', // client only
        healthGoals: '', // client only
        healthIssues: '', // client only
    }) // final user object to submit

    const handleTypeTabChange = (event, newValue) => {
        setTypeValue(newValue)
    }

    const handleRegisterClient = (user) => {
        // e.preventDefault();
        console.log("Register clicked", user)
    }
    const handleRegisterCoach = (user) => {
        // e.preventDefault();
        console.log("Register clicked", user)
    }


    return (
        <div>
            <AppBar className={classes.registerAppBar} position="static">
                <Typography>Are you a client or a coach?</Typography>
                <Tabs
                    className={classes.authTabs}
                    value={typeValue}
                    onChange={handleTypeTabChange}
                    // indicatorColor="primary"
                    // textColor="primary"
                    centered
                >
                    <Tab label="Client" />
                    <Tab label="Coach" />
                </Tabs>
            </AppBar>

            <TabPanel value={typeValue} index={0}>
                <RegisterClientForm onSubmit={handleRegisterClient} user={user} setUser={setUser} />
            </TabPanel>
            <TabPanel value={typeValue} index={1}>
                <RegisterCoachForm onSubmit={handleRegisterCoach} user={user} setUser={setUser} />
            </TabPanel>

        </div>
    )
}
