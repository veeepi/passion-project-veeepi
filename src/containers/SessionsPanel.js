import React, {useState, useEffect} from 'react';
import { Box, Button, Paper, Tab, Tabs, Typography } from '@material-ui/core';
// import  from '@material-ui/core/Paper';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
import firebase from '../firebase/config';

export default function SessionsPanel({dataUser}) {

    const sessionsRef = firebase.firestore().collection('sessions');
    
    const [sessions, setSessions] = useState([])
    useEffect(() => {
        if(dataUser.sessions) {
            // sessionsRef.where("userId")

        }
    }, [])

    return (
        <Box>
            Sessions Panel
        </Box>
        
    )
}
