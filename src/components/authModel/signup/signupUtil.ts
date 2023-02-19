import axios from "axios";
import { endPoints } from "../../../constants/endPoints";

type Error = {
  emailError?: string;
  usernameError?: string;
  passwordError?: string;
};

export const signup = async (
  email: string,
  password: string,
  username: string
) => {
  const payload = {
    email: email,
    password: password,
    username: username,
  };

  try {
    const { data } = await axios.post(endPoints.signUpURL, payload);
    const isAuthenticated = data.authenticated;
    return Promise.resolve({ isAuthenticated });
  } catch (axiosError: any) {
    console.log(axiosError);
    const errors = axiosError.response.data.data.errors;

    return Promise.reject(errors);
  }
};

export const singUpvalidation = (
  email: string,
  username: string,
  password: string
) => {
  let error: Error = {};
  if (email.length === 0) error.emailError = "email is required";
  if (username.length === 0) error.usernameError = "username is required";

  if (password.length === 0) error.passwordError = "password is required";

  return error;
};
