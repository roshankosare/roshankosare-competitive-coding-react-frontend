import axios from "axios";
import React from "react";
import { endPoints } from "../../../constants/endPoints";

type Error = {
  emailError?: string | null;
  passwordError?: string | null;
};
const login = async (email: string, password: string) => {
  const payload = {
    email: email,
    password: password,
  };

  try {
    const { data } = await axios.post(endPoints.singINURL, payload, {
      withCredentials: true,
    });
    const isAuthenticated = data.data.authenticated;

  return Promise.resolve({ isAuthenticated }) ;
  } catch (axiosError: any) {
    console.log(axiosError);
    const errors = axiosError.response.data.data.errors;

    return Promise.reject(errors)
  }
};

export const logInValidation = (email: string, password: string) => {
  let error: Error = {};

  if (email.length === 0) error.emailError = "email is required";

  if (password.length === 0) error.passwordError = "password is required";

  return error;
};

export default login;
