import React, {useState, useEffect} from 'react';
import { Box, Button, Card, FormControl, Input, InputLabel, Paper, Tab, Tabs, TextField, Typography } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import  from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
import EmptyList from '../components/atoms/EmptyList';
import UserSearchListItem from '../components/atoms/UserSearchListItem';
import UserParticipatingListItem from '../components/atoms/UserParticipatingListItem';
import Action from '../components/atoms/Action';
import NewActionForm from '../components/forms/NewActionForm';
import firebase from '../firebase/config';
import { newSessionFormStyles } from '../styles/sessionStyles';
import { ContactPhoneOutlined } from '@material-ui/icons';

export default function SessionsCreatePanel({authUser, dataUser}) {
    const classes = newSessionFormStyles();

    const usersRef = firebase.firestore().collection('users');
    const sessionsRef = firebase.firestore().collection('sessions');
    const actionsRef = firebase.firestore().collection('actions');

    const now = new Date();
    // const nowToString = now.toISOString().substr(0,16); // 2017-05-24T10:30
    const [name, setName] = useState("")
    const [notes, setNotes] = useState("")
    const [startDateTime, setStartDateTime] = useState(now);
    const [duration, setDuration] = useState(0)
    const [location, setLocation] = useState("")
    // const [sessions, setSessions] = useState([])

    useEffect(() => {
        if(dataUser.sessions) {
            // sessionsRef.where("userId")

        }
    }, [])
    // SEARCH Users; Push to Array
    const [searchResultUsers, setSearchResultUsers] = useState([])
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
    // ADD USER as Participant
    const [participant, setParticipant] = useState({})
    const addParticipant = (user) => {
        setParticipant(user)
    }
    const removeParticipant = () => {
        setParticipant({})
    }
    // BUILD ACTION; Push to Array
    const [actions, setActions] = useState([])
    const [addingAction, setAddingAction] = useState(false)
    const toggleAddAction = () => {
        setAddingAction(!addingAction)
    }
    // SUBMIT + REDIRECT
    const createSession = () => {
        // sessionsRef
    }
    console.log("participant", participant)
    return (
        <Box className={classes.container}>
            <Card className={classes.sessionDetails}>
                {/* Session Info */}
                <TextField className={classes.name} id="name" label="New Session Name: " value={name} onChange={(e) => setName(e.target.value)} />
                <Box className={classes.dateTime}>
                    {/* Date & Time */}
                    <TextField
                        id="datetime-local"
                        label="Start Date and Time"
                        type="datetime-local"
                        value={startDateTime.toISOString().substr(0,16)}
                        // setStartDateTime
                        onChange={(e) => setStartDateTime(e.target.value)}
                        // defaultValue={nowToString}
                        className={classes.startDateTime}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    {/* Duration */}
                    <TextField className={classes.duration} id="duration" label="Duration: " value={duration} onChange={(e) => setDuration(e.target.value)} />
                </Box>
                {/* Location */}
                <TextField className={classes.location} id="location" label="Location: " value={location} onChange={(e) => setLocation(e.target.value)} />
                
                {/* Participating Clients */}
                { 
                    participant?.username
                    ? <UserParticipatingListItem user={participant} setParticipant={setParticipant} />
                    : <EmptyList message={'No participants selected.'}/> 
                }
                {/* User SEARCH */}
                <TextField 
                    className={classes.searchField} 
                    id="searchField" 
                    label='Search of a user. Start typing... ' 
                    value={userSearchValue} 
                    onChange={(e) => setUserSearchValue(e.target.value)} 
                />
                {/* Search Result - List clients */}
                { 
                    // userSearchValue.length > 0 && 
                    searchResultUsers.length > 0 
                    ? searchResultUsers.map((user, index) => <UserSearchListItem key={index} user={user} setParticipant={setParticipant}/>)
                    : <EmptyList message={'No search results.'}/>                     
                }
            </Card>

            <Box className={classes.sessionActionList}>
            {/* Session ActionList  */}
            {
                actions.length > 0
                ? actions.map((action, index) => 
                    <Action key={index} action={action} authUser={authUser} dataUser={dataUser} />
                )
                : <EmptyList message={'No actions added yet.'} />
            }
            </Box>

            { addingAction && <NewActionForm action={actions[actions.length-1]} authUser={authUser} dataUser={dataUser} toggleAddAction={toggleAddAction} />}

            <Box className={classes.sessionActionsButtions}>
                <Button className={classes.buttonPrimary} onClick={() => toggleAddAction()}>{addingAction ? 'Cancel Add Set' : 'Add Set'}</Button>
                <Button className={classes.buttonPrimary} onClick={() => createSession()}>COMPLETE SESSION</Button>
            </Box>
        </Box>
    )
}
