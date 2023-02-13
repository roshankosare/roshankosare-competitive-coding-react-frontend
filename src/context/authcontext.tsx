import axios from "axios";
import React, { ReactNode, useContext, useEffect, useState } from "react";
import { User } from "../common/types";
import { endPoints } from "../constants/endPoints";

export interface IAuthContext {
  isAuthenticated: boolean;
 
  setAuthenticated:Function
  
}

export const AuthContext:React.Context<IAuthContext> = React.createContext<IAuthContext>({
  isAuthenticated: false,
  setAuthenticated:()=>{}

});
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authorized, setAuthorized] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null | undefined>();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const result = await axios.get(endPoints.authURL, {
          withCredentials: true,
        });
        if (result.data.data.authenticated) {
          setAuthorized(true);
          setUser(result.data.data.user);
        }
      } catch (error) {}

      setLoading(false);
    };

    checkAuth();
  }, [authorized]);

  const setAutheticated = (value:boolean)=>{
    setAuthorized(value);
  }

  const values: IAuthContext = {
    isAuthenticated: authorized,
    setAuthenticated:setAutheticated
   
  };

  return (
    <AuthContext.Provider value={values}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
