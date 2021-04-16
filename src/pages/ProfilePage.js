import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import { Box, Button, Paper, Typography } from '@material-ui/core';
import { dashStyles } from '../styles/dashStyles';
import firebase from '../firebase/config';
import UserBanner from '../containers/UserBanner';
import UserConnections from '../containers/UserConnections';

export default function ProfilePage() {
    const classes = dashStyles();
    
    const usersRef = firebase.firestore().collection('users');
    const { userId } = useParams()

    const [user, setUser] = useState({})
    useEffect(() => {
        usersRef.doc(userId).onSnapshot(doc => {
            setUser(doc.data())
        })
    }, [])
    console.log(user)
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
                <Paper className={classes.userProfile}>
                    <Box className={classes.infoBox}>
                        <Typography>Username: </Typography>
                        <Typography>{user.username}</Typography>
                    </Box>
                    <Box className={classes.infoBox}>
                        <Typography>Email: </Typography>
                        <Typography>{user.email}</Typography>
                    </Box>
                    {/* <Box className={classes.infoBox}>
                        <Typography>First Name: </Typography>
                        <Typography>{user.firstName}</Typography>
                    </Box>
                    <Box className={classes.infoBox}>
                        <Typography>Last Name: </Typography>
                        <Typography>{user.lastName}</Typography>
                    </Box> */}
                    <Box className={classes.infoBox}>
                        <Typography>Health Goals: </Typography>
                        <Typography>{user.healthGoals}</Typography>
                    </Box>
                    <Box className={classes.infoBox}>
                        <Typography>Health Concerns: </Typography>
                        <Typography>{user.healthIssues}</Typography>
                    </Box>

                    <Box className={classes.infoBox}>
                        <Typography>Emergency Contact Name: </Typography>
                        <Typography>{user.emergencyContactName}</Typography>
                    </Box>
                    <Box className={classes.infoBox}>
                        <Typography>Health Concerns: </Typography>
                        <Typography>{user.emergencyContactPhone}</Typography>
                    </Box>

                </Paper>
            </Box>
            }

        </div>
    )
}
