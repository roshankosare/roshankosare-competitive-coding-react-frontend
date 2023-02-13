

type ButttonfieldProps = {
  active: boolean;
  handleFunction: Function;
  text: string;
};
const Butttonfield = (props: ButttonfieldProps) => {
  return (
    <div className="felx justify-center w-full px-2 ">
      <button
        className={`mx-auto ${
          !props.active
            ? "bg-gray-400 cursor-not-allowed"
            : " bg-gray-600  hover:bg-gray-500 transition-all duration-300"
        } text-white w-full py-2 my-5 rounded-sm
       cursor-pointer `}
        onClick={() => {
          if (props.active) props.handleFunction();
        }}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Butttonfield;
