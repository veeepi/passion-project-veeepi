import React, {useState, useEffect} from 'react';
import { Box, Button, Card, FormControl, Input, InputLabel, Paper, Tab, Tabs, TextField, Typography } from '@material-ui/core';
import EmptyList from '../components/atoms/EmptyList';
import UserSearchListItem from '../components/atoms/UserSearchListItem';
import UserParticipatingListItem from '../components/atoms/UserParticipatingListItem';
import Action from '../components/atoms/Action';
import firebase from '../firebase/config';
import { newSessionFormStyles } from '../styles/sessionStyles';

export default function SessionsCreatePanel({authUser, dataUser, changeTab}) {
    const classes = newSessionFormStyles();

    const usersRef = firebase.firestore().collection('users');
    const sessionsRef = firebase.firestore().collection('sessions');
    const actionsRef = firebase.firestore().collection('actions');

    const now = new Date();
    const [name, setName] = useState("")
    const [notes, setNotes] = useState("")
    const [startDateTime, setStartDateTime] = useState(now);
    const [startDateTimeEdited, setStartDateTimeEdited] = useState(false)
    const [duration, setDuration] = useState(0)
    const [location, setLocation] = useState("")
    const [participant, setParticipant] = useState({})

    const [formDataValidationPassed, setFormDataValidationPassed] = useState(false)
    useEffect(() => {
        // dynamic data validation
        if(name !== "" && participant.username ) {
            // sessionsRef.where("userId")
            setFormDataValidationPassed(true)
        } else {
            setFormDataValidationPassed(false)
        }
    }, [name, participant]) // fields to validate
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
    const addParticipant = (user) => {
        setParticipant(user)
        setUserSearchValue("") 
    }
    
    // BUILD ACTION; Push to Array
    const [actions, setActions] = useState([])
    const [addingAction, setAddingAction] = useState(false)
    const toggleAddAction = () => {
        setAddingAction(!addingAction)
    }
    // SUBMIT + REDIRECT
    // const [newSessionId, setNewSessionId] = useState("")
    const createSession = (e) => {
        // data validation
        sessionsRef
            .add({
                coachUserId: authUser.uid,
                coachUsername: dataUser.username,
                durationMinutes: duration,
                lastOrderIndex: 100,
                location: location,
                name: name,
                notes: notes,
                participantUserId: participant.id,
                participantUsername: participant.username,
                startDateTime: startDateTime,
                status: 'draft',
                type: 'personal',
            }).then(docRef => {
                sessionsRef.doc(docRef.id).update({
                    id: docRef.id,
                })
                usersRef.doc(authUser.uid).update({
                    sessions: firebase.firestore.FieldValue.arrayUnion(docRef.id),
                })
                // setNewSessionId(docRef.id)
        })
        
    }

    console.log("formDataValidationPassed: ", formDataValidationPassed)
    return (
        <Box className={classes.container}>
            <Card className={classes.sessionDetails}>
                {/* Session Info */}
                <TextField className={classes.name} id="name" label="New Session Name: *" value={name} onChange={(e) => setName(e.target.value)} />
                <Box className={classes.dateTime}>
                    {/* Date & Time */}
                    <TextField
                        id="datetime-local"
                        label="Start Date and Time"
                        type="datetime-local"
                        value={startDateTimeEdited ? startDateTime : startDateTime.toISOString().substr(0,16)}
                        // setStartDateTime
                        onChange={(e) => {
                            setStartDateTimeEdited(true)
                            setStartDateTime(e.target.value)
                        }}
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
                    label='Search for a user. Start typing... *' 
                    value={userSearchValue} 
                    onChange={(e) => setUserSearchValue(e.target.value)} 
                />
                {/* Search Result - List clients */}
                { 
                    // userSearchValue.length > 0 && 
                    searchResultUsers.length > 0 
                    ? searchResultUsers.map((user, index) => <UserSearchListItem key={index} user={user} addUser={addParticipant} listToAppend={[participant]} />)
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

            {/* { addingAction && <NewActionForm action={actions[actions.length-1]} sessionId={newSessionId} authUser={authUser} dataUser={dataUser} toggleAddAction={toggleAddAction} />} */}
            
            <Box className={classes.sessionActionsButtions}>
                    {!formDataValidationPassed && <Typography>Fields marked with * are required</Typography>}
                    <Button 
                        disabled={!formDataValidationPassed}
                        className={classes.buttonPrimary} 
                        onClick={(e) => {
                            createSession(e)
                            changeTab(e, 2) // go to Drafts tab
                        }}
                    >Create Draft Session</Button>
            </Box>
            {/* {
                !newSessionId
                ?

                : 
                <Box className={classes.sessionActionsButtions}>
                    <Button className={classes.buttonPrimary} onClick={() => toggleAddAction()}>{addingAction ? 'Cancel Add Set' : 'Add Set'}</Button>
                    <Button onClick={() => publishSession()}>Publish Session</Button>
                </Box>
            } */}

        </Box>
    )
}
