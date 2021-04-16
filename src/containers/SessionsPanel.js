import React, {useState, useEffect} from 'react';
import { Box } from '@material-ui/core';
import SessionListItem from './SessionListItem';
import SessionDetails from './SessionDetails';
import firebase from '../firebase/config';

export default function SessionsPanel({authUser, dataUser, sessionStatus}) {

    const sessionsRef = firebase.firestore().collection('sessions');
    const [sessions, setSessions] = useState([])
    useEffect(() => {
        if(dataUser.sessions) {
            sessionsRef
                .where("coachUserId", "==", authUser.uid)
                .where("status", "==", sessionStatus)
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
    }, [sessionsRef, authUser, dataUser.sessions, sessionStatus ])

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
                <SessionDetails authUser={authUser} dataUser={dataUser} session={currentSession} exitSession={exitSession} cancelSession={cancelSession}/>
            </Box>
            }
        </Box>
        
    )
}
