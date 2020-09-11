import { useState, useEffect } from "react";
import * as firebase from "firebase";

const useUser = () => {
  let [state, setState] = useState();
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        setState(user);
      } else {
        // No user is signed in.
        setState();
      }
    });
  }, []);
  return [state, setState];
};

export default useUser;
