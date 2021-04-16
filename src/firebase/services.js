import firebase from './config';

export const userSignOut = () => {
    firebase.auth().signOut()
        .catch((error) => console.log(error.message))
 }

