import React, {useState, useEffect} from 'react';
import { Box, Button, Card, FormControl, Input, InputLabel, Paper, Tab, Tabs, TextField, Typography } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import  from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
import firebase from '../firebase/config';
import sessionStyles from '../styles/sessionStyles';
import { ContactPhoneOutlined } from '@material-ui/icons';

export default function SessionsCreatePanel({dataUser}) {
    const classes = sessionStyles();

    const sessionsRef = firebase.firestore().collection('sessions');

    const actionsRef = firebase.firestore().collection('actions');

    const [target, setTarget] = useState(0)

    const [sessions, setSessions] = useState([])
    useEffect(() => {
        if(dataUser.sessions) {
            // sessionsRef.where("userId")

        }
    }, [])

    const [actionEditMode, setActionEditMode] = useState(false)
    const doneActionCreate = (e) => {
        e.preventDefault()
        console.log("doneSessionCreate clicked")
        setActionEditMode(!actionEditMode)
    }

    return (
        <Box>
            <Card>
                <form className={classes.activityForm} onSubmit={(e) => doneActionCreate(e)} noValidate autoComplete="off">
                    
                    <div className={classes.activityColumn}>
                        <TextField className={classes.activityField} id="activity_name" label="Activity" />
                        <TextField className={classes.activityField} id="activity_description" label="Description" />
                    </div>
                    <div className={classes.activityColumn}>
                        <TextField className={classes.activityField} id="target_reps" label="Target reps: " />
                        <TextField className={classes.activityField} id="target_reps" label="Target reps: " />
                    </div>
                    <div className={classes.submissions}>
                        <Button onClick={() => console.log("cancel clicked")}>Cancel Action</Button>
                        <Button type="submit" onClick={() => console.log("cancel clicked")}>Done</Button>
                    </div>
                    
                </form>
            </Card>

            <Button onClick={() => console.log("add clicked")}>+ another Action</Button>

        </Box>
    )
}
