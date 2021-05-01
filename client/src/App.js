import React from "react";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Welcome from "./components/Welcome";
import PasswordResetFormEmail from "./components/PasswordResetFormEmail";
import PasswordResetFormPassword from "./components/PasswordResetFormPassword";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route
          path="/password/reset/:token"
          component={PasswordResetFormPassword}
        />
        <Route
          path="/account/password/forgot"
          component={PasswordResetFormEmail}
        />
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/welcome" component={Welcome} />
      </Switch>
    </>
  );
};

export default App;
