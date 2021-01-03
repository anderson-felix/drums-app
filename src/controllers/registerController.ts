import { User } from "../interfaces/userModel";
import { api } from "../utils/api";

export const RegisterController = async (
  email: string,
  password: string,
  name: string,
  birthDate: string
) => {
  return (await api.post(`/register`, {
    email,
    password,
    name,
    birthDate,
  })) as User;
};
