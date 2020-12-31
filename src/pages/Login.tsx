import React from "react";
import { Input, message, Typography, Descriptions, Button } from "antd";
import { useStateful } from "react-hanger";
import { Router } from "react-router-dom";

import { User } from "../interfaces/UserModel";
import { UserSearch } from "../controllers/LoginController";
import history from "../utils/history";
import Routes from "../routes";

const App = () => {
  const userData = useStateful<User | undefined>(undefined);
  const email = useStateful("");
  const password = useStateful("");

  const signUp = React.useCallback(async () => {
    if (!signUp) {
      return;
    }
    const result = await UserSearch(email.value, password.value);
    userData.setValue(result);
  }, [userData]);

  return (
    <React.Fragment>
      <Router history={history}>
        <Routes />
      </Router>
      <Input.TextArea
        className="email"
        placeholder="Digite o seu email"
        value={email.value}
      />
      <Input.TextArea
        className="password"
        placeholder="Digite o sua senha"
        value={password.value}
      />
    </React.Fragment>
  );
};

export default App;
