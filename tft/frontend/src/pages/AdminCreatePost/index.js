import { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import AdminLayout from "../../layouts/AdminLayout";
import { useNavigate } from "react-router";
import Modal from "react-bootstrap/Modal";
import { Parser } from "html-to-react";

const initPost = {
  id: 0,
  title: "Tiêu đề bài viết",
  content: "Đây là nội dung bài viết",
  likes: 0,
  views: 0,
  author: 1,
};

export default function CreatePost() {
  const contentEditor = useRef();
  const title = useRef();

  const nagivate = useNavigate();

  const [cursorPosition, setCursorPosition] = useState(0);
  const [show, setShow] = useState(false);

  const [post, setPost] = useState(initPost);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    return setShow(true);
  };

  function processingSavePost() {
    //
    const data = {
        ...post,
        title: title.current.value,
        author: 1,
    }

    fetch(`http://localhost:8000/api/posts`, {
      method: "POST", //PATCH
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res);
        console.log("Store successfully");
        alert("Lưu thay đổi thành công");
      })
      .catch((err) => {
        console.log(err);
        console.log("Store unsuccessfully");
      })
      .finally(() => {
        nagivate("./../");
      });
  }

  function handleEditorChange(e) {
    // setPost(e.target.getContent());
    post.content = e.target.getContent();
    setPost(post);

    // Update cursor position
    const editor = contentEditor.current.editor;
    const selection = editor.selection.getRng();
    setCursorPosition(selection.startOffset);
  }

  // Function to restore cursor position
  function restoreCursorPosition() {
    const editor = contentEditor.current.editor;
    editor?.selection?.select(editor.getBody(), true);
    editor?.selection?.collapse(false);
    editor?.selection?.setRng(cursorPosition, cursorPosition);
  }

  // Call restoreCursorPosition after re-render
  useEffect(() => {
    restoreCursorPosition();
  });

  return (
    <>
      <AdminLayout
        slot={
          <div className="post-page">
            <div className="d-flex">
              <button
                onClick={() =>
                  window.confirm("Bỏ thay đổi?") && nagivate("./../")
                }
                className="btn btn-teal px-3 py-2"
                style={{ width: "auto" }}
              >
                <i className="bi bi-x-lg"></i>
              </button>
              <span className="offset-md-10"></span>
              <button onClick={handleShow} className="btn btn-teal px-5">
                Xem
              </button>
            </div>
            <hr />
            <div className="post-input-title mb-3">
              <label htmlFor="post-title" className="py-2">
                <b>Tiêu đề bài viết</b>
              </label>
              <h1>
                <input
                  ref={title}
                  placeholder="Tiêu đề bài viết"
                  type="text"
                  id="post-title"
                  className="form-control py-3"
                />
              </h1>
            </div>
            <div className="post">
              <Editor
                ref={contentEditor}
                apiKey="8gjew3xfjqt5cu2flsa3nz2oqr4z5bru9hr3phl05rsfyss3"
                init={{
                  plugins:
                    "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker",
                  toolbar:
                    "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
                }}
                initialValue={""}
                onChange={handleEditorChange}
              />
              <div className="offset-md-10 col-md-2">
                <button
                  onClick={() => processingSavePost()}
                  className="tab-teal active mt-2"
                >
                  Lưu bài viết
                </button>
              </div>
            </div>
            <Modal show={show} onHide={handleClose} size="xl">
              <Modal.Header closeButton>
                <Modal.Title>{title.current?.value}</Modal.Title>
              </Modal.Header>
              <Modal.Body>{Parser().parse(post.content)}</Modal.Body>
              <Modal.Footer>
                <button className="btn btn-teal" onClick={handleClose}>
                  Close
                </button>
              </Modal.Footer>
            </Modal>
          </div>
        }
      ></AdminLayout>
    </>
  );
}
