import { useEffect, useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Parser } from "html-to-react";
import { Link } from "react-router-dom";

const intiPost = {
  id: 0,
  title: "Tiêu đề bài viết",
  content: "Nội dung bài viết",
  author: 1,
};

export default function AdminEnrollIndex() {
  const modal = useRef();

  const [posts, setPosts] = useState([intiPost]);
  const [show, setShow] = useState(false);
  const [reviewedPost, setReviewedPost] = useState(intiPost);

  useEffect(() => {
    getDataFromDatabase();
  }, []);

  function getDataFromDatabase() {
    fetch("http://localhost:8000/api/posts/enroll")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      })
      .catch((err) => {
        console.log(err);
        setPosts([intiPost]);
      });
  }

  const handleClose = () => setShow(false);
  const handleShow = (post) => {
    setReviewedPost(post);
    return setShow(true);
  };

  function handleDeletePost(id) {
    fetch(`http://localhost:8000/api/posts/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then(() => {
        getDataFromDatabase();
      })
      .catch((err) => {});
  }

  return (
    <>
      <h1>Quản lý các bài viết tuyển sinh</h1>

      <div className="row">
        <div className="col">
          <Link
            to={"them-bai-viet"}
            className="btn btn-outline-success my-3"
            href="http://127.0.0.1:8000/admin/products/create"
          >
            Thêm bài viết mới
          </Link>
        </div>
        <div className="col text-end">
          <a
            className="btn btn-outline-teal my-3 mx-2"
            href="http://127.0.0.1:8000/admin/products/create"
          >
            Xem danh sách
          </a>
          <a
            className="btn btn-outline-teal my-3 ms-auto"
            href="http://127.0.0.1:8000/admin/products/create"
          >
            Xem biều đồ
          </a>
        </div>
        <div className="alert alert-success"></div>
        <div className="alert alert-danger"></div>

        <table className="table table-striped">
          <thead>
            <tr>
              <td>ID</td>
              <td>Tiêu đề</td>
              <td>Lượt xem</td>
              <td>Lượt thích</td>
              <td>Ngày đăng</td>
              <td>Lần cập nhật gần nhất</td>
              <td>Tác giả</td>
              <td className="text-center" colSpan="3">
                Action
              </td>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {posts.map((post, index) => (
              <tr key={index}>
                <td>{post["id"]}</td>
                <td>{post["title"]}</td>
                <td>{post["views"]}</td>
                <td>{post["likes"]}</td>
                <td>{post["created_at"]}</td>
                <td>{post["updated_at"]}</td>
                <td>
                  <img
                    src={post["avatar"]}
                    className="img-fluid rounded-top"
                    alt=""
                  />
                </td>
                <td>
                  <span
                    onClick={() => handleShow(post)}
                    className="btn btn-outline-success"
                  >
                    <i className="bi bi-eye-fill"></i>
                  </span>
                </td>
                <td>
                  <Link
                    to={"./chinh-sua-bai-viet"}
                    state={post}
                    className="btn btn-outline-warning"
                  >
                    <i className="bi bi-pencil-square"></i>
                  </Link>
                </td>
                <td>
                  <span
                    onClick={() =>
                      window.confirm("Xác nhận xoá bài viết?") &&
                      handleDeletePost(post.id)
                    }
                    className="btn btn-outline-danger"
                  >
                    <i className="bi bi-x-circle"></i>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div ref={modal}>
        <Modal show={show} onHide={handleClose} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>{reviewedPost.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{Parser().parse(reviewedPost.content)}</Modal.Body>
          <Modal.Footer>
            <button className="btn btn-teal" onClick={handleClose}>
              Close
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}