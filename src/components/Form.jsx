import { useEffect, useState } from "react";
import { addPost, updatePost } from "../services/PostApi";

const InputBox = ({ data, setData, updatePostApi, setUpdatePostApi }) => {
  const [addData, setAddData] = useState({ title: "", body: "" });
  let isEmpty = Object.keys(updatePostApi || {}).length === 0;

  // Update form inputs if updatePostApi changes
  useEffect(() => {
    if (updatePostApi) {
      setAddData({
        title: updatePostApi.title || "",
        body: updatePostApi.body || "",
      });
    }
  }, [updatePostApi]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setAddData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add new post
  const addPostData = async () => {
    const res = await addPost(addData);
    console.log("res", res);

    if (res.status === 201) {
      setData([...data, res.data]);
      setAddData({ title: "", body: "" });
    }
  };

  const updatePostData = async () => {
    try {
      const res = await updatePost(updatePostApi.id, addData);
      console.log(res);

      if (res.status === 200) {
        setData((prev) => {
          // console.log(prev);
          return prev.map((curElem)=>{
            return curElem.id === res.data.id ? res.data : curElem;
          })
        });
        setAddData({title:"", body:""});
        setUpdatePostApi({});
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;
    if (action === "Add") {
      addPostData();
    } else if (action === "Edit") {
      updatePostData();
    }
  };

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
          value={isEmpty ? "Add" : "Edit"}
        >
          {isEmpty ? "Add" : "Edit"}
        </button>
      </div>
    </form>
  );
};

export default InputBox;
