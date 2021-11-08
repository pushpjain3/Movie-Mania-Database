import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "../profile/Profile";

const Routes = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
};

export default Routes;
