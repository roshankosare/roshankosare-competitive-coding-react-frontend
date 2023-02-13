import axios from "axios";
import { endPoints } from "../../constants/endPoints";

 export const Logout = async()=>{
    try {
        const { data } = await axios.get(endPoints.signUpURL);
        const isAuthenticated = data.authenticated;
        return { isAuthenticated };
      } catch (axiosError: any) {
        console.log(axiosError);
        const errors = axiosError.response.data.data.errors;
    
        return { errors };
      }
 }