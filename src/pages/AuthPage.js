import React from 'react'
import AuthHeader from '../containers/AuthHeader';
import Auth from '../containers/Auth';
import Footer from '../containers/Footer';
import { authStyles } from '../styles/authStyles';

export default function AuthPage() {
    const classes = authStyles();
    
    return (
        <div className={classes.authBackgroundImage}>
            <div className={classes.authBackgroundOverlay}>
                <AuthHeader />
                <Auth /> 
                <Footer />
            </div>
        </div>
    )
}
