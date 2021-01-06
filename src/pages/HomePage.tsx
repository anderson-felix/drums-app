import React from "react";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router-dom";

import { useGlobalContext } from "../contexts/global";
import { Logout } from "../controllers/logout";
import { ButtonLarge } from "../components/buttons";

export const HomePage = observer(() => {
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
      <div>Aqui vai ficar a HomePage</div>
      <ButtonLarge onClick={doLogout}>Sair</ButtonLarge>
    </React.Fragment>
  );
});
