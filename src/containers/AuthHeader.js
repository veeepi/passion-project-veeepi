import React from 'react';
import homeStyles from '../styles/homeStyles';

export default function AuthHeader() {
    const classes = homeStyles()

    return (
        // <div className={classes.homeHeaderBackgroundImage}>
            <div className={classes.homeHeader}>
                <div className={classes.homeHeaderLeft}>
                    <h1 className={classes.homeHeaderTitle}>Holistic</h1>
                    <div className={classes.homeHeaderLogo}></div>
                </div>
                <div className={classes.homeHeaderRight}>
                    <h3 className={classes.headerItem}>Coach-Client CRM</h3>
                    <h3 className={classes.headerItem}>Schedule sessions</h3>
                    <h3 className={classes.headerItem}>Track progress and feedback</h3>
                    <h3 className={classes.headerItem}>Connect with the community</h3>
                </div>
            </div>
        // </div>
    )
}
