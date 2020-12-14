import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "~/screens/Home";
import NotFound from "~/screens/NotFound";
import movieDetails from "~/screens/Movies/Details";
import ListDetails from "~/screens/Movies/List";
import FavoriteMovies from "~/screens/Movies/Favorites";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/filme" component={ListDetails} />
      <Route exact path="/filme/favoritos" component={FavoriteMovies} />
      <Route exact path="/filme/:id" component={movieDetails} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default Routes;
