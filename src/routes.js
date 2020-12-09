import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "~/screens/Home";
import NotFound from "~/screens/NotFound";
import FilmDetails from "~/screens/Films/Details";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/filme/:id" component={FilmDetails} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
