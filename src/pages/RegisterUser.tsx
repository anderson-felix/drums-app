import React from "react";
import { useInput, useStateful } from "react-hanger";

import { ButtonLarge } from "../components/Buttons";
import { Register } from "../interfaces/UserModel";
import { RegisterController } from "../controllers/RegisterController";

function RegisterUser() {
  const userData = useStateful<Register | undefined>(undefined);
  const email = useInput("");
  const password = useInput("");
  const name = useInput("");
  const birthDate = useInput("");

  const doRegister = React.useCallback(async () => {
    const data = await RegisterController(
      email.value,
      password.value,
      name.value,
      birthDate.value
    );
    userData.setValue(data);
  }, [email, password, name, birthDate, userData]);

  return (
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
        <div className="form-group">
          <label htmlFor="exampleInputName">Name</label>
          <input
            type="name"
            className="form-control"
            id="exampleInputName1"
            value={name.value}
            onChange={name.onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputBirthDate">Birth Date</label>
          <input
            type="birthDate"
            className="form-control"
            id="exampleInputName1"
            value={birthDate.value}
            onChange={birthDate.onChange}
          />
        </div>
        <ButtonLarge onClick={doRegister}>Cadastrar</ButtonLarge>
      </React.Fragment>
    </div>
  );
}

export default RegisterUser;
