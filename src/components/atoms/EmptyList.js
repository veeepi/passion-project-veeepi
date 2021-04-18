import React from 'react';
import { Card, Typography } from '@material-ui/core';
import { userListStyles } from '../../styles/dashStyles';

export default function EmptyList({message}) {
    const classes = userListStyles();
    return (
        <Card className={classes.emptyList}>
            <Typography className={classes.emptyListMessage}>{message}</Typography>        
        </Card>
    )
}
