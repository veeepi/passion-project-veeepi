import React, {useState, useEffect} from 'react';
import { Box, Button, Card, CardContent, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Action from '../components/atoms/Action';
import { sessionDetailStyles } from '../styles/sessionStyles';
import firebase from '../firebase/config';


export default function SessionDetails({authUser, dataUser, session, exitSession, cancelSession}) {
    const classes = sessionDetailStyles();

    const actionsRef = firebase.firestore().collection('actions')
    const [actions, setActions] = useState([])
    useEffect(() => {
        actionsRef
            .where("sessionId", "==", session.id)
            .onSnapshot(
                querySnapshot => {
                    const sessionActions = []
                    querySnapshot.forEach(doc => {
                        sessionActions.push(doc.data())
                    })
                    setActions(sessionActions)
                },
                error => {
                    console.log(error)
                }
            )
    }, [session])

    const addAction = () => {
        console.log("addAction clicked")
    }

    console.log('SessionDetails, session: ', session)
    return (
        <Paper className={classes.sessionContainer}>
            {/* Session Info */}
            <Box className={classes.sessionDetails}>
                <Box className={classes.sessionInfo}>
                    <Typography>{session.name}</Typography>
                    <Typography>{session.name}</Typography>    
                    <Typography>{session.name}</Typography>
                </Box>
                <Box className={classes.sessionButtons}>
                    <Button className={classes.buttonSecondary} onClick={() => cancelSession()}>Cancel Session</Button>
                    
                    <Button className={classes.buttonPrimary} onClick={() => exitSession()}>Exit Session</Button>
                </Box>
            </Box>

            <Box className={classes.sessionActionList}>

            {/* Session ActionList  */}
            {
                actions?.map((action, index) => 
                    <Action key={index} action={action} authUser={authUser} dataUser={dataUser} />
                )
            }
            </Box>

            <Box className={classes.sessionActionsButtions}>
                <Button className={classes.buttonPrimary} onClick={() => addAction()}>ADD SET</Button>
            </Box>
                
        </Paper>
    )
}
