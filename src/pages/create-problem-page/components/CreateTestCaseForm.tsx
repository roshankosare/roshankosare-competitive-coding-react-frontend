import React, { useState } from 'react'

type createTestCaseFormProps = {
    onClose:Function,
    setTestCaseValue:Function,
    removeTestCaseValue:Function,
}
const CreateTestCaseForm = (props:createTestCaseFormProps) => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [id, setId] = useState(Math.random());
    const [submited, setSubmited] = useState(false);
    return (
      <div className="w-full flex flex-col border rounded-sm my-4 px-2 py-2 ">
        <div className="flex justify-end">
          <button
            className="px-2 border rounded-sm bg-slate-500 text-white"
            onClick={() => {
             props. onClose();
              if (submited) props.removeTestCaseValue(id);
            }}
          >
            X
          </button>
        </div>
        <textarea
          className="w-full h-10 resize-none border focus:outline-none rounded-sm my-2 px-1 py-1"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="input for test case"
        ></textarea>
        <textarea
          className="w-full h-10 resize-none border focus:outline-none rounded-sm my-2 px-1"
          onChange={(e) => {
            setOutput(e.target.value);
          }}
          placeholder="output for test case"
        ></textarea>
        <button
          className={`px-2 w-20 border rounded-sm ${submited?"bg-green-600":" bg-slate-500"} text-white`}
          disabled={submited}
          onClick={() => {
            props.setTestCaseValue({ input, output, id });
            setSubmited(true);
          }}
        >
          {submited?"saved":"submit"}
        </button>
      </div>
    );
  };

export default CreateTestCaseForm