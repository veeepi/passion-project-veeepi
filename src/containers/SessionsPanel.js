import React, {useState, useEffect} from 'react';
import { Box } from '@material-ui/core';
import SessionListItem from './SessionListItem';
import SessionDetails from './SessionDetails';
import EmptyList from '../components/atoms/EmptyList';
import firebase from '../firebase/config';
import {dashStyles} from '../styles/dashStyles';

export default function SessionsPanel({authUser, dataUser, sessionStatus, changeTab}) {
    const classes = dashStyles();

    const sessionsRef = firebase.firestore().collection('sessions');
    const [sessions, setSessions] = useState([])
    useEffect(() => {
        if(dataUser.sessions) {
            sessionsRef
            .where("participantUserId", "array-contains-any", [dataUser.id])
            .where("status", "==", sessionStatus)
            .onSnapshot(
                querySnapshot => {
                    const userSessions = []
                    querySnapshot.forEach(doc => {
                        userSessions.push(doc.data())
                    })
                    setSessions(userSessions)
                    console.log("userSessions", userSessions)
                },
                error => {
                    console.log(error)
                }
            )
        }
    }, [authUser, dataUser.sessions, sessionStatus ])

    const [sessionPanelMode, setSessionPanelMode] = useState("list")
    const [currentSession, setCurrentSession] = useState({})
    const openSession = (session) => {
        setCurrentSession(session)
        setSessionPanelMode('detail')
    }
    const exitSession = () => {
        setCurrentSession({})
        setSessionPanelMode('list')
    }
    const cancelSession = (session) => {
        console.log("cancelSession clicked; to delete: ", session)
    }

    console.log("SessionPanel sessions: ", sessions)
    return (
        <Box className={classes.container}>
            { sessionPanelMode === 'list' &&
            <Box className={classes.sessionPanelContainer}>
                
                {   sessions.length > 0
                    ? 
                    sessions.map((session, index) => 
                        <SessionListItem key={index} session={session} openSession={openSession} cancelSession={cancelSession}/>
                    )
                    :
                    <EmptyList message={`No ${sessionStatus} sessions.`} />
                }
            </Box>
            }
            { sessionPanelMode === 'detail' &&
            <Box>
                <SessionDetails authUser={authUser} dataUser={dataUser} session={currentSession} exitSession={exitSession} cancelSession={cancelSession} changeTab={changeTab}/>
            </Box>
            }
        </Box>
        
    )
}
