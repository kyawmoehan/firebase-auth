import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import useUser from "../actions/useUser";

const Account = () => {
  let [user, setUser] = useUser();

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
        console.log("success");
        setUser();
      })
      .catch(function (error) {
        // An error happened.
        console.log("error");
      });
  };

  return (
    <div>
      <h1>Account</h1>
      {user ? (
        <div>
          <p>User name: {user.displayName}</p>
          <p>User Email: {user.email}</p>
          <p>User Phone: {user.phoneNumber}</p>
          <img src={user.photoURL} alt={user.displayName} />
        </div>
      ) : (
        <p>No user</p>
      )}
      <button onClick={() => handleSignOut()}>Sign Out</button>
    </div>
  );
};

export default Account;
