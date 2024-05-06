import "./styles.css";
import NavBar from "./../../components/Navbar/index";
import { useEffect, useRef, useState } from "react";
import { Parser } from "html-to-react";
import Modal from "react-bootstrap/Modal";
import { Avatar, AvatarGroup, Fab } from "@mui/material";
import {
  CloseButton,
  Form,
  InputGroup,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { apiURL, imageURL } from "../../App";
import { AddCircleOutline, Cookie } from "@mui/icons-material";
import { Editor } from "@tinymce/tinymce-react";

const user = {
  remember_token: "abcxyz",
  name: "Lê việt Khanh",
};

export default function ForumPage() {
  const modal = useRef();
  const addPostModal = useRef();
  const inputRef = useRef();

  const [show, setShow] = useState(false);
  const [isAdding, setAdding] = useState(false);
  const [activePost, setActivePost] = useState();
  const [posts, setPosts] = useState([]);
  const [addedPost, setAdded] = useState();
  const [addedComment, setAddedComment] = useState();
  const [forums, setForums] = useState([]);
  const [activeForum, setActiveForum] = useState();

  const contentEditor = useRef();

  const [cursorPosition, setCursorPosition] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = (post) => {
    setActivePost(post);
    return setShow(true);
  };

  //fetch posts
  useEffect(() => {
    const posts = [
      {
        id: 1,
        title: "Loading blog...",
        content: `
          <div className="bd-intro pt-2 ps-lg-2">
        <div className="d-md-flex flex-md-row-reverse align-items-center justify-content-between">
          <div className="mb-3 mb-md-0 d-flex text-nowrap"><a className="btn btn-sm btn-bd-light rounded-2" href="https://github.com/twbs/bootstrap/blob/v5.3.3/site/content/docs/5.3/components/alerts.md" title="View and edit this file on GitHub" target="_blank" rel="noopener">
              View on GitHub
            </a>
          </div>
          <h1 className="bd-title mb-0" id="content">Alerts</h1>
        </div>
        <p className="bd-lead">Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
        <script async="" src="https://cdn.carbonads.com/carbon.js?serve=CKYIKKJL&amp;placement=getbootstrapcom" id="_carbonads_js"></script><div id="carbonads"><span>

<span className="carbon-wrap">
	<a href="https://srv.carbonads.net/ads/click/x/GTND427JCEAICK7YCE7LYKQUC6BDV27JCTADTZ3JCAYIP23JCY7DLK3KFTSDK5QWF6SIP27LCYSDE5QLCEY4YKQUC6BDLKJWFTYDTZDK2HUCN" className="carbon-img" target="_blank" rel="noopener sponsored">
		<img src="https://srv.carbonads.net/static/30242/214e19ab24dfe618f5372f2a8430b9872569ed23" alt="ads via Carbon" border="0" height="100" width="130" data-no-statview="no" style="max-width: 130px;">
	</a>
	<a href="https://srv.carbonads.net/ads/click/x/GTND427JCEAICK7YCE7LYKQUC6BDV27JCTADTZ3JCAYIP23JCY7DLK3KFTSDK5QWF6SIP27LCYSDE5QLCEY4YKQUC6BDLKJWFTYDTZDK2HUCN" className="carbon-text" target="_blank" rel="noopener sponsored">
		Get 10 Free Images From Adobe Stock. Start Now.
	</a>
</span>
<a href="http://carbonads.net/?utm_source=getbootstrapcom&amp;utm_medium=ad_via_link&amp;utm_campaign=in_unit&amp;utm_term=carbon" className="carbon-poweredby" target="_blank" rel="noopener sponsored">ads via Carbon</a>
</span></div>

      </div>
          `,
        likes: 12,
        views: 4,
        author: {
          name: "John Smith",
          avatar: "",
        },
        created_at: "2016-09-01T00:00:00",
      },
      {
        id: 2,
        title: "Loading blog...2",
        content:
          "Hello world from the blog website at http:// Blog.com and http http://blog.com",
        likes: 34,
        views: 8,
        author: {
          name: "Julia Philipp",
          avatar: "",
        },
        created_at: "2016-09-01T00:00:00",
      },
      {
        id: 3,
        title: "Loading blog..333.",
        content:
          "Hello world from the blog website at http:// Blog.com and http http://blog.com",
        likes: 0,
        views: 4,
        author: {
          name: "Onyx Software",
          avatar: "",
        },
        created_at: "2016-09-01T00:00:00",
      },
    ];

    setPosts(posts);
  }, []);

  //fetch forums
  useEffect(() => {
    getForumsFromDatabase();
  }, []);

  function getForumsFromDatabase() {
    const api = apiURL + "forums";
    fetch(api)
      .then((res) => res.json())
      .then((forums) => {
        setForums(forums);

        if (activeForum) {
          const forum = Array.from(forums).filter((forum) => {
            return forum.id === activeForum.id;
          })[0];

          if (activePost) {
            const post = Array.from(forum.posts).filter((post) => {
              return post.id === activePost.id;
            })[0];

            setActiveForum(forum);
            setActivePost(post);
          }
        }
      })
      .catch((err) => {
        console.log(err);
        setForums([]);
      });
  }

  function handleEditorChange(e) {
    // setPost(e.target.getContent());
    addedPost.content = e.target.getContent();
    setAdded(addedPost);

    // Update cursor position
    const editor = contentEditor.current.editor;
    const selection = editor.selection.getRng();
    setCursorPosition(selection.startOffset);
  }

  // Function to restore cursor position
  function restoreCursorPosition() {
    const editor = contentEditor.current?.editor;
    editor?.selection?.select(editor.getBody(), true);
    editor?.selection?.collapse(false);
    editor?.selection?.setRng(cursorPosition, cursorPosition);
  }

  function handlePost() {
    //add into
    const api = apiURL + `posts`;
    fetch(api, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...addedPost, forum: activeForum.id, author: 0 }),
    })
      .then((res) => res.json())
      .then((data) => {
        switch (data.status) {
          case 200:
            alert(data.message);
            getForumsFromDatabase();
            break;
          case 422:
            break;
          default:
            break;
        }
      });

    //reset this forum

    //remove modal's data
    setAdded(undefined);

    setAdding(false);
  }

  function handleAddComment() {
    console.log(addedComment);
    inputRef.current.value = "";

    //save comment into database
    const url = apiURL + `posts/${activePost.id}`;
    fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...activePost,
        comment: { content: addedComment },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        switch (data.status) {
          case 200:
            alert(data.message);
            getForumsFromDatabase();
            break;
          case 422:
            break;
          default:
            break;
        }
      })
      .catch((err) => {
        console.log(err);
      });

    //remove all data
    setAddedComment("");
  }

  function handleDelete() {}

  // Call restoreCursorPosition after re-render
  useEffect(() => {
    restoreCursorPosition();
  });

  return (
    <div className="forum-page">
      <NavBar />

      <div className="row content">
        <div className="forum-nav-side">
          {forums &&
            forums.map((forum) => (
              <div
                onClick={() => {
                  console.log(forum.name);
                  setActiveForum(forum);
                }}
                key={forum.id}
                className={
                  "forum-tag text-start " +
                  (activeForum && activeForum.id === forum.id ? "active" : "")
                }
              >
                <div className="row">
                  <div className="col-md-3">
                    <img
                      className="img-fluid"
                      src={imageURL + forum.cover}
                      alt={forum.name}
                    />
                  </div>
                  <div className="col-md-9">
                    <h5>{forum.name}</h5>
                    <AvatarGroup total={forum.users.length}>
                      {forum.users &&
                        forum.users.map((user) => (
                          <Avatar
                            alt={user.name}
                            src={imageURL + user.avatar}
                          />
                        ))}
                    </AvatarGroup>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="col-md-8">
          <div className="main-content">
            {activeForum &&
              activeForum.posts &&
              Array.from(activeForum.posts)
                .reverse()
                .map((post) => (
                  <div key={post.id} className="post">
                    <div className="post-owner d-flex">
                      <Avatar
                        src={imageURL + post.author.avatar}
                        alt={post.author.name}
                      />
                      <div className="ps-2">
                        <b>{post.author.name}</b>
                        <br />
                        <span>
                          <b>
                            <i>Ngày đăng: </i>
                          </b>
                          {post.created_at}
                        </span>
                      </div>
                      <CloseButton onClick={handleDelete} className="ms-auto" />
                    </div>
                    <hr />

                    <div className="post-content">
                      <h3 className="post-title">{post.title}</h3>
                      <hr />

                      <div className="post-content">
                        {Parser().parse(post.content)}
                      </div>
                      <hr />

                      <div className="post-react">
                        <div className="row">
                          <div className="col-3">
                            <button className="btn-like btn btn-outline-danger">
                              &hearts;
                            </button>
                            <br />
                          </div>
                          <div className="col-6">
                            <button
                              className="btn-comment btn btn-light text-start"
                              onClick={() => handleShow(post)}
                              style={{ width: "100%" }}
                            >
                              <i className="bi bi-chat-heart-fill pe-2"></i>
                              Bình luận...
                            </button>
                          </div>
                          <div className="col-3 text-end">
                            <span className="px-3 py-2 badge rounded-pill text-bg-danger">
                              <i className="post-likes">{post.likes}</i>{" "}
                              &hearts;
                            </span>
                            &ensp;
                            <span className="px-3 py-2 badge rounded-pill text-bg-warning">
                              <i className="post-views">{post.views}</i>{" "}
                              <i className="bi bi-eye-fill"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>

        {activeForum && (
          <div className="btn-add fixed-bottom text-end me-3 mb-3">
            <Fab
              onClick={() => setAdding(true)}
              color="primary"
              aria-label="add"
            >
              <AddCircleOutline />
            </Fab>
          </div>
        )}

        <div ref={modal}>
          <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
              <div className="post-owner d-flex">
                <Avatar
                  src={imageURL + (activePost && activePost.author.avatar)}
                  alt={activePost && activePost.author.name}
                />
                <div className="ps-2">
                  <b>{activePost && activePost.author.name}</b>
                  <br />
                  <span>
                    <b>
                      <i>Ngày đăng: </i>
                    </b>
                    {activePost && activePost.created_at}
                  </span>
                </div>
              </div>
            </Modal.Header>
            <Modal.Body>
              <Modal.Title>{activePost && activePost.title}</Modal.Title>
              <hr />
              {activePost &&
                activePost.comments &&
                Array.from(activePost.comments)
                  .reverse()
                  .map((comment) => (
                    <div className="d-flex mb-3">
                      <Avatar alt="Dowpad" src="Dowpad" />
                      <div className="ps-2 py-2">
                        {comment && comment.content}
                      </div>
                    </div>
                  ))}
            </Modal.Body>
            <Modal.Footer>
              <div className="row" style={{ width: "100%" }}>
                <Avatar
                  className="col-2 me-2"
                  alt="Hello World"
                  src="./src/images/users/user-1.png"
                />
                <div className="col-9 btn-comment">
                  <InputGroup>
                    <InputGroup.Text>
                      <i className="bi bi-chat-heart-fill pe-2"></i>
                    </InputGroup.Text>
                    <Form.Control
                      ref={inputRef}
                      onChange={(e) => setAddedComment(e.target.value)}
                      placeholder="Bình luận..."
                    />
                  </InputGroup>
                </div>

                <button
                  onClick={handleAddComment}
                  className="ms-2 col-1 btn-send btn btn-danger"
                >
                  <i className="bi bi-send-fill"></i>
                </button>
              </div>
            </Modal.Footer>
          </Modal>
        </div>

        <div ref={addPostModal}>
          <Modal show={isAdding} onHide={() => setAdding(false)} size="lg">
            <Modal.Header closeButton>
              <div className="post-owner d-flex">
                <Avatar src={imageURL + "user avatar"} alt={"User name"} />
                <div className="ps-2">
                  <b>{"User name"}</b>
                  <br />
                  <span>
                    <b>
                      <i>Ngày đăng: </i>
                    </b>
                    {new Date().getDate() +
                      "/" +
                      (new Date().getMonth() + 1) +
                      "/" +
                      new Date().getFullYear() +
                      " " +
                      new Date().getHours() +
                      ":" +
                      new Date().getMinutes() +
                      ":" +
                      new Date().getSeconds()}
                  </span>
                </div>
              </div>
            </Modal.Header>

            <Modal.Body>
              <Form.Control
                onChange={(e) =>
                  setAdded({ ...addedPost, title: e.target.value })
                }
                type="text"
                className="mb-2 fw-bold"
                max={255}
                placeholder="Tiêu đề bài viết..."
              />
              <Editor
                ref={contentEditor}
                apiKey="8gjew3xfjqt5cu2flsa3nz2oqr4z5bru9hr3phl05rsfyss3"
                init={{
                  plugins:
                    "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker",
                  toolbar:
                    "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
                }}
                onChange={handleEditorChange}
              />
            </Modal.Body>
            <Modal.Footer>
              <button onClick={handlePost} className="btn btn-outline-success">
                Đăng
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}
