import React, {useState, useEffect} from 'react';
import { Box, Card, CardActions, CardContent, IconButton, Typography } from '@material-ui/core';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';
import { userListStyles } from '../../styles/dashStyles';
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';

export default function UserSearchListItem({user, addUser, listToAppend}) {
    const classes = userListStyles();

    const [alreadyOnList, setAlreadyOnList] = useState(false)
    useEffect(() => {
        if(listToAppend.includes(user.id)) {
            setAlreadyOnList(true)
        }
    }, [])

    return (
        <Card className={alreadyOnList ? classes.contanerDone : classes.contaner}>
            <CardContent className={classes.userData}>
                <Typography className={classes.username}>{user.username}</Typography>
                <Box className={classes.fullName}>
                    <Typography className={classes.listItemFirstName}>{user.firstName && user.firstName}</Typography>
                    <Typography className={classes.listItemLastName}>{user.lastName && user.lastName}</Typography>
                </Box>
            </CardContent>
            <CardActions className={classes.actions}>
                {
                    !alreadyOnList // Check if list contains userId
                    ? 
                    <IconButton 
                        className={classes.iconButton} 
                        onClick={() => {
                            addUser(user)
                        }}
                    >
                        <AddCircleTwoToneIcon className={classes.icon}/>
                    </IconButton>
                    :
                    <Typography><CheckCircleTwoToneIcon className={classes.iconComplete}/></Typography>
                }

            </CardActions>
        </Card>
    )
}
