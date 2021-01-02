import userEvent from "@testing-library/user-event";
import React, { useEffect } from "react";
import { useArray } from "react-hanger";
import { User } from "../interfaces/UserModel";

import { api } from "../utils/api";

function Users() {
  const users = useArray<User>([]);

  const getUsers = React.useCallback(async () => {
    const { data } = await api.get("/users");
    users.setValue(data);
  }, []);

  useEffect(() => {
    getUsers();
  }, []);
}

export default Users();
