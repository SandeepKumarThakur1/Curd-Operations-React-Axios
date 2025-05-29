import { useEffect, useState } from "react";
import { addPost } from "../services/PostApi";

const InputBox = ({ data, setData, updatePostApi, setUpdatePostApi }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add Post API call
  const addPostData = async () => {
    const res = await addPost(addData);
    console.log("res", res);

    if (res.status === 201) {
      setData([...data, res.data]);
      setAddData({ title: "", body: "" });
    }
  };

  // Form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addPostData();
  };

  // If updatePostApi has data, pre-fill the form
  useEffect(() => {
    if (updatePostApi) {
      setAddData({
        title: updatePostApi.title || "",
        body: updatePostApi.body || "",
      });
    }
  }, [updatePostApi]);

  return (
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
        <button
          type="submit"
          className="px-3 py-2 rounded-3 bg-success text-white border-success"
        >
          {updatePostApi ? "Edit" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default InputBox;