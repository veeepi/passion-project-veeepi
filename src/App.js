import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import MenuAppBar from './containers/MenuAppBar';
import AuthPage from './pages/AuthPage';
import FeedPage from './pages/FeedPage';

import firebase from './firebase/config';
import Auth from './containers/Auth';

function App() {
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged((authUser) => {
      setUser(authUser);	 
    })
   return subscriber; // unsubscribe on unmount
  }, []);

  console.log('App user: ', user)
  return ( !user ? 
    <AuthPage />
    :
    <Router className="App">
      <MenuAppBar />
      <Switch>
        <Route path="/">
          <FeedPage />
        </Route>
      </Switch>
       
    </Router>
  );
}

export default App;
