import React, { useEffect, useState } from "react";
import Model from "../common-components/Model";
import InputFiled from "../common-components/InputField";
import ButtonField from "../common-components/Butttonfield";
import Logo from "../../../common/Logo";
import { useAuthModel } from "../context/AuthModelContext";
import login from "./loginUtil";

type LoginProps = {
  show: boolean;
};
const Login = (props: LoginProps) => {

  const handleLogIn = async () => {
    const { isAuthenticated, errors } = await login(email, password);

    if (isAuthenticated) {}

    if (errors) console.log(errors);
  };

  const [show, setShow] = useState<boolean>(false);
  const {setShowAuth,setModelToSignUp} = useAuthModel();
  const [email,setEmail] = useState<string>('');
  const [password,setPassword] = useState<string>('');

  useEffect(() => {
    setShow(props.show);
  }, [props]);

  return (
    <Model
      show={show}
      onClose={() => {
        setShow(false);
        setShowAuth(false);
      }}
    >
      <div className="flex flex-col justify-center">
        <Logo size={2}></Logo>
      </div>
      <InputFiled
        type="email"
        placeholder="username"
        handleFunction={setEmail}
        value={email}
       
      ></InputFiled>
      <InputFiled
        type="password"
        placeholder="password"
        handleFunction={setPassword}
        value={password}
      ></InputFiled>

      <ButtonField
        active={true}
        text={"Sign In"}
        handleFunction={handleLogIn}
      ></ButtonField>
      <div className="w-full flex px-5 py-2 my-5 text-blue-500 justify-between">
      <p>New User? </p>
      <button onClick={()=>{setModelToSignUp()}} >Sign Up</button>
      </div>
    </Model>
  );
};

export default Login;
