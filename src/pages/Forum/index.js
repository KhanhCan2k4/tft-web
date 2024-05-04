import { Link } from "react-router-dom";
import "./styles.css";

export default function ForumPage() {
  return (
    <div className="forum-page">
      <ul className="nav justify-content-center fixed-top">
        <li className="nav-item">
          <Link className="nav-logo" to="/intro" aria-current="page">
            <img className="img-fluid" src="./src/intros/logo.png" alt="" />
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/#home" aria-current="page">
            Trang chủ
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/#about">
            Giới thiệu
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/#enroll">
            Tuyển sinh
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/#student">
            Dành cho sinh viên
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/#appload">
            Vinh danh
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/#contact">
            Liên hệ
          </Link>
        </li>
      </ul>

      <div className="row content">
        <div className="col-md-3 forum-nav-side"></div>

        <div className="col-md-9">
          <div className="main-content">
            hello
          </div>
        </div>
      </div>
    </div>
  );
}
