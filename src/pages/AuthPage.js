import React from 'react'
import AuthHeader from '../containers/AuthHeader';
import Auth from '../containers/Auth';
import Footer from '../containers/Footer';
import homeStyles from '../styles/homeStyles';

export default function AuthPage() {
    const classes = homeStyles();
    
    return (
        <div className={classes.homeHeaderBackgroundImage}>
            <div className={classes.homePage}>
                <AuthHeader />
                <Auth /> 
                <Footer />
            </div>
        </div>
    )
}
