import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import { ButtonLarge } from "./Buttons";

function FormLogin() {
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInpuEmail1">Email adress</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
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
        <ButtonLarge disable simple>
          Entrar
        </ButtonLarge>
      </form>
    </div>
  );
}

export default FormLogin;
