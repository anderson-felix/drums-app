import React from "react";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";

import { useGlobalContext } from "../contexts/global";
import { Logout } from "../controllers/Logout";
import { ButtonLarge } from "../components/Buttons";

export const Painel = observer(() => {
  const globalContext = useGlobalContext();
  const history = useHistory();

  const doLogout = React.useCallback(async () => {
    await Logout();

    globalContext.userData = undefined as any;
  }, [globalContext]);

  React.useEffect(() => {
    if (!globalContext.userData) history.push("/login");
  }, [globalContext.userData, history]);

  return (
    <React.Fragment>
      <div>Painel aqui</div>
      <ButtonLarge onClick={doLogout}>Sair</ButtonLarge>
    </React.Fragment>
  );
});
