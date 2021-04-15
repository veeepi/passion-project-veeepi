import React, {useState, useEffect} from 'react';
import { Box, Button, Paper, Tab, Tabs, Typography } from '@material-ui/core';
// import  from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
import SessionListItem from './SessionListItem';
import SessionDetails from './SessionDetails';
import firebase from '../firebase/config';

export default function SessionsPanel({authUser, dataUser}) {

    const sessionsRef = firebase.firestore().collection('sessions');
    const [sessions, setSessions] = useState([])
    useEffect(() => {
        if(dataUser.sessions) {
            sessionsRef
                .where("coachId", "==", authUser.uid)
                .onSnapshot(
                    querySnapshot => {
                        const userSessions = []
                        querySnapshot.forEach(doc => {
                            userSessions.push(doc.data())
                        })
                        setSessions(userSessions)
                    },
                    error => {
                        console.log(error)
                    }
                )
        }
    }, [authUser])

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
        <Box>
            { sessionPanelMode === 'list' &&
            <Box>
                { sessions?.map((session, index) => 
                        <SessionListItem key={index} session={session} openSession={openSession} cancelSession={cancelSession}/>
                    )}
            </Box>
            }
            { sessionPanelMode === 'detail' &&
            <Box>
                <SessionDetails session={currentSession} exitSession={exitSession} cancelSession={cancelSession}/>
            </Box>
            }
        </Box>
        
    )
}
