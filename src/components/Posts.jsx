import { useEffect, useState } from "react";
import { deletePost, getPost } from "../services/PostApi";
import { Button, Col, Row } from "react-bootstrap";

const Posts = () => {
  const [data, setData] = useState([]);
  // console.log(getPost())

  const getPostData = async () => {
    try {
      const res = await getPost();
      // console.log(res)
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log("Api Error Get Method", error);
    }
  };

  const onhandleDelete = async (id) => {
    try {
      const res = await deletePost(id);
      console.log(res);
      if(res.status === 200){
        const newUpdatedPost = data.filter((curElem)=>{
          return curElem.id !== id;
        })
        setData(newUpdatedPost);
      }
      else{
        console.log("Not Delete Post", res.status)
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <>
      <ul className="list-unstyled">
        <Row className="gap-3 justify-content-center" md={4}>
          {data.map((curElem) => {
            const { id, title, body } = curElem;
            return (
              <Col
                key={id}
                className="mb-1 p-3 rounded-3"
                style={{ background: "#3d3d3d" }}
              >
                <li>
                  <p>{id}</p>
                  <p>
                    <span className="fw-semibold">Title</span> : {title}
                  </p>
                  <p>
                    <span className="fw-semibold">News</span> : {body}
                  </p>
                  <div className="d-flex gap-2 align-items-center">
                    <Button
                      as="a"
                      variant="Success"
                      className="bg-success text-white"
                    >
                      Edit
                    </Button>
                    <Button
                      as="a"
                      variant="danger"
                      className="bg-danger"
                      onClick={() => onhandleDelete(id)}
                    >
                      Delete
                    </Button>
                  </div>
                </li>
              </Col>
            );
          })}
        </Row>
      </ul>
    </>
  );
};

export default Posts;
