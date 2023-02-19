import React from "react";

type EditorButtonProps = {
  status: string;
  handleRun: Function;
  handleSubmit?: Function;
  runButtonDisabled: boolean;
  problem: boolean;
  submitButtonDisabled?: boolean;
};
const EditorButtonsAndNav = (props: EditorButtonProps) => {
  
  return (
    <div className="w-100 h-12 text-xs flex p-2 border-b border-gray-300 bg-white">
      <button
        className="w-20 p-1  mx-2 bg-green-500 text-white"
        onClick={()=>props.handleRun()}
        disabled={props.runButtonDisabled}
      >
        Run
      </button>
      {props.problem ? (
        <button
          className="w-20 p-1 mx-2 bg-green-500 text-white"
          onClick={props.handleSubmit && props.handleSubmit()}
          disabled={props?.submitButtonDisabled}
        >
          submit
        </button>
      ) : null}
      <h3
        className={`text-center p-1 mx-4 text-md font-bold
     ${
       props.status === "pending"
         ? "text-orange-500"
         : props.status === "success"
         ? "text-green-500"
         : "text-red-600"
     }`}
      >
        {props.status}
      </h3>
    </div>
  );
};

export default EditorButtonsAndNav;
