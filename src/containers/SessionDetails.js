import React, {useState, useEffect} from 'react';
import { Box, Button, Paper, Typography } from '@material-ui/core';
import Action from '../components/atoms/Action';
import NewActionForm from '../components/forms/NewActionForm';
import { sessionDetailStyles } from '../styles/sessionStyles';
import firebase from '../firebase/config';


export default function SessionDetails({authUser, dataUser, session, exitSession, changeTab}) {
    const classes = sessionDetailStyles();

    // Initialize - GET Session Actions 
    const usersRef = firebase.firestore().collection('users');
    const actionsRef = firebase.firestore().collection('actions')
    const sessionsRef = firebase.firestore().collection('sessions');

    // Session Functions 
    const [sessionInProgress, setSessionInProgress] = useState(session.status)
    const startSession = () => {
        setSessionInProgress(true)
        // 
        console.log("startSession clicked")
    }
    const publishSession = (e) => {
        // update Session status to 'upcoming'
        sessionsRef.doc(session.id).update({
            status: 'upcoming',
        })
        // update owner's draftSession to ""
        usersRef.doc(authUser.uid).update({
            draftSessionId: "",
        })
        // update participant's sessions array
        usersRef.doc(session.participantUserId[1]).update({
            sessions: firebase.firestore.FieldValue.arrayUnion(session.id),
        }).then(() => changeTab(e, 0))
    }
    const completeSession = (e) => {
        setSessionInProgress(false)
        sessionsRef.doc(session.id).update({
            status: 'completed',
        })
        changeTab(e, 1)
        // UPDATE Firestore (status, data fields)
        console.log("startSession clicked")
    }

    // Action Functions
    const [addingAction, setAddingAction] = useState(false)
    const toggleAddAction = () => {
        setAddingAction(!addingAction)
    }
    const [actions, setActions] = useState([])
    useEffect(() => {
        actionsRef
            .where("sessionId", "==", session.id)
            .orderBy("orderIndex")
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
    }, [addingAction])

    const cancelSession = (e, sessionId) => {
        sessionsRef.doc(sessionId).update({
            status: 'cancelled'  
        }).then(() => {
            changeTab(e, 2)
        })
        console.log("cancelSession clicked; to delete: ", session)
    }

    console.log("actions", actions)
    // console.log('SessionDetails, session: ', actions[actions.length-1])
    return (
        <Paper className={classes.sessionContainer}>
            {/* Session Info */}
            <Box className={classes.sessionDetails}>
                <Box className={classes.sessionInfo}>
                    <Typography>{session.name}</Typography>
                    <Typography>{'Coach: ' + session.coachUsername}</Typography>
                    <Typography>{'Participant: ' + session.participantUsername[1]}</Typography> 
                    <Typography>{session.notes}</Typography>
                </Box>
                
                <Box className={classes.sessionButtons}>
                    {session.status === "draft" && <Button className={classes.buttonPrimary} onClick={(e) => publishSession(e)}>Publish Session</Button>}
                    { dataUser.userType === "coach" && <Button className={classes.buttonPrimary} onClick={() => startSession()}>Start Session</Button>}
                </Box>

                <Box className={classes.sessionButtons}>
                    <Button className={classes.buttonSecondary} onClick={(e) => cancelSession(e, session.id)}>Cancel Session</Button>
                    
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

            { addingAction && <NewActionForm action={actions[actions.length-1]} sessionId={session.id} authUser={authUser} dataUser={dataUser} toggleAddAction={toggleAddAction} />}

            {
                dataUser.userType === "coach" &&
                <Box className={classes.sessionActionsButtions}>
                {   session.status &&
                    <Button className={classes.buttonPrimary} onClick={() => toggleAddAction()}>{addingAction ? 'Cancel Add Set' : 'Add Set'}</Button>
                }
                <Button className={classes.buttonPrimary} onClick={(e) => completeSession(e)}>COMPLETE SESSION</Button>
            </Box>
            }

                
        </Paper>
    )
}
