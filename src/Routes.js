import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "./pages/index";
import { MeasurementCard } from "./components/index";

const Routes = () => (
  <div className="container">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/averages" component={MeasurementCard} />
    </Switch>
  </div>
);

export default Routes;
