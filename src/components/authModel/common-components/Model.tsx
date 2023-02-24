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
        className=" w-auto h-auto   bg-white fixed top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2  flex  "
      >
        {props?.children}
      </div>
    </div>
  );
};

export default Model;
