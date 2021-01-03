import React from "react";
import { useInput } from "react-hanger";

import { ButtonLarge } from "../components/buttons";
import { RegisterController } from "../controllers/registerController";
import { useGlobalContext } from "../contexts/global";

const RegisterUser = () => {
  const globalContext = useGlobalContext();

  const email = useInput("");
  const password = useInput("");
  const name = useInput("");
  const birthDate = useInput("");

  const canLogin = React.useCallback(() => {
    return (
      email.value.trim().length > 0 &&
      password.value.trim().length > 0 &&
      name.value.trim().length > 0 &&
      birthDate.value.trim().length > 0
    );
  }, [email, password, name, birthDate]);

  const doRegister = React.useCallback(async () => {
    const data = await RegisterController(
      email.value,
      password.value,
      name.value,
      birthDate.value
    );
    globalContext.userData = data;
  }, [email, password, name, birthDate, globalContext]);

  return (
    <div>
      <React.Fragment>
        <div className="form-group">
          <label htmlFor="exampleInpuEmail1">Email adress</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={email.value}
            onChange={email.onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={password.value}
            onChange={password.onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputName">Name</label>
          <input
            name="name"
            className="form-control"
            value={name.value}
            onChange={name.onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputBirthDate">Birth Date</label>
          <input
            className="form-control"
            name="birthDate"
            value={birthDate.value}
            onChange={birthDate.onChange}
          />
        </div>
        <ButtonLarge disabled={!canLogin()} onClick={doRegister}>
          Cadastrar
        </ButtonLarge>
      </React.Fragment>
    </div>
  );
};

export default RegisterUser;
