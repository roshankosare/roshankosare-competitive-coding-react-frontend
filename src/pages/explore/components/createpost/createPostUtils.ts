import axios from "axios";
import { endPoints } from "../../../../constants/endPoints";

export const uploadPost = async (post: {
  title: string;
  postContaint: string;
  tags: string[];
}) => {
  try {
    const response= await axios.post(endPoints.post, post, {
      withCredentials: true,
    });
    console.log(response)
    return response.data.data;
  } catch (error:any) {
   throw new Error(error);
  }
};
