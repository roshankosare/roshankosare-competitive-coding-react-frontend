import React, { useEffect, useState } from "react";
import { useAuthModel } from "./context/AuthModelContext";
import Login from "./login/Login";
import Signup from "./signup/Signup";

const Auth = () => {
  const { show, model } = useAuthModel();

  if (!show) return null;
  if (model === "signin")
    return (
      <>
        <Login show={true}></Login>
      </>
    );

  if (model === "signup")
    return (
      <>
        <Signup show={true}></Signup>
      </>
    );

  return null;
};

export default Auth;
