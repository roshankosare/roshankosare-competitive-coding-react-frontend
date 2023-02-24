import React, { useEffect, useState } from "react";
import { codeSnippits } from "./CodeSnippits";
import EditorButtonsAndNav from "./EditorButtonsAndNav";
import {
  getJobStatus,
  getSubmitJobStatus,
  handleRun,
  handleSubmit,
} from "./EditorHandleFunction";
import EditorInputOutput from "./EditorInputOutput";
import EditorNavBar from "./EditorNavBar";
import EditorWindow from "./EditorWindow";

type EditorProps = {
  //   code: string;
  //   language: string;
  //   setLanguage: Function;
  //   setCode: Function;
  //   status: string;
  //   runButtonDiabled: boolean;
  //   handleRun: Function;
  //   handleSubmit?: Function;
  //   submitButtonDisabled?: boolean;
  problem: boolean;
  problemId?: string;
  //   setInput: Function;
  //   output: string;
};
const Editor = (props: EditorProps) => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [status, setStatus] = useState("");
  const [runButtonDisabled, setRunButtonDisabled] = useState(false);
  const [submitButtonDisable, setSubmitButtonDisable] = useState(false);
  const [language, setLanguage] = useState<string>("c");
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string>();
  const [testCasesPassed, setTestCasesPassed] = useState<number>(0);
  const [totalTestCases, setTotalTestCases] = useState<number>();

  useEffect(() => {
    setCode(codeSnippits[language]);
  }, [language]);

  const handleRunCode = async () => {
    setRunButtonDisabled(true);
    setOutput("");

    setStatus("pending");
    try {
      const result = await handleRun({ code: code, language: language });

      let intervalId = setInterval(async () => {
        const jobResult = await getJobStatus(result.jobId);
        console.log(jobResult);

        if (jobResult.jobStatus === "completed") {
          clearInterval(intervalId);
          setOutput(jobResult.output);
          setStatus("completed");
          setRunButtonDisabled(false);
        }
      }, 500);
    } catch (error) {}
  };

  const handleSubmitCode = async () => {
    try {
      const result = await handleSubmit({
        code: code,
        language: language,
        problemId: props.problemId,
      });

      setStatus("pending");
      let intervalId = setInterval(async () => {
        const jobResult = await getSubmitJobStatus(result.jobId);
        console.log(jobResult);

        if (jobResult.jobStatus === "completed") {
          clearInterval(intervalId);
          setOutput(jobResult.output);
          setStatus("completed");
          setRunButtonDisabled(false);
          setResult(jobResult.result);
          setTotalTestCases(jobResult.testCasesResult.length);
          for (let i = 0; i < jobResult.testCasesResult.length; i++) {
           
            if (jobResult.testCasesResult[i].status === "pass"){
             
              setTestCasesPassed(pre=>pre+1);
            }
         
          }
        }
      }, 500);
    } catch (error) {}
  };

  return (
    <div className="flex flex-col max-w-5xl h-5/6 mx-auto my-10 border border-gray-300 ">
      <EditorNavBar
        language={language}
        setLanguage={setLanguage}
      ></EditorNavBar>
      <EditorWindow code={code} setCode={setCode}></EditorWindow>
      <EditorButtonsAndNav
        status={status}
        handleRun={handleRunCode}
        problem={props.problem}
        runButtonDisabled={runButtonDisabled}
        submitButtonDisabled={submitButtonDisable}
        handleSubmit={handleSubmitCode}
      ></EditorButtonsAndNav>
      {result && (
        <div className="w-full h-10 py-2 border-b flex">
          {" "}
          <p className="mx-2 my-auto "> {result}</p>
          <p className="mx-2 my-auto">Passed:{testCasesPassed}/{totalTestCases} test cases</p>
        </div>
      )}
      <EditorInputOutput
        setInput={setInput}
        output={output}
      ></EditorInputOutput>
    </div>
  );
};

export default Editor;
