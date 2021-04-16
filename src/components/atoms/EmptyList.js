import React from 'react';
import { Card, Typography } from '@material-ui/core';
import { userListStyles } from '../../styles/dashStyles';

export default function EmptyList({message}) {
    const classes = userListStyles();
    return (
        <Card className={classes.container}>
            <Typography className={classes.empty}>{message}</Typography>        
        </Card>
    )
}
