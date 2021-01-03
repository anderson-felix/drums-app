import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { observer } from "mobx-react-lite";
import { useInput, useBoolean } from "react-hanger";
import { Route, useHistory } from "react-router-dom";
import { Modal } from "antd";

import { GetLogged } from "../controllers/GetLogged";
import HeaderLogo from "../components/Logo";
import { UserSearch } from "../controllers/LoginController";
import { ButtonLarge } from "../components/Buttons";
import { useGlobalContext } from "../contexts/global";
import RegisterUser from "./RegisterUser";

const Login = observer(() => {
  const globalContext = useGlobalContext();
  const history = useHistory();

  const email = useInput("");
  const password = useInput("");
  const keepLogged = useBoolean(false);

  const returnToLogin = React.useCallback(() => {
    history.push("/login");
  }, [history]);

  const goToRegister = React.useCallback(() => {
    history.push("/cadastro");
  }, [history]);

  const getLogged = React.useCallback(async () => {
    try {
      const user = await GetLogged();
      globalContext.userData = user;
    } catch (e) {}
  }, [globalContext]);

  React.useEffect(() => {
    getLogged();
    // eslint-disable-next-line
  }, []);

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
    globalContext.userData = result;
    email.clear();
    password.clear();
    keepLogged.setFalse();
  }, [globalContext, canLogin, email, password, keepLogged]);

  React.useEffect(() => {
    if (globalContext.userData) history.push("/painel");
  }, [globalContext.userData, history]);

  return (
    <div className="row flex-1">
      <div className="col">
        <HeaderLogo />
      </div>

      <div className="col-sm-6 col-md-4">
        <div>
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
            <small className="form-text text-muted" id="not is register">
              Não é cadastrado?
            </small>
            <ButtonLarge onClick={goToRegister}>Cadastrar</ButtonLarge>
          </React.Fragment>
        </div>
      </div>
      <Route path={"/cadastro"} exact>
        <Modal onCancel={returnToLogin} footer={null} visible={true}>
          <RegisterUser />
        </Modal>
      </Route>
    </div>
  );
});

export default Login;
