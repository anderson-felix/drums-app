import { api } from "../utils/api";
import { User } from "../interfaces/UserModel";

export const UserSearch = async (email: string, password: string) => {
  return (await api.post(`/session`, {
    email: email,
    password: password,
  })) as User;
};

export const UserView = async (email: string, password: string) => {
  api.get(email);
};
