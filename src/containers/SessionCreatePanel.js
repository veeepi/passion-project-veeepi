import React, {useState, useEffect} from 'react';
import { Box, Button, Card, FormControl, Input, InputLabel, Paper, Tab, Tabs, TextField, Typography } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import  from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
import UserSearchListItem from '../components/atoms/UserSearchListItem';
import UserParticipatingListItem from '../components/atoms/UserParticipatingListItem';
import firebase from '../firebase/config';
import { sessionListStyles } from '../styles/sessionStyles';
import { ContactPhoneOutlined } from '@material-ui/icons';

export default function SessionsCreatePanel({authUser, dataUser}) {
    const classes = sessionListStyles();

    const usersRef = firebase.firestore().collection('users');
    const sessionsRef = firebase.firestore().collection('sessions');
    const actionsRef = firebase.firestore().collection('actions');

    
    const [participatingUsers, setParticipatingUsers] = useState([])
    const [searchResultUsers, setSearchResultUsers] = useState([])

    const [sessions, setSessions] = useState([])
    useEffect(() => {
        if(dataUser.sessions) {
            // sessionsRef.where("userId")

        }
    }, [])

    const [userSearchValue, setUserSearchValue] = useState('')
    useEffect(() => {
        if (userSearchValue.length > 1) {
            usersRef
                .where('connectionUserIds', 'array-contains-any', [authUser.uid])
                .onSnapshot(querySnapshot => {
                    const userResult = []
                    querySnapshot.forEach(doc => {
                        if (
                            doc.data().firstName.includes(userSearchValue) || 
                            doc.data().lastName.includes(userSearchValue) ||
                            doc.data().username.includes(userSearchValue) ||
                            doc.data().email.includes(userSearchValue)
                        ) {
                            userResult.push(doc.data())
                        }
                    })
                    setSearchResultUsers(userResult);
                })
        } else {
            setSearchResultUsers([])
        }
    }, [userSearchValue])

    const createSession = () => {
        console.log()
    }

    // console.log('CreateSessionPanel, users: ', users)

    return (
        <Box>
            <Card>

                {/* Participating Clients */}
                { participatingUsers?.map((user, index) => <UserParticipatingListItem key={index} user={user}/>)}

                <TextField 
                    className={classes.searchField} 
                    id="searchField" 
                    label='Search user by email: ' 
                    value={userSearchValue} 
                    onChange={(e) => setUserSearchValue(e.target.value)} 
                />

                {/* Search Result - List clients */}
                { searchResultUsers?.map((user, index) => <UserSearchListItem key={index} user={user} />)}

            </Card>

            <Button onClick={() => console.log("add clicked")}>+ another Action</Button>

            <Button onClick={() => createSession()}>Create Session</Button>

        </Box>
    )
}
