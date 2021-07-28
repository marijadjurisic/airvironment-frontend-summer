import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./pages/index";

const Routes = () => (
  <div className="container">
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </div>
);

export default Routes;
