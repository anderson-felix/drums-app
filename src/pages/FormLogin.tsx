import React from "react";
import { useInput, useStateful, useBoolean } from "react-hanger";
import "bootstrap/dist/css/bootstrap.css";

import { ButtonLarge } from "../components/Buttons";
import { User } from "../interfaces/UserModel";
import { UserSearch } from "../controllers/LoginController";
import { Descriptions, Typography } from "antd";
import { GetLogged } from "../controllers/GetLogged";
import { Logout } from "../controllers/Logout";

function FormLogin() {
  const userData = useStateful<User | undefined>(undefined);
  const email = useInput("");
  const password = useInput("");
  const keepLogged = useBoolean(false);

  const canLogin = React.useCallback(() => {
    return email.value.trim().length > 0 && password.value.trim().length > 0;
  }, [email, password]);

  const signIn = React.useCallback(async () => {
    if (!canLogin()) return;

    const result = await UserSearch(
      email.value,
      password.value,
      keepLogged.value
    );
    userData.setValue(result);
    email.clear();
    password.clear();
    keepLogged.setFalse();
  }, [userData, canLogin, email, password, keepLogged]);

  const doLogout = React.useCallback(async () => {
    await Logout();
    userData.setValue(undefined);
  }, [userData]);

  const getLogged = React.useCallback(async () => {
    const user = await GetLogged();
    userData.setValue(user);
  }, [userData]);

  React.useEffect(() => {
    getLogged();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {userData.value ? (
        <React.Fragment>
          <Typography.Text>Usuário Logado</Typography.Text>
          <Descriptions className="detalhes" bordered>
            <Descriptions.Item>Olá, {userData.value.name}</Descriptions.Item>
          </Descriptions>
          <ButtonLarge onClick={doLogout}>{"Sair"}</ButtonLarge>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="form-group">
            <label htmlFor="exampleInpuEmail1">Email adress</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              value={email.value}
              onChange={email.onChange}
            />
            <small className="form-text text-muted" id="emailHelp">
              Nao seja burro
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password.value}
              onChange={password.onChange}
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              checked={keepLogged.value}
              onChange={keepLogged.toggle}
            />
            <label htmlFor="exampleCheck1" className="form-check-label">
              Manter logado
            </label>
          </div>
          <ButtonLarge disabled={!canLogin()} simple onClick={signIn}>
            Entrar
          </ButtonLarge>
        </React.Fragment>
      )}
    </div>
  );
}

export default FormLogin;
