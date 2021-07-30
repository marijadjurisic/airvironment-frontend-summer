import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Averages } from "./pages/index";

const Routes = () => (
  <div className="container">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/averages" component={Averages} />
    </Switch>
  </div>
);

export default Routes;
