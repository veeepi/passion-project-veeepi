import React, {useState, useEffect} from 'react';
import { Box, Button, Card, FormControl, Input, InputLabel, InputAdornment, Typography } from '@material-ui/core';
import { userConnectionsStyles} from '../styles/dashStyles';
import UserSearchListItem from '../components/atoms/UserSearchListItem';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import firebase from '../firebase/config';

export default function UserConnections({dataUser}) {
    const classes = userConnectionsStyles();
    
    const usersRef = firebase.firestore().collection('users');

    const [searchResultUsers, setSearchResultUsers] = useState([])
    const [userSearchValue, setUserSearchValue] = useState('')
    useEffect(() => {
        if (userSearchValue.length > 1) {
            usersRef
                .where('email', '==', userSearchValue)
                .onSnapshot(querySnapshot => {
                    const userResult = []
                    querySnapshot.forEach(doc => {
                        userResult.push(doc.data())
                    })
                    setSearchResultUsers(userResult);
                })
        } else {
            setSearchResultUsers([])
        }
    }, [usersRef, userSearchValue])

    const [searchingUser, setSearchingUser] = useState(false)

    const addConnection = (user) => {
        usersRef
            .doc(dataUser.id).update({
                connectionUserIds: firebase.firestore.FieldValue.arrayUnion(user.id),
            })
            .then(() => {
                usersRef.doc(user.id).update({
                    connectionUserIds: firebase.firestore.FieldValue.arrayUnion(dataUser.id),
                }).catch((error) => console.log(error))
            })
            .then(() => {
                setSearchResultUsers([])
                setSearchingUser(false)
            }).catch((error) => console.log(error))
    }

    console.log("searchResultUsers", searchResultUsers)
    return (
        <Card className={classes.container}>
            <Box className={classes.field}>
                <Typography className={classes.label}>Connections: </Typography>
                <Typography className={classes.value}>{dataUser.connectionUserIds?.length}</Typography>
            </Box>

            {
                searchingUser &&
                <FormControl className={classes.authField}>
                    <InputLabel className={classes.authFormLabel}>Email Address:</InputLabel>
                    <Input
                        className={classes.authFormInput}
                        onChange={(e) => setUserSearchValue(e.target.value)}
                        id="email"
                        // type="email"
                        label="Search for User by Email"
                        placeholder="email@example.com"
                        disableUnderline={true}
                        required 
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchTwoToneIcon className={classes.authAdornmentIcon} />
                            </InputAdornment>
                        }
                    />
                    
                </FormControl>
            }
            {
                searchingUser && 
                searchResultUsers?.map((user, index) => 
                    <UserSearchListItem user={user} addUser={addConnection} listToAppend={dataUser.connectionUserIds}/>
                )
            }
            
            
            <Button onClick={() => setSearchingUser(!searchingUser)}>{searchingUser ? "Cancel Search" : "Search for a user"}</Button>

            
        </Card>
    )
}
