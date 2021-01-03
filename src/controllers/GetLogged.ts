import { User } from "../interfaces/UserModel";
import { api } from "../utils/api";

export const GetLogged = async () => {
  return (await api.get(`/session`)) as User;
};
