import React, { useEffect } from "react";
import { ui, uiConfig } from "../config/fbConfig";

const SignIn = () => {
  useEffect(() => {
    ui.start("#firebaseui-auth-container", uiConfig);
  }, []);
  return (
    <div>
      <div id="firebaseui-auth-container"></div>
      <div id="loader">Loading...</div>
    </div>
  );
};

export default SignIn;
