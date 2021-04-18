import React from 'react';
import {headerStyles} from '../styles/authStyles';

export default function AuthHeader() {
    const classes = headerStyles()

    return (
        <div className={classes.container}>
            <div className={classes.sectionLeft}>
                <h1 className={classes.title}>Holistic</h1>
                <div className={classes.logo}></div>
            </div>
            <div className={classes.sectionRight}>
                <h3 className={classes.textItem}>Coach-Client CRM</h3>
                <h3 className={classes.textItem}>Schedule sessions</h3>
                <h3 className={classes.textItem}>Track progress and feedback</h3>
                <h3 className={classes.textItem}>Connect with the community</h3>
            </div>
        </div>
    )
}
