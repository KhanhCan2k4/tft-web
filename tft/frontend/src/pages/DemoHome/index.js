import { Link } from "react-router-dom";
import "./styles.css";
import { useState } from "react";
import CarouselAppload from "../../components/CarouselAppload";

export default function DemoHome() {
  const [prevNavLink, setPrevNavLink] = useState();

  const handleNavLink = (e) => {
    if (prevNavLink) {
      prevNavLink.classList.remove("active");
    }

    e.target.classList.remove("active");
    e.target.classList.add("active");

    setPrevNavLink(e.target);
  };

  return (
    <div className="demo-home">
      <ul className="nav justify-content-center fixed-top">
        <li className="nav-item">
          <Link
            onClick={handleNavLink}
            className="nav-logo"
            to="/intro"
            aria-current="page"
          >
            <img className="img-fluid" src="./src/intros/logo.png" alt="" />
          </Link>
        </li>
        <li className="nav-item">
          <a
            onClick={handleNavLink}
            className="nav-link"
            href="#home"
            aria-current="page"
          >
            Trang chủ
          </a>
        </li>
        <li className="nav-item">
          <a onClick={handleNavLink} className="nav-link" href="#about">
            Giới thiệu
          </a>
        </li>
        <li className="nav-item">
          <a onClick={handleNavLink} className="nav-link" href="#enroll">
            Tuyển sinh
          </a>
        </li>
        <li className="nav-item">
          <a onClick={handleNavLink} className="nav-link" href="#student">
            Dành cho sinh viên
          </a>
        </li>
        <li className="nav-item">
          <a onClick={handleNavLink} className="nav-link" href="#appload">
            Vinh danh
          </a>
        </li>
      </ul>

      <div className="item-page" id="home">
        <h1>Đây là trang chủ</h1>
      </div>

      <div className="item-page" id="about">
        <h1>Đây là trang giới thiệu</h1>
      </div>

      <div className="item-page" id="enroll">
        <h1>Đây là trang tuyển sinh</h1>
      </div>

      <div className="item-page" id="student">
        <h1>Đây là trang dành cho sinh viên</h1>
      </div>

      <div className="item-page" id="appload">
        <div className="page-content">
          <div className="appload-student">
            <CarouselAppload />
          </div>
          <Link className="btn-view" to={"/vinh-danh"}>
            Xem chi tiết
          </Link>
        </div>
      </div>
    </div>
  );
}
