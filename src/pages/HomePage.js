import React from 'react'
import HomeHeader from '../containers/HomeHeader';
import Auth from '../containers/Auth';
import homeStyles from '../styles/homeStyles';

export default function HomePage() {
    const classes = homeStyles();
    
    return (
        <div className={classes.homePage}>
            
            <HomeHeader />

            <Auth /> 


        </div>
    )
}
