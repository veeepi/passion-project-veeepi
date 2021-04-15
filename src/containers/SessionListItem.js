import React, {useState, useEffect} from 'react';
import { Box, Button, Card, CardContent, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import SessionActions from './SessionActions';


export default function SessionListItem({session, openSession}) {
    const history = useHistory();

    const [clientParticipants, setClientParticipants] = useState([])
    const [coachParticipants, setCoachParticipants] = useState([])
    
    const toSession = () => {
        // history.push(`/session/${}`)
        console.log("toSession clicked")
    }

    console.log("SessionListItem session: ", session)
    return (
        <Card>
            <CardContent>
                <Typography>{session.name}</Typography>
                <Typography>{session.notes}</Typography>

                <Typography>{session.timestampEvent.seconds}</Typography>

            </CardContent>

            <Button onClick={() => openSession(session)}>OPEN</Button>

        </Card>
    )
}
