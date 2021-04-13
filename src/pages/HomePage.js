import React from 'react'
import HomeHeader from '../containers/HomeHeader';
import Auth from '../containers/Auth';
import Footer from '../containers/Footer';
import homeStyles from '../styles/homeStyles';

export default function HomePage() {
    const classes = homeStyles();
    
    return (
        <div className={classes.homePage}>
            
            <HomeHeader />

            <Auth /> 

            <Footer />

        </div>
    )
}
