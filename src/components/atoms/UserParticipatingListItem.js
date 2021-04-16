import React from 'react';
import { Box, Card, CardActions, CardContent, IconButton, Typography } from '@material-ui/core';
import RemoveCircleTwoToneIcon from '@material-ui/icons/RemoveCircleTwoTone';
import { userListStyles } from '../../styles/dashStyles';

export default function UserParticipatingListItem({user, setParticipant}) {
    const classes = userListStyles();
    return (
        <Card className={classes.contaner}>
            <CardContent className={classes.userData}>
                <Typography className={classes.username}>{user.username}</Typography>
                <Box className={classes.fullName}>
                    <Typography className={classes.listItemFirstName}>{user.firstName && user.firstName}</Typography>
                    <Typography className={classes.listItemLastName}>{user.lastName && user.lastName}</Typography>
                </Box>
            </CardContent>
            <CardActions className={classes.actions}>
                <IconButton className={classes.iconButton} onClick={() => setParticipant()}><RemoveCircleTwoToneIcon /></IconButton>
            </CardActions>
        </Card>
    )
}
