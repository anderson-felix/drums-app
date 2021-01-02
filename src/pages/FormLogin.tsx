import React from "react";
import { useStateful } from "react-hanger";
import "bootstrap/dist/css/bootstrap.css";

import { ButtonLarge } from "../components/Buttons";
import { User } from "../interfaces/UserModel";
import { UserSearch } from "../controllers/LoginController";
import { Descriptions, Typography } from "antd";

function FormLogin() {
  const userData = useStateful<User | undefined>(undefined);
  const email = useStateful("");
  const password = useStateful("");

  const signUp = React.useCallback(async () => {
    if (!signUp) {
      return;
    }
    console.log(canSearch);

    const result = await UserSearch(email.value, password.value);
    userData.setValue(result);
  }, [userData]);

  const onChange = React.useCallback(
    ({ target: { value } }) => {
      userData.setValue(value);
    },
    [userData]
  );
  const canSearch = React.useCallback(() => {
    return { email: userData.value?.email, password: userData.value?.password };
  }, [userData, email, password]);

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInpuEmail1">Email adress</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            // value={email.value}
            onChange={onChange}
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
            // value={password.value}
            onChange={onChange}
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label htmlFor="exampleCheck1" className="form-check-label">
            Manter logado
          </label>
        </div>
        <ButtonLarge disable simple onClick={canSearch}>
          Entrar
        </ButtonLarge>
      </form>

      <React.Fragment>
        <Typography.Text>Data users</Typography.Text>
        <Descriptions className="detalhes" bordered>
          <Descriptions.Item label="userdata value">
            {email.value}
          </Descriptions.Item>
        </Descriptions>
      </React.Fragment>
    </div>
  );
}

export default FormLogin;
