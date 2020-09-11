import React, { useEffect } from "react";
import { ui, uiConfig } from "../config/fbConfig";
import { Redirect } from "react-router-dom";
import useUser from "../actions/useUser";

const SignIn = () => {
  let [user] = useUser();

  useEffect(() => {
    ui.start("#firebaseui-auth-container", uiConfig);
  }, []);

  return (
    <div>
      {user ? (
        <Redirect to="/account" />
      ) : (
        <div>
          <div id="firebaseui-auth-container"></div>
          <div id="loader">Loading...</div>
        </div>
      )}
    </div>
  );
};

export default SignIn;
