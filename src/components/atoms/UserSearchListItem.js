import React, {useState, useEffect} from 'react';
import { Box, Button, Card, CardActions, CardContent, FormControl, IconButton, Input, InputLabel, Paper, Tab, Tabs, TextField, Typography } from '@material-ui/core';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';
import { userListStyles } from '../../styles/dashStyles';

export default function UserSearchListItem({user, setParticipant}) {
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
                <IconButton className={classes.iconButton} onClick={() => setParticipant(user)}><AddCircleTwoToneIcon /></IconButton>
            </CardActions>
        </Card>
    )
}
