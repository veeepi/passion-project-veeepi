import React from 'react'
import { IconButton } from '@material-ui/core';
import footerStyles from '../styles/footerStyles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';


export default function Footer() {
    const classes = footerStyles();
    return (
        <div className={classes.container}>
            <IconButton className={classes.buttonIcons}><FacebookIcon /></IconButton>
            <IconButton className={classes.buttonIcons}><InstagramIcon /></IconButton>
            <IconButton className={classes.buttonIcons}><YouTubeIcon /></IconButton>
        </div>
    )
}
