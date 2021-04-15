import React, {useState, useEffect} from 'react';
import { Box, Button, Card, CardContent, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Action from '../components/atoms/Action';
import NewActionForm from '../components/forms/NewActionForm';
import { sessionDetailStyles } from '../styles/sessionStyles';
import firebase from '../firebase/config';


export default function SessionDetails({authUser, dataUser, session, exitSession, cancelSession}) {
    const classes = sessionDetailStyles();

    // Initialize - GET Session Actions 
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

    // Session Functions 
    const [sessionInProgress, setSessionInProgress] = useState(session.status)
    const startSession = () => {
        setSessionInProgress(true)
        console.log("startSession clicked")
    }
    const completeSession = () => {
        setSessionInProgress(false)
        // UPDATE Firestore (status, data fields)
        console.log("startSession clicked")
    }

    // Action Functions
    const [addingAction, setAddingAction] = useState(false)
    const toggleAddAction = () => {
        setAddingAction(!addingAction)
    }

    console.log('SessionDetails, session: ', actions[actions.length-1])
    return (
        <Paper className={classes.sessionContainer}>
            {/* Session Info */}
            <Box className={classes.sessionDetails}>
                <Box className={classes.sessionInfo}>
                    <Typography>{session.name}</Typography>
                    <Typography>{'Coach: ' + session.coachName}</Typography>    
                    {
                        session.clientNames.map((name, index) => <Typography key={index}>{name}</Typography>)
                    }
                    <Typography>{session.notes}</Typography>

                </Box>
                
                <Box className={classes.sessionButtons}>
                    <Button className={classes.buttonPrimary} onClick={() => startSession()}>Start Session</Button>
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

            { addingAction && <NewActionForm action={actions[actions.length-1]} authUser={authUser} dataUser={dataUser} toggleAddAction={toggleAddAction} />}

            <Box className={classes.sessionActionsButtions}>
                <Button className={classes.buttonPrimary} onClick={() => toggleAddAction()}>{addingAction ? 'Cancel Add Set' : 'Add Set'}</Button>
                <Button className={classes.buttonPrimary} onClick={() => completeSession()}>COMPLETE SESSION</Button>
            </Box>
                
        </Paper>
    )
}
