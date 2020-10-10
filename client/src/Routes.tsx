import React, { ReactElement } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./projects/Home";
import Error from "./projects/Error";
import history from "./utils/history";

const Routes = (): ReactElement => {
  return (
    <Router history={history}>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={Home} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
};

export default Routes;
