import axios from 'axios';
import React from 'react'
import { endPoints } from '../../../constants/endPoints';


const login = async (email:string,password:string) => {

    const payload = {
        email: email,
        password: password,
      };
    
      try {
        const { data } = await axios.post(endPoints.singINURL, payload, {
         withCredentials:true
        });
        const isAuthenticated = data.data.authenticated;
    
        return { isAuthenticated };
      } catch (axiosError: any) {
        console.log(axiosError);
        const errors = axiosError.response.data.data.errors;
    
        return { errors };
      }
}

export default login