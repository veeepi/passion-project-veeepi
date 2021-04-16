import React from 'react';
import { Box, Card, CardActions, CardContent, IconButton, Typography } from '@material-ui/core';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';
import { userListStyles } from '../../styles/dashStyles';

export default function UserSearchListItem({user, addUser, listToAppend}) {
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
                {
                    !listToAppend.includes(user.id) // Check if list contains userId
                    ? 
                    <IconButton 
                        className={classes.iconButton} 
                        onClick={() => {
                            addUser(user)
                        }}
                    >
                        <AddCircleTwoToneIcon />
                    </IconButton>
                    :
                    <Typography>Already added.</Typography>
                }

            </CardActions>
        </Card>
    )
}
