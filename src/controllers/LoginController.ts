import { api } from "../utils/api";
import { User } from "../interfaces/UserModel";

export const UserSearch = async (
  email: string,
  password: string,
  keepLogged: boolean
) => {
  return (await api.post(`/session`, {
    email,
    password,
    keepLogged,
  })) as User;
};
