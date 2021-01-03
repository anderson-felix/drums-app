import { api } from "../utils/api";

export const Logout = async () => {
  await api.post("/logout");
};
