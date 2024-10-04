import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from '../firebaseConfig';
import { BiLogIn, BiLogOut } from "react-icons/bi";

firebase.initializeApp(firebaseConfig);

const GLogin = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Firebase listener to check if a user is logged in
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="login">
      {user ? (
        <div>
          <p>Welcome, {user.displayName}!</p>
          <button onClick={handleLogout}>Logout <BiLogOut /></button>
        </div>
      ) : (
        <div>
          <p>Please log in.</p>
          <button onClick={handleLogin}>Login with Google <BiLogIn /></button>
        </div>
      )}
    </div>
  );
};

export default GLogin;
