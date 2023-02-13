import axios from "axios";
import { endPoints } from "../../constants/endPoints";

export const Logout = async () => {
  try {
    const data =await axios.get(endPoints.singOutURL, {
      withCredentials: true,
    });
    
  } catch (axiosError: any) {
    console.log(axiosError);
    const errors = axiosError.response.data.data.errors;

    return { errors };
  }
};
