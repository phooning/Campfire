import React, { ReactElement, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.scss";

const Home = lazy(() => import("pages/Home"));

function App(): ReactElement {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
