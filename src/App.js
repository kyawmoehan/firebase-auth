import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./component/SignIn";
import Account from "./component/Account";

function App() {
  return (
    <BrowserRouter>
      <h1 className="title">Firebase Auth</h1>
      <Switch>
        <Route path="/signin" component={SignIn} url={"/account"} />
        <Route path="/account" component={Account} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
