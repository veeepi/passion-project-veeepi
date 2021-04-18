import React, {useState, useEffect} from 'react';
import { Box, Switch, Typography } from '@material-ui/core';
import SessionListItem from './SessionListItem';
import SessionDetails from './SessionDetails';
import EmptyList from '../components/atoms/EmptyList';
import SearchBox from '../components/atoms/SearchBox';
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
            .orderBy("startDateTime", "desc")
            .onSnapshot(
                querySnapshot => {
                    const userSessions = []
                    querySnapshot.forEach(doc => {
                        console.log("doc.data()", doc.data())
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

    const [searchSessionsText, setSearchSessionsText] = useState("")
    useState(() => {
        const resultArray = [] 
        sessions.filter((session) => {
        if (
            session.name.includes(searchSessionsText) || 
            session.coachUsername.includes(searchSessionsText) ||
            session.participantUsername.includes(searchSessionsText) 
            ) {
            resultArray.push(session)
        }
        }) 
        setSearchSessionsText(resultArray)
    }, [searchSessionsText])

    console.log("sessions", sessions)
    // console.log("selectedSessionStatus ", selectedSessionStatus, sessionStatus)
    return (
        <Box className={classes.container}>
            { sessionPanelMode === 'list' &&
            <Box className={classes.sessionPanelContainer}>

                {sessions.length > 0 && <SearchBox label={'Search Sessions: '} placeholder={"name of session, coach or participant"} onChange={setSearchSessionsText}/>}
                    
                {   sessions.length > 0
                    ?     
                    sessions.map((session, index) => 
                        <SessionListItem key={index} session={session} openSession={openSession} />
                    )
                    :
                    <EmptyList message={`No ${sessionStatus} sessions.`} />
                }
            </Box>
            }
            { sessionPanelMode === 'detail' &&
            <Box>
                <SessionDetails authUser={authUser} dataUser={dataUser} session={currentSession} exitSession={exitSession} changeTab={changeTab} setSessionPanelMode={setSessionPanelMode}/>
            </Box>
            }
        </Box>
        
    )
}
