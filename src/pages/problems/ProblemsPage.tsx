import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { endPoints } from "../../constants/endPoints";

const ProblemsPage = () => {
  const [problems, setProblems] = useState<[any]>();

  useEffect(() => {
    const getProblems = async () => {
      const { data } = await axios.get(endPoints.problem);
      console.log(data);
      setProblems(data.data);
    };

    getProblems();
  }, []);

  return (
    <div className="flex flex-col w-full sm:w-2/4 mx-auto mt-2  bg-white shadow-lg shadow-gray px-2 py-2 h-screen  ">
      {problems &&
        problems.map((problem: any) => (
          <Link
            to={"/problem"}
            state={problem.problemId}
            key={problem.problemId}
          >
            <div className=" h-20 border border-gray-20  my-2 shadow-md">
              <div className="flex h-full">
               <div className="flex flex-col px-2 py-2">
               <div className="w-14 h-14 my-auto px-1 ">
                  <img className="rounded-full " src="userIcon.png" alt="" />
                </div>
                <div className="text-xs mx-auto text-gray-500">{problem.user.username}</div>
               </div>
                <div className="flex flex-col ml-5 h-full py-2">
                  <p className=" text-gray-500 font-bold text-md py-2">
                    {problem.title}
                  </p>
                  <div className="flex bottom-0">
                    <p className="my-auto mr-5 text-xs   text-gray-400 ">
                      Likes:{problem.likes}
                    </p>
                    <p className="my-auto mr-5 text-xs    text-gray-400">
                      Submissions:{12}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default ProblemsPage;
