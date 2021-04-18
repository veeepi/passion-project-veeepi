import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import { Box, Button, Paper, Typography } from '@material-ui/core';
import { dashStyles } from '../styles/dashStyles';
import firebase from '../firebase/config';
import UserBanner from '../containers/UserBanner';
import UserConnections from '../containers/UserConnections';
import Footer from '../containers/Footer';

export default function ProfilePage() {
    const classes = dashStyles();
    
    const usersRef = firebase.firestore().collection('users');
    const { userId } = useParams()

    const [authUser, setAuthUser] = useState({})
    firebase.auth().onAuthStateChanged((user) => { setAuthUser(user) })
    console.log("authUser:", authUser)
    
    const [currentUser, setCurrentUser] = useState({})
    useEffect(() => {
        usersRef.doc(userId).onSnapshot(doc => {
            setCurrentUser(doc.data())
        })
    }, [authUser])

    const [user, setUser] = useState({})
    useEffect(() => {
        usersRef.doc(userId).onSnapshot(doc => {
            setUser(doc.data())
        })
    }, [])

    const sessionsRef = firebase.firestore().collection('sessions');
    const [completedSessions, setCompletedSessions] = useState(0)
    useEffect(() => {
        sessionsRef
            .where("participantUserId", "==", userId)
            .where("status", "==", "completed")
            .onSnapshot(querySnapshot => {
                const sessions = []
                querySnapshot.forEach(doc => {
                    sessions.push(doc.data())
                })
                setCompletedSessions(sessions);      
            })
    }, [userId])
    
    console.log(completedSessions)
    return (
        <div className={classes.container}>
            { 
            !user
            ? 
            <Box>
                <Typography>Loading...</Typography>
            </Box>
            :
            <Box classes={classes.header}>
                <UserBanner dataUser={user} />
                <UserConnections dataUser={user}/>
                <Paper className={classes.infoSection}>
                    <Typography className={classes.infoTitle}>Public Info: </Typography>
                    <Box className={classes.infoBox}>
                        <Typography className={classes.infoLabel}>Username: </Typography>
                        <Typography className={classes.infoValue}>{user.username}</Typography>
                    </Box>
                    <Box className={classes.infoBox}>
                        <Typography className={classes.infoLabel}>Email: </Typography>
                        <Typography className={classes.infoValue}>{user.email}</Typography>
                    </Box>
                </Paper>
                {
                    currentUser.userType === "coach" || currentUser.id === userId &&
                    <Paper className={classes.infoSection}>
                        <Typography className={classes.infoTitle}>Info Your Coach should know: </Typography>
                        <Box className={classes.infoBox}>
                            <Typography className={classes.infoLabel}>Health Goals: </Typography>
                            <Typography className={classes.infoValue}>{user.healthGoals}</Typography>
                        </Box>
                        <Box className={classes.infoBox}>
                            <Typography className={classes.infoLabel}>Health Concerns: </Typography>
                            <Typography className={classes.infoValue}>{user.healthIssues}</Typography>
                        </Box>

                        <Box className={classes.infoBox}>
                            <Typography className={classes.infoLabel}>Emergency Contact Name: </Typography>
                            <Typography className={classes.infoValue}>{user.emergencyContactName}</Typography>
                        </Box>
                        <Box className={classes.infoBox}>
                            <Typography className={classes.infoLabel}>Health Concerns: </Typography>
                            <Typography className={classes.infoValue}>{user.emergencyContactPhone}</Typography>
                        </Box>
                    </Paper>

                }
                {
                    // ONLY CURRENT USER CAN SEE
                    currentUser.id === userId &&
                    <Paper className={classes.infoSection}>
                        <Typography className={classes.infoTitle}>Private Session Data </Typography>
                        <Box className={classes.infoBox}>
                            <Typography className={classes.infoLabel}>Sessions Completed: </Typography>
                            <Typography className={classes.infoValue}>{completedSessions.length}</Typography>
                        </Box>
                    </Paper>

                }
                
            </Box>
            }
            <Footer />

        </div>
    )
}
