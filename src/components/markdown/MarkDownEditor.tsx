import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import MarkDownNavBar from "./MarkDownNavBar";

const MarkDownEditor = ({
  updateEditorContent,
  value,
}: {
  updateEditorContent: Function;
  value: string;
}) => {
  const setMarkdownToTextArea = (text: string) => {
    updateEditorContent(value.concat(text));
  };

  const [isPreview, setIsPreview] = useState<boolean>(false);

  return (
    <div className=" flex flex-col border rounded-sm w-full mx-auto h-auto ">
      <div className="w-full h-10 my-2  ">
        <MarkDownNavBar addMarkToEditor={setMarkdownToTextArea} />
      </div>
      <div className={ `flex w-full px-2 py-2`}>
        <button
        className={`mx-5 ${isPreview?"":"font-extrabold"}`}
          onClick={() => {
            setIsPreview(false);
            
          }}
        >
          Editor
        </button>
        <button className={`mx-5 ${isPreview?"font-extrabold":""}`}
          onClick={() => {
            setIsPreview(true);
          }}
        >
          Preview
        </button>
      </div>
      <div className="w-full h-96 border border-gray-300 px-1 py-1 ">
        {!isPreview ? (
          <article className="w-full h-full">
            <textarea
              className="w-full h-full border-0 focus:outline-none resize-none overflow-y-scroll"
              placeholder="description..."
              value={value}
              onChange={(e) => {
                updateEditorContent(e.target.value);
              }}
            ></textarea>
          </article>
        ) : (
         
            <article className="w-full h-full">
              {" "}
              <ReactMarkdown className=" border-0 resize-none overflow-y-scroll">{value}</ReactMarkdown>
            </article>
         
        )}
      </div>
    </div>
  );
};

export default MarkDownEditor;
