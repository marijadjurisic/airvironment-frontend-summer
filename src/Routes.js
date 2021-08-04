import React from "react";
import { Route, Switch } from "react-router-dom";
import {Home, Averages, AllData} from "./pages/index";

const Routes = () => (
  <div className="container">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/averages" component={Averages} />
        <Route path="/all-data" component={AllData} />
    </Switch>
  </div>
);

export default Routes;
