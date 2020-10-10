import React, { ReactElement } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from "./projects/Home";
import Error from "./projects/Error";
import history from "./utils/history";

const Routes = (): ReactElement => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
};

export default Routes;
