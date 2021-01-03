import { User } from "../interfaces/userModel";
import { api } from "../utils/api";

export const GetLogged = async () => {
  return (await api.get(`/session`)) as User;
};
