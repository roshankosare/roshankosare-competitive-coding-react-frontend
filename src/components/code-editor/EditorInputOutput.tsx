import React, { useState } from 'react'

type EditorInputOutputProps = {
    setInput:Function;
    output:string;
}
const EditorInputOutput = (props:EditorInputOutputProps) => {
    const [inputButton,setInputButton] = useState<boolean>(false);
    const [outputButton,setOutputButton] = useState<boolean>(true)
  return (
    <div className=" w-full h-auto py-2 bg-white">
    <div className="flex flex-col">
      <div className="w-full h-10 flex">
        <button
          className={`px-4 ${
            inputButton ? "bg-gray-700 text-white" : "bg-white text-black"
          } h-8 mx-3 w-20  border rounded-sm`}
          onClick={() => {
            setInputButton(true);
            setOutputButton(false);
          }}
        >
          Input
        </button>
        <button
          className={`px-4${
            outputButton ? " text-white bg-gray-700" : "bg-white text-black"
          } h-8 mx-3 w-20  border rounded-sm`}
          onClick={() => {
            setInputButton(false);
            setOutputButton(true);
          }}
        >
          Output
        </button>
      </div>
      <div className="w-full h-96 bg-gray-700 text-white flex">
        {outputButton ? (
          props.output
        ) : (
          <textarea
            className="w-full h-96  bg-gray-700 text-white"
            onChange={(e) => props.setInput(e.target.value)}
          ></textarea>
        )}
      </div>
    </div>
  </div>

  )
}

export default EditorInputOutput