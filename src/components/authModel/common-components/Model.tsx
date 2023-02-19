import { ReactNode } from "react";

type ModelProps = {
  show: boolean;
  onClose: Function;
  children?: ReactNode;
};

const Model = (props: ModelProps) => {
  if (!props.show) return null;
  return (
    <div
      id="model"
      className=" fixed inset-0 bg-black bg-opacity-20 z-10  "
      onClick={() => props.onClose()}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className=" w-96 h-3/4 inset-1  bg-white fixed top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 px-4 py-4  flex flex-col"
      >
        {props?.children}
      </div>
    </div>
  );
};

export default Model;
