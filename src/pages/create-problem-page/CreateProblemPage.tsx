import axios from "axios";
import React, { useState } from "react";
import Model from "../../components/authModel/common-components/Model";
import MarkDownEditor from "../../components/markdown/MarkDownEditor";
import { endPoints } from "../../constants/endPoints";
import CreateTestCaseForm from "./components/CreateTestCaseForm";
import {
  createProblem,
  createProblemPayload,
  TestCase,
} from "./createProblemUtil";

const CreateProblemPage = () => {
  const [value, setValue] = useState("");
  const [testCaseArray, setTestCaseArray] = useState<any>([]);
  const [testCaseArrayValue, setTestCaseArrayValue] = useState<TestCase[]>([]);
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [sampleInput, setSampleInput] = useState("");
  const [sampleOutput, setSampleOutput] = useState("");
  const [submitButtonDiabled, setSubmitButtonDiabled] = useState(false);
  const [showModel,setShowModel] = useState<boolean>(false);

  const handleProblemSubmit = async () => {


    const resetValues = ()=>{
      setValue("");
      setTestCaseArray([]);
      setTestCaseArrayValue([]);
      setTitle('');
      setDes("");
      setSampleInput("");
      setSampleOutput("");

    }
    setSubmitButtonDiabled(true);

    const payload: createProblemPayload = {
      title: title,
      description: des,
      sampleTest: {
        input: sampleInput,
        output: sampleOutput,
      },
      testCases: testCaseArrayValue,
    };

    try {
      const response = await createProblem(payload);
      setShowModel(true);
      resetValues();
    } catch (error) {}

    setSubmitButtonDiabled(false);
  };
  return (
    <div className=" bg-white sm:w-3/4  my-10 mx-auto px-5 py-5 shadow-md h-auto">
      {/* problem title input */}
      <textarea
        className="w-full h-10 resize-none border focus:outline-none rounded-sm my-2 px-1"
        placeholder="Enter Problem Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></textarea>

      <MarkDownEditor
        value={value}
        updateEditorContent={(value: string) => {
          setValue(value);
          setDes(value);
        }}
      />

      {/* sample input test case  */}
      <textarea
        className="w-full h-10 resize-none border focus:outline-none rounded-sm my-2 px-1"
        placeholder="Enter Sample test Input"
        onChange={(e) => {
          setSampleInput(e.target.value);
        }}
      ></textarea>

      {/* sample output test case  */}
      <textarea
        className="w-full h-10 resize-none border focus:outline-none rounded-sm my-2 px-1"
        placeholder="Enter Sample test Output"
        onChange={(e) => {
          setSampleOutput(e.target.value);
        }}
      ></textarea>

      <div className=" flex  justify-start">
        <p className="mx-2">Test cases</p>
        <button
          className="mx-2 bg-gray-600 text-white rounded-sm px-2 text-sm "
          onClick={() => {
            setTestCaseArray([...testCaseArray, { id: Math.random() }]);
          }}
        >
          Create
        </button>
      </div>
      <div>
        {testCaseArray &&
          testCaseArray.map((testCase: any, id: number) => (
            <CreateTestCaseForm
              key={id}
              setTestCaseValue={(value: any) => {
                setTestCaseArrayValue([...testCaseArrayValue, value]);
              }}
              removeTestCaseValue={(id: number) => {
                setTestCaseArrayValue(
                  testCaseArrayValue.filter((t: any) => t.id !== id)
                );
              }}
              onClose={() => {
                const index = id;
                setTestCaseArray([
                  ...testCaseArray.slice(0, index),
                  ...testCaseArray.slice(index + 1, testCaseArray.length),
                ]);
              }}
            />
          ))}
      </div>

      <button
        className="mx-2 bg-gray-600 text-white rounded-sm px-2 py-1  text-md  my-10"
        onClick={handleProblemSubmit}
        disabled={submitButtonDiabled}
      >
        Submit
      </button>

      <Model
        show={showModel}
        onClose={() => {
         
        }}
      >
        <div className="text-certer w-52 h-auto  px-2 py-5 border-2 flex flex-col ">
          <h1 className="text-green-600 font-bold text-center py-2 ">Problme Submited </h1>
          <button className="border bg-gray-600 px-4 py-1 my-2 mx-auto rounded-sm text-white" onClick={()=>{setShowModel(false)}}> Ok </button>

        </div>
      </Model>
    </div>
  );
};

export default CreateProblemPage;
