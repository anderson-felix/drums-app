import { Register } from "../interfaces/UserModel";
import { api } from "../utils/api";

export const RegisterController = async (
  email: string,
  password: string,
  name: string,
  birthDate: string
) => {
  return (await api.post(`/session`, {
    email,
    password,
    name,
    birthDate,
  })) as Register;
};
