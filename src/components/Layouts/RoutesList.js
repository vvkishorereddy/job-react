import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./../Home";
import Jobs from "./../Jobs";
import JobDetails from "./../JobDetails";

class RoutesList extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/jobs" component={Jobs} />
        <Route exact path="/jobs/:id" component={JobDetails} />
      </Switch>
    );
  }
}

export default RoutesList;
