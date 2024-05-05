import { useEffect, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { imageURL } from "../../App";

let currentIndex = 0;
let currentIndex2 = 0;

export default function SildePosts({ posts, title }) {
  function removeFirstItem() {
    document.querySelector(".animation-parts-page.removing")?.remove();
    document.querySelector(".animation-parts-page")?.classList.add("removing");
  }

  function addNewItem() {
    // Build a "page" to add to the container
    const post = posts[currentIndex];
    var newPage = document.createElement("div");
    newPage.className = "animation-parts-page post";

    const img = document.createElement("img");
    img.className = "post-img";
    img.src = imageURL + post.image;
    img.alt = "Hình ảnh bài viết " + post.title;
    newPage.appendChild(img);

    const title = document.createElement("h6");
    title.className = "post-title";
    title.textContent = post.title;
    newPage.appendChild(title);

    const likes = document.createElement("span");
    likes.className = "post-likes badge rounded-pill text-bg-danger";
    likes.innerHTML = post.likes + " &hearts;";
    newPage.appendChild(likes);

    const views = document.createElement("span");
    views.className = "post-views badge rounded-pill text-bg-warning";
    views.innerHTML = `${post.views} <i className="bi bi-eye-fill"></i>`;
    newPage.appendChild(views);

    document.querySelector(`.animation-pages-container`)?.append(newPage);
    currentIndex = currentIndex + 1 >= posts.length ? 0 : currentIndex + 1;
  }

  useEffect(() => {
    addNewItem();
    addNewItem();
    addNewItem();
    removeFirstItem();
    setInterval(addNewItem, 5000);
    setInterval(removeFirstItem, 5000);
  }, []);

  return (
    <div className="slide-post">
      <section className="hero-container">
        <div className="animation-container rellax" data-rellax-speed="-7">
          <div className="animation-pages-container"></div>
        </div>
        <div className="course-title-container rellax">
          <div className="course-title">
            <h1 className="fade-up">{title && title.header}</h1>
            <h2 className="fade-up">{title && title.body}</h2>
            <h3 className="fade-up">{title && title.footer}</h3>
            <Link
              to={title && title.link}
              id="enroll-button-top"
              className="fade-up btn btn-view"
            >
              <i className="fa fa-shopping-cart"></i>&nbsp;&nbsp;Xem chi tiết
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export function SildePosts2({ posts, title }) {
  function removeFirstItem() {
    document.querySelector(".animation-parts-page-re.removing")?.remove();
    document
      .querySelector(".animation-parts-page-re")
      ?.classList.add("removing");
  }

  function addNewItem() {
    // Build a "page" to add to the container
    const post = posts[currentIndex2];
    var newPage = document.createElement("div");
    newPage.className = "animation-parts-page animation-parts-page-re post";

    const img = document.createElement("img");
    img.className = "post-img";
    img.src = imageURL + post.image;
    img.alt = "Hình ảnh bài viết " + post.title;
    newPage.appendChild(img);

    const title = document.createElement("h6");
    title.className = "post-title";
    title.textContent = post.title;
    newPage.appendChild(title);

    const likes = document.createElement("span");
    likes.className = "post-likes badge rounded-pill text-bg-danger";
    likes.innerHTML = post.likes + " &hearts;";
    newPage.appendChild(likes);

    const views = document.createElement("span");
    views.className = "post-views badge rounded-pill text-bg-warning";
    views.innerHTML = `${post.views} <i className="bi bi-eye-fill"></i>`;
    newPage.appendChild(views);

    document.querySelector(`.animation-pages-container-re`)?.append(newPage);
    currentIndex2 = currentIndex2 + 1 >= posts.length ? 0 : currentIndex2 + 1;
  }

  useEffect(() => {
    addNewItem();
    addNewItem();
    addNewItem();
    removeFirstItem();
    setInterval(addNewItem, 5000);
    setInterval(removeFirstItem, 5000);
  }, []);

  return (
    <div className="slide-post">
      <section className="hero-container">
        <div className="animation-container rellax" data-rellax-speed="-7">
          <div className="animation-pages-container animation-pages-container-re"></div>
        </div>
        <div className="course-title-container rellax">
          <div className="course-title">
            <h1 className="fade-up">{title && title.header}</h1>
            <h2 className="fade-up">{title && title.body}</h2>
            <h3 className="fade-up">{title && title.footer}</h3>
            <Link
              to={title && title.link}
              id="enroll-button-top"
              className="fade-up btn btn-view"
            >
              <i className="fa fa-shopping-cart"></i>&nbsp;&nbsp;Xem chi tiết
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
