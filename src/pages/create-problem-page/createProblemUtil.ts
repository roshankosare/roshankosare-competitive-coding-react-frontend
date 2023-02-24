import axios from "axios";
import { endPoints } from "../../constants/endPoints";

export type TestCase = {
  input: string;
  output: string;
};

export type createProblemPayload = {
  title: string;
  description: string;
  sampleTest: TestCase;
  testCases: TestCase[];
};

export const createProblem = async (payload: createProblemPayload) => {
  try {
    const { data } = await axios.post(endPoints.problem, payload, {
      withCredentials: true,
    });
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
