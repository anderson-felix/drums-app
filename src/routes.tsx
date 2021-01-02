import React from "react";
import { Switch, Route } from "react-router-dom";

import FormLogin from "./pages/FormLogin";

function Routes() {
  return (
    <Switch>
      <Route exact path="/login" component={FormLogin} />
    </Switch>
  );
}

export default Routes();
