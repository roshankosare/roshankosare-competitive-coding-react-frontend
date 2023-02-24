import React, { useEffect, useState } from "react";
import Model from "../common-components/Model";
import InputFiled from "../common-components/InputField";
import ButtonField from "../common-components/Butttonfield";
import Logo from "../../../common/Logo";
import { useAuthModel } from "../context/AuthModelContext";
import login, { logInValidation } from "./loginUtil";
import { useAuth } from "../../../context/authcontext";

type LoginProps = {
  show: boolean;
};

const Login = (props: LoginProps) => {
  const handleLogIn = async () => {
    if (error.emailError || error.passwordError) return;

    try {
      const isAuthenticated = await login(email, password);
      setAuthenticated(isAuthenticated);
      setShowAuth(false);
    } catch (error) {
      setError(error);
    }
  };

  const [show, setShow] = useState<boolean>(false);
  const { setShowAuth, setModelToSignUp } = useAuthModel();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setAuthenticated } = useAuth();
  const [error, setError] = useState<any>();

  useEffect(() => {
    setShow(props.show);
    setError({});
  }, [props]);

  useEffect(() => {
    setError(logInValidation(email, password));
  }, [email, password]);

  return (
    <Model
      show={show}
      onClose={() => {
        setShow(false);
        setShowAuth(false);
      }}
    >
      <div className="w-96 h-auto px-4 py-4 ">
        <div className="flex flex-col justify-center ">
          <Logo size={2}></Logo>
        </div>
        <InputFiled
          type="email"
          placeholder="username"
          handleFunction={setEmail}
          value={email}
          errorMsg={error?.emailError}
        ></InputFiled>
        <InputFiled
          type="password"
          placeholder="password"
          handleFunction={setPassword}
          value={password}
          errorMsg={error?.passwordError}
        ></InputFiled>

        <ButtonField
          active={true}
          text={"Sign In"}
          handleFunction={handleLogIn}
        ></ButtonField>
        <div className="w-full flex px-5 py-2 my-5 text-blue-500 justify-between">
          <p>New User? </p>
          <button
            onClick={() => {
              setModelToSignUp();
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </Model>
  );
};

export default Login;
