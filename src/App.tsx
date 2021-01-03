import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Router, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { observer } from "mobx-react-lite";

import LoginPage from "./pages/Login";
import { Painel } from "./pages/Painel";

const Home = observer(() => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Route path={"/login"} exact component={LoginPage} />
      <Route path={"/painel"} exact component={Painel} />
      <Route path={"/cadastro"} exact component={LoginPage} />
      <Route path={"/"} exact render={() => <Redirect to={"/login"} />} />
    </Router>
  );
});

export default Home;
