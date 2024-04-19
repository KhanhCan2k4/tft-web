import { useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import AdminLayout from "../../layouts/AdminLayout";

let post1 = `<h1>Hello world</h1>`;

export default function AdminPostPage() {
  const reviewTab = useRef();
  const editTab = useRef();
  const contentEditor = useRef();
  const [cursorPosition, setCursorPosition] = useState(0);

  const [post, setPost] = useState("");
  const [tab, setTab] = useState(reviewTab);

  useEffect(() => {
    if (tab === reviewTab) {
      getPostFromDatabase();
    }
  }, [tab]);

  function changeTab(target) {
    reviewTab.current.className = "tab-teal";
    editTab.current.className = "tab-teal";

    target.current.className = "tab-teal active";

    setTab(target);
  }

  function getPostFromDatabase() {
    setPost(post1);
  }

  function processingEditPost() {
    //save edit
    post1 = post;
    alert("Lưu thay đổi thành công");
  }

  function handleEditorChange(e) {
    setPost(e.target.getContent());
  
    // Update cursor position
    const editor = contentEditor.current.editor;
    const selection = editor.selection.getRng();
    setCursorPosition(selection.startOffset);
  }
  
  // Function to restore cursor position
  function restoreCursorPosition() {
    const editor = contentEditor.current.editor;
    editor.selection.select(editor.getBody(), true);
    editor.selection.collapse(false);
    editor.selection.setRng(cursorPosition, cursorPosition);
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
            <h1>
              <b>Bài viết giới thiệu</b>
            </h1>

            <div className="offset-md-9 col-md-3 d-flex">
              <button
                ref={reviewTab}
                onClick={() =>
                  window.confirm("Bỏ thay đổi?")  && changeTab(reviewTab) && getPostFromDatabase()
                }
                className="tab-teal active"
              >
                Xem
              </button> 
              &ensp;
              <button
                ref={editTab}
                onClick={() => changeTab(editTab)}
                className="tab-teal"
              >
                Chỉnh sửa
              </button>
            </div>
            <hr />
            <div className="post">
            <Editor
                ref={contentEditor}
                disabled={tab !== editTab}
                apiKey='8gjew3xfjqt5cu2flsa3nz2oqr4z5bru9hr3phl05rsfyss3'
                init={{
                  plugins:
                    "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker",
                  toolbar:
                    "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
                }}
                initialValue={post}
                onChange={handleEditorChange}
              />
              {tab === editTab && (
                <div className="offset-md-10 col-md-2">
                  <button
                    onClick={() => processingEditPost()}
                    className="tab-teal active mt-2"
                  >
                    Lưu thay đổi
                  </button>
                </div>
              )}
            </div>
          </div>
        }
      ></AdminLayout>
    </>
  );
}
