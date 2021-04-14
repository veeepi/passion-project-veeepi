import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
// import TabPanel from './TabPanel';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import UserBanner from '../containers/UserBanner';


export default function DashPage({dataUser}) {
    
    return (
        <div>
            <UserBanner dataUser={dataUser} />

            
            DASH
        </div>
    )
}
