import React from "react";

type InputFieldProps = {
  type: "text" | "email" | "password";
  placeholder?: string;
  handleFunction?: Function;
  errorMsg?: string;
  value: string | any;
};

const InputField = (props: InputFieldProps) => {
  
  
  return (
    <div className="w-full felx flex-col px-2 py-2 my-5">
      {props.errorMsg && <p className="text-red-500 text-xs text-left py-1">{props.errorMsg}</p>}
      <input
        type={props.type}
        placeholder={props?.placeholder ?? "Enter value"}
        className={`w-full h-10 px-2 py-1 border  focus:outline focus:outline-gray-300  ${
          props.errorMsg ? "border-red-500" : "border-gray-500"
        }`}
        onChange={(
          e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
        ) => {
          props.handleFunction?.(e.target.value);
        }}
        value={props.value}
      />
    </div>
  );
};

export default InputField;
