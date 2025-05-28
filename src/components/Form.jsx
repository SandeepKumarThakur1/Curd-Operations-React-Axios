import React, { useState } from "react";

const InputBox = () => {
    const [addData, setAddData] = useState({
        title: '',
        body: '',
    })

    const handleInputChange = (e) => {
        // const name = e.target.title
        // const value = e.target.value
    }
  return (
    <>
      <form
        className="d-flex align-items-center gap-2 w-100 justify-content-center pb-4"
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
