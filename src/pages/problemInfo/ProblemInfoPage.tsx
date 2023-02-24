import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown';
import { useLocation } from 'react-router-dom';
import Editor from '../../components/code-editor/Editor';
import { endPoints } from '../../constants/endPoints';

const ProblemInfoPage = () => {
  const location = useLocation();

  const problemId = location.state;

  const [problem, setProblem] = useState<any>();

  useEffect(() => {
    const getProblem = async () => {
      const { data } = await axios.get(`${endPoints.problem}/${problemId}`);

     
      setProblem(data.data);
     
    };
    getProblem();
  }, []);

 

  return (
    <div className="w-full h-auto px-2 py-2 my-10 bg-white flex flex-col sm:flex-row">

        {/* problem section div */}
     
     <div className='w-full sm:w-2/4'>
     <div className="w-full px-2  ">{problem &&
      <div className=" flex flex-col">

        {/* problem title div */}
       <div className= " flex flex-col px-2 py-2 my-2">
       <p>Problem Statement:</p>
        <p className="text-md font-bold my-2">{problem.title}</p>
       </div>

        {/* problem des div */}
       <div className=" flex flex-col px-2 py-2 my-2 ">
        <p>Problem Description:</p>
       <article><ReactMarkdown>{problem.description}</ReactMarkdown></article> 
        </div>

        <div className=" flex flex-col px-2 py-2 my-2">
            <p>sample Test Cases</p>

            <div className="flex flex-col my-2 px-1 py-1  bg-gray-100">
                <p className="font-bold">Input:</p>
                <p className=" ">{problem.sampleTestCase.input}</p>
                <p className="font-bold">Output:</p>
                <p className=" ">{problem.sampleTestCase.output}</p>
            </div>
            </div>
            

      </div>
      }</div>
     </div>

        {/* editor secrtion div */}
      <div className="w-full sm:w-2/4 px-2">
      {problem && <Editor problem = {true} problemId = {problem.problemId}/>}
      </div>
    </div>
  );
}

export default ProblemInfoPage