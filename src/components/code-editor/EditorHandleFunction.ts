import axios from "axios";
import { endPoints } from "../../constants/endPoints";

export const handleRun = async (codePayload: {
  code: string;
  language: string;
}) => {
  try {
    const response = await axios.post(`${endPoints.code}/run`, codePayload, {
      withCredentials: true,
    });
    console.log(response);
    return response.data.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getJobStatus = async (jobId:string)=>{

    try {
        const response = await axios.get(`${endPoints.code}/${jobId}`,  {
          withCredentials: true,
        });
      
        return response.data.data;
      } catch (error: any) {
        throw new Error(error);
      }
}

export const handleSubmit = async (codePayload: {
  code: string;
  language: string;
  problemId?:string
}) => {

console.log("hii")
  try {
    const response = await axios.post(`${endPoints.code}/submit`, codePayload, {
      withCredentials: true,
    });
    console.log(response);
    return response.data.data;
  } catch (error: any) {
    throw new Error(error);
  }
};



export const getSubmitJobStatus = async (jobId:string)=>{

  try {
      const response = await axios.get(`${endPoints.code}/submit/${jobId}`,  {
        withCredentials: true,
      });
    
      return response.data.data;
    } catch (error: any) {
      throw new Error(error);
    }
}
