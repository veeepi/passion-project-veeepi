import React, {useState, useEffect} from 'react';
import { Box, Button, Card, CardContent, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import SessionActions from './SessionActions';

export default function SessionDetails({session, exitSession}) {
    return (
        <div>
            <Typography>{session.name}</Typography>
            <Button onClick={() => exitSession()}>Exit Session</Button>
        </div>
    )
}
