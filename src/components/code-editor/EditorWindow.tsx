import React from 'react'
import CodeEditor from '@uiw/react-textarea-code-editor';
import {TextareaCodeEditorProps} from "@uiw/react-textarea-code-editor";

type EditorWindowProps = {
    code:string;
    setCode:Function;
}
const EditorWindow = (props:EditorWindowProps) => {
  return (
    <div className='h-96'><CodeEditor value={props.code}
    language="js"
    placeholder="Please enter JS code."
    onChange={(evn) => props.setCode(evn.target.value)}
    padding={15}
    style={{
      fontSize: 14,
      backgroundColor: "#f5f5f5",
      fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
      height:"100%"
    }} ></CodeEditor></div>
  )
}

export default EditorWindow