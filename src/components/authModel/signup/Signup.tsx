import React, { useEffect, useState } from "react";
import Logo from "../../../common/Logo";
import Model from "../common-components/Model";
import InputFiled from "../common-components/InputField";
import ButtonField from "../common-components/Butttonfield";
import { useAuthModel } from "../context/AuthModelContext";
import { signup, singUpvalidation } from "./signupUtil";
import { useAuth } from "../../../context/authcontext";

type signUpProps = {
  show: boolean;
};

const Signup = (props: signUpProps) => {
  const [show, setShow] = useState<boolean>(false);
  const { setShowAuth, setModelToSignIn } = useAuthModel();
  const { setAuthenticated } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState<any>();

  const handelSignUp = async () => {
    if (error.emailError || error.passwordError || error.username ) return;
    try {
      const isAuthenticated = await signup(email, password, username);
      setAuthenticated(isAuthenticated);
      setShowAuth(false);
    } catch (error) {
      setError(error)
    }
  };
  useEffect(() => {
    setShow(props.show);
  }, [props]);

  useEffect(() => {
    setError(singUpvalidation(email, username, password));
  }, [email, username, password]);

  return (
    <Model
      show={show}
      onClose={() => {
        setShow(false);
        setShowAuth(false);
      }}
    >
      <div className="w-full flex justify-center">
        <Logo size={2}></Logo>
      </div>
      <InputFiled
        type="text"
        placeholder="username"
        handleFunction={setUsername}
        value={username}
        errorMsg={error?.usernameError}
      ></InputFiled>
      <InputFiled
        type="email"
        placeholder="Email"
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
        text={"Sign Up"}
        handleFunction={handelSignUp}
      ></ButtonField>

      <div className="w-full flex px-5 py-2 my-5 text-blue-500 justify-between">
        <p>Already User? </p>
        <button
          onClick={() => {
            setModelToSignIn();
          }}
        >
          Sign In
        </button>
      </div>
    </Model>
  );
};

export default Signup;
