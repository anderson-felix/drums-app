import React, { useEffect, useState } from "react";

import { api } from "../utils/api";

function Users() {
  const { users, setUsers } = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/users");
      setUsers(data);
    })();
  }, []);
}

export default Users();
