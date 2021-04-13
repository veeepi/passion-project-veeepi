import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBAacPgw59NU6BGYKM6X_iM51ZRTAndTug",
    authDomain: "holistic-a123b.firebaseapp.com",
    projectId: "holistic-a123b",
    storageBucket: "holistic-a123b.appspot.com",
    messagingSenderId: "351740432138",
    appId: "1:351740432138:web:2d278efd62c88b1ddb74f3",
    measurementId: "G-D0XSKRCFV8"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;