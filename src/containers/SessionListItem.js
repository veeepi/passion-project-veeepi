import React, {useState, useEffect} from 'react';
import { Box, Button, Card, CardActions, CardContent, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { sessionListStyles } from '../styles/sessionStyles';


export default function SessionListItem({session, openSession, cancelSession}) {
    const classes = sessionListStyles()
    const history = useHistory();

    const [clientParticipants, setClientParticipants] = useState([])
    const [coachParticipants, setCoachParticipants] = useState([])
    
    const toSession = () => {
        // history.push(`/session/${}`)
        console.log("toSession clicked")
    }

    console.log("SessionListItem session: ", session)
    return (
        <Card className={`${classes.listItem} ${session.status === 'completed' && classes.sessionCompleted} ${session.status === 'cancelled' && classes.sessionCancelled} : classes.listItem`}>
            <CardContent className={classes.listItemInfo}>
                <Box className={classes.listItemTitleInfo}>
                    <Typography className={classes.name}>{session.name}</Typography>
                    <Typography className={classes.dateTime}>{session.startDateTime.seconds}</Typography>
                    </Box>
                <Typography className={classes.notes}>{session.notes}</Typography>

            </CardContent>
            <CardContent className={classes.listItemParticipants}>
                <Box classname={classes.listItemParticipantsInfo}>
                    <Typography className={classes.listItemLabel}>{'By coach: '}</Typography>
                    <Typography className={classes.listItemCoachName}>{session.coachName}</Typography>
                </Box>
                <Box classname={classes.listItemParticipantsInfo}>
                    <Typography className={classes.listItemLabel}>{'Participating: '}</Typography>
                    <Typography className={classes.listItemClientCount}>{session.clientIds.length}</Typography>
                </Box>
            </CardContent>
            <CardActions className={classes.listItemButtons}>
                <Typography className={classes.listItemClientCount}>{session.status}</Typography>
                {session.status === 'upcoming' && <Button className={classes.buttonSecondary} onClick={() => cancelSession(session)}>Cancel Session</Button>}
                <Button className={classes.buttonPrimary} onClick={() => openSession(session)}>OPEN Session</Button>
            </CardActions>
        </Card>
    )
}
