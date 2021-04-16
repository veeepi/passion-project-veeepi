import React from 'react'
import { dashStyles } from '../styles/dashStyles';
import Footer from '../containers/Footer';

export default function FeedPage({dataUser}) {
    const classes = dashStyles();

    return (
        <div className={classes.container}>
            <div>
            Work in Progress

            The Feed page is the Community component of this app.

            Coaches can create Posts.
            Coaches AND Clients can Like and Comment.
            </div>
            <Footer />
        </div>
    )
}
