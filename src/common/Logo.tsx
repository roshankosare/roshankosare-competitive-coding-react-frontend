import React from "react";

const Logo = ({ size }: { size: number }) => {
  if (size === 1)
    return (
      <div className="">
        <div className="flex justify-center px-2 py-2">
          <div className="text-2xl font-medium flex ">
            <h1 className=" font-extrabold text-orange-600 ">{"<>"}</h1>
            <h1>code_space</h1>
            <h1 className=" font-extrabold  text-orange-600 ">{"</>"}</h1>
          </div>
        </div>
      </div>
    );

  if (size === 2)
    return (
      <div className="">
        <div className="flex justify-center px-2 py-2">
          <div className="text-2xl font-medium flex ">
            <h1 className=" font-extrabold text-orange-600 ">{"<>"}</h1>
            <h1>code_space</h1>
            <h1 className=" font-extrabold  text-orange-600 ">{"</>"}</h1>
          </div>
        </div>
      </div>
    );

  if (size === 3)
    return (
      <div className="">
        <div className="flex justify-center px-2 py-2">
          <div className="text-2xl font-medium flex ">
            <h1 className=" font-extrabold text-orange-600 ">{"<>"}</h1>
            <h1>code_space</h1>
            <h1 className=" font-extrabold  text-orange-600 ">{"</>"}</h1>
          </div>
        </div>
      </div>
    );

  return (
    <div className="">
      <div className="flex justify-center px-2 py-2">
        <div className="text-2xl font-medium flex ">
          <h1 className=" font-extrabold text-orange-600 ">{"<>"}</h1>
          <h1>code_space</h1>
          <h1 className=" font-extrabold  text-orange-600 ">{"</>"}</h1>
        </div>
      </div>
    </div>
  );
};

export default Logo;
