import React from 'react';
import { Box, Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { sessionListStyles } from '../styles/sessionStyles';


export default function SessionListItem({session, openSession }) {
    const classes = sessionListStyles()
    
    console.log("SessionListItem session: ", session)
    return (
        <Card className={`${classes.listItem} ${session.status === 'completed' && classes.sessionCompleted} ${session.status === 'cancelled' && classes.sessionCancelled} : classes.listItem`}>
            <CardContent className={classes.listItemColumn}>
                <Typography className={classes.name}>{session.name}</Typography>
                <Typography className={classes.dateTime}>{session.startDateTime}</Typography>
                <Typography className={classes.location}>{session.location}</Typography>
                <Typography className={classes.notes}>{session.notes}</Typography>
            </CardContent>
            <CardContent className={classes.listItemColumn}>
                <Box className={classes.listItemParticipantsInfo}>
                    <Typography className={classes.listItemLabel}>{'By coach: '}</Typography>
                    <Typography className={classes.listItemValue}>{session.coachUsername}</Typography>
                </Box>
                <Box className={classes.listItemParticipantsInfo}>
                    <Typography className={classes.listItemLabel}>{'Participating: '}</Typography>
                    <Typography className={classes.listItemValue}>{session.participantUsername[1]}</Typography>
                </Box>
            </CardContent>
            <CardActions className={classes.listItemButtons}>
                <Typography className={classes.listItemClientCount}>{session.status}</Typography>
                <Button className={classes.buttonPrimary} onClick={() => openSession(session)}>OPEN Session</Button>
            </CardActions>
        </Card>
    )
}
