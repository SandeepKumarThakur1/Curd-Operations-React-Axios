import React, { useState } from "react";
import { addPost } from "../services/PostApi";

const InputBox = ({ data, setData }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const addPostData = async () => {
    const res = await addPost(addData);
    console.log("res", res);

    if(res.status === 201){
      setData([...data, res.data]);
      setAddData({title:"", body:""})
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addPostData();
  };
  return (
    <>
      <form
        className="d-flex align-items-center gap-2 w-100 justify-content-center pb-4"
        onSubmit={handleFormSubmit}
      >
        <div>
          <input
            type="text"
            placeholder="Title..."
            name="title"
            id="title"
            autoComplete="off"
            className="px-3 py-2 rounded-3"
            value={addData.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="News..."
            name="body"
            id="body"
            autoComplete="off"
            className="px-3 py-2 rounded-3"
            value={addData.body}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button className="px-3 py-2 rounded-3 bg-success text-white border-success">
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default InputBox;
