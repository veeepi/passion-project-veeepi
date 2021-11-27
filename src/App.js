import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MenuAppBar from "./containers/MenuAppBar";
import AuthPage from "./pages/AuthPage";
import FeedPage from "./pages/FeedPage";
import DashPage from "./pages/DashPage";
import firebase from "./firebase/config";
import ProfilePage from "./pages/ProfilePage";

const UserContext = createContext();

function App() {
  const [authUser, setAuthUser] = useState({});
  const [dataUser, setDataUser] = useState({});

  // firebase.auth() User - GET & Store
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged((user) => {
      setAuthUser(user);
    });
    return subscriber; // unsubscribe on unmount
  }, []);
  // firebase.firestore() User - GET & Store
  function fetchUser() {
    // if (authUser) {
    // const userUID = firebase.auth().authUser.uid // (firebaseAuth)
    const userDoc = firebase.firestore().collection("users").doc(authUser?.uid); // get user document by user UID
    userDoc.onSnapshot((doc) => {
      setDataUser(doc.data());
    });
    // }
  }
  useEffect(() => {
    fetchUser();
  }, [authUser]);

  // console.log('App authUser: ', authUser)
  // console.log('App dataUser: ', dataUser)
  return (
    <Router className="App">
      {!dataUser ? (
        <Route path="/">
          <AuthPage />
        </Route>
      ) : (
        <UserContext.Provider value={dataUser}>
          <MenuAppBar dataUser={dataUser} />
          <Switch>
            <Route path="/profile/:userId">
              <ProfilePage authUser={authUser} dataUser={dataUser} />
            </Route>
            <Route path="/feed">
              <FeedPage dataUser={dataUser} />
            </Route>
            <Route path="/">
              <DashPage authUser={authUser} dataUser={dataUser} />
            </Route>
          </Switch>
        </UserContext.Provider>
      )}
    </Router>
  );
}

export default App;
