import React, { useState, useEffect } from "react";

import MarkDownEditor from "../../../../components/markdown/MarkDownEditor";
import { uploadPost } from "./createPostUtils";

const CreatePost = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: Function;
}) => {
  const [title, setTitle] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [postBody, setPostBody] = useState<string>("");
  const [postButtonDisabled, setpostButtonDiabled] = useState(true);

  //// handle post sumbit  function
  const handlePost = async () => {
    // e.preventDefault();

    setpostButtonDiabled(true);
    const payload = {
      title: title,
      tags: tags,
      postContaint: postBody,
    };

    try {
      const data = await uploadPost(payload);
      console.log(data)
      onClose();
    } catch (error) {
      console.log(error);
    }

   

    setpostButtonDiabled(false);
  };

  //function to add markdown to textarea

  useEffect(() => {
    if (title === "" || postBody === "") return setpostButtonDiabled(true);

    setpostButtonDiabled(false);
  }, [title, tags, postBody]);

  //set markdown text using markdown renderer

  return (
    <div
      className={`w-full h-96 shadow-custom fixed  left-0 bg-white px-4 py-4 flex flex-col overflow-y-scroll ${
        open ? "bottom-0 " : "-bottom-96"
      }  transition-all duration-500 `}
    >
      <div className="flex justify-between">
        <textarea
          className="w-2/4 h-10 border rounded-sm border-gray-300 px-1 py-1  my-2 focus:outline-none resize-none"
          placeholder="enter title for Post..."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></textarea>
        <div className="flex">
          <button
            className="bg-gray-600 text-white p-1 w-14 h-8 mx-2 "
            onClick={() => {
              onClose();
            }}
          >
            Close
          </button>
          <button
            className={`${
              !postButtonDisabled
                ? " cursor-pointer bg-gray-600"
                : "bg-gray-300 cursor-not-allowed"
            } text-white p-1 w-14 h-8 mx-2`}
            onClick={(e) => handlePost()}
            disabled={postButtonDisabled}
          >
            Post
          </button>
        </div>
      </div>
      <div className="flex">
        <textarea
          className=" w-full h-10 border border-gray-300 px-1 py-1 my-2  focus:outline-none rounded-sm resize-none "
          placeholder="tags for post..."
          // value={tags}
          onChange={(e) => {
            setTags([e.target.value]);
          }}
        ></textarea>
      </div>

      <MarkDownEditor
        value={postBody}
        updateEditorContent={(value: string) => setPostBody(value)}
      />
    </div>
  );
};

export default CreatePost;
