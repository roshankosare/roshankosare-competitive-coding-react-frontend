
import React, { ReactNode, useContext, useEffect, useState } from "react";


export interface IAuthModelContext {
 show:boolean;
 model:"signin" | "signup";
 setShowAuth:Function,
 setModelToSignUp:Function;
 setModelToSignIn:Function;
  
}

export const AuthModelContext:React.Context<IAuthModelContext> = React.createContext<IAuthModelContext>({
 show:false,
 model:"signin",
 setShowAuth:()=>{},
 setModelToSignIn:()=>{},
 setModelToSignUp:()=>{}
});
export const useAuthModel = () => {
  return useContext(AuthModelContext);
};

export const AuthModelProvider = ({ children }: { children: ReactNode }) => {
  const [showAuth,setShowAuth] = useState<boolean>(false);
  const [model,setModel] = useState<"signin"|"signup">("signin")

  const setModelToSignIn = ()=>{
    setModel("signin");
  }
  const setModelToSignUp = ()=>{
    setModel("signup");
  }

//   useEffect(() => {
    
  

   
//   }, []);

  const values: IAuthModelContext = {
    show:showAuth,
    model:model,
    setShowAuth:setShowAuth,
    setModelToSignIn:setModelToSignIn,
    setModelToSignUp:setModelToSignUp
  };

  return (
    <AuthModelContext.Provider value={values}>
      {children}
    </AuthModelContext.Provider>
  );
};
