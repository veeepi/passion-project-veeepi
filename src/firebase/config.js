import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import config from '../config.json';

const firebaseConfig = {
    apiKey: config.firebaseConfig.apiKey,
    authDomain: config.firebaseConfig.authDomain,
    projectId: config.firebaseConfig.projectId,
    storageBucket: config.firebaseConfig.storageBucket,
    messagingSenderId: config.firebaseConfig.messagingSenderId,
    appId: config.firebaseConfig.appId,
    measurementId: config.firebaseConfig.measurementId
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;