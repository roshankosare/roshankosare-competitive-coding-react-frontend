import axios from "axios";
import React, { useEffect, useState } from "react";
import { endPoints } from "../../../../constants/endPoints";

const CreateComment = ({ postId }: { postId: string }) => {
  const [comment, setComments] = useState("");
  const [postButtonDiabled, setPostButtonDiabled] = useState(true);

  const handlePostSubmit = async () => {
    try {
      const payload = {
        comment: comment,
      };

      const response = await axios.patch(`${endPoints.post}/comment/${postId}`, payload, {
        withCredentials: true,
      });
      console.log(response);
      setComments("");
      
    } catch (err) {}
  };

  useEffect(() => {
    if (comment === "") return setPostButtonDiabled(true);

    setPostButtonDiabled(false);
  }, [comment]);

  return (
    <div className="flex px-2 py-2">
      <textarea
        className="w-full h-8 border border-gray-300 p-2 my-2 text-sm  focus:outline-none rounded-sm"
        onChange={(e) => {
          setComments(e.target.value);
        }}
        value={comment}
      ></textarea>
      <button
        className={`${
          postButtonDiabled ? "bg-gray-300" : "bg-gray-600"
        } text-white p-1 w-14 h-8 mx-2 my-auto`}
        disabled={postButtonDiabled}
        onClick={handlePostSubmit}
      >
        Post
      </button>
    </div>
  );
};

export default CreateComment;
