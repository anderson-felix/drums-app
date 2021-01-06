import React from "react";
import { Route, Router, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { observer } from "mobx-react-lite";
import "bootstrap/dist/css/bootstrap.css";

import LoginPage from "./pages/Login";
import { HomePage } from "./pages/HomePage";

const Home = observer(() => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Route path={"/login"} exact component={LoginPage} />
      <Route path={"/homepage"} exact component={HomePage} />
      <Route path={"/cadastro"} exact component={LoginPage} />
      <Route path={"/"} exact render={() => <Redirect to={"/login"} />} />
    </Router>
  );
});

export default Home;
