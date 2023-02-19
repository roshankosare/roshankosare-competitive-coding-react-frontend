import React, { useEffect, useState } from "react";
import { codeSnippits } from "./CodeSnippits";
import EditorButtonsAndNav from "./EditorButtonsAndNav";
import { getJobStatus, handleRun, handleSubmit } from "./EditorHandleFunction";
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

  useEffect(() => {
    setCode(codeSnippits[language]);
  }, [language]);

  const handleRunCode = async () => {
    setRunButtonDisabled(true);
    setOutput("");

    setStatus("pending");
    try {
      const result = await handleRun({code:code,language:language});
      
     

       let intervalId = setInterval(async () => {
        const jobResult = await getJobStatus(result.jobId);
        console.log(jobResult)
       
        if (jobResult.jobStatus === "completed") {
          clearInterval(intervalId);
          setOutput(jobResult.output);
          setStatus(jobResult.status);
          setRunButtonDisabled(false);
        }
      }, 300);
    } catch (error) {}
  };

  const handleSubmitCode = async () => {};

  return (
    <div className="flex flex-col max-w-5xl h-5/6 mx-auto my-10 ">
      <EditorNavBar setLanguage={setLanguage}></EditorNavBar>
      <EditorWindow code={code} setCode={setCode}></EditorWindow>
      <EditorButtonsAndNav
        status={status}
        handleRun={handleRunCode}
        problem={props.problem}
        runButtonDisabled={runButtonDisabled}
        submitButtonDisabled={submitButtonDisable}
        handleSubmit={handleSubmitCode}
      ></EditorButtonsAndNav>
      <EditorInputOutput
        setInput={setInput}
        output={output}
      ></EditorInputOutput>
    </div>
  );
};

export default Editor;
