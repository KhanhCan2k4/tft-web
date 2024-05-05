import { Link } from "react-router-dom";
import "./styles.css";
import { useEffect, useState } from "react";
import CarouselAppload from "../../components/CarouselAppload";
import Footer from "../../components/Footer";
import CarouselBanner from "../../components/CarouselBanner";

const initBanner = {
  img: "banner.jpg",
  title: "Trường Cao đẳng Công nghệ Thủ Đức",
};

export default function DemoHome() {
  const [banners, setBanners] = useState([initBanner]);
  const [prevNavLink, setPrevNavLink] = useState();

  useEffect(() => {
    setTimeout(function bubble() {
      const b = document.createElement('div');
      b.className = "bubble";
  
      b.style.left = `${Math.round(Math.random() * 100)}%`;
  
      const size = Math.round(Math.random() * 100);
  
      b.style.width = size + "px";
      b.style.height = size + "px";
  
      document.querySelector(".demo-home")?.appendChild(b);
  
      setTimeout(bubble, 1500);
  
      setTimeout(() => {
        b.remove();
      }, 5000);
  
    }, 1500);
  }, [] );

  //fetch banners
  useEffect(() => {
    //fetch
    fetch(`http://localhost:8000/api/banners`)
      .then((res) => res.json())
      .then((banners) => {
        setBanners(banners);
      })
      .catch((err) => {
        console.log(err);
        setBanners([initBanner]);
      });
  }, []);

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
        <li className="nav-item">
          <a onClick={handleNavLink} className="nav-link" href="#contact">
            Liên hệ
          </a>
        </li>
      </ul>

      <div className="item-page" id="home"></div>

      <div className="item-page" id="about">
        <div className="page-content container">
          <div className="row mt-5">
            <div className="col-md-6">
              <div className="banner">
                <CarouselBanner banners={banners} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="home-intro">
                <h3 className="title">
                  <span>Chương trình</span>
                  <br />
                  <b className="text-white">
                    "CNTT theo mô hình gắn kết với doanh nghiệp &amp; trường cao
                    đẳng Nhật Bản"
                  </b>
                </h3>
              </div>
              <h6 className="text pb-3 ps-4">
                Chương trình đào tạo ngành Công nghệ thông tin theo mô hình gắn
                kết với doanh nghiệp và trường cao đẳng Nhật Bản (gọi tắt là
                Chương trình IT-TFT) là chương trình được xây dựng trên cơ sở
                tiếp cận mô hình KOSEN của Nhật Bản, kết hợp chương trình đào
                tạo của Trường Cao đẳng Công nghệ Thủ Đức (TDC) và Trường Cao
                đẳng Công nghệ Công nghiệp Tokyo - Nhật Bản (Tokyo Metropolitan
                College of Industrial Technology - TMCIT), với sự hợp tác và hỗ
                trợ từ Tập đoàn Freesia - Nhật Bản.
              </h6>
              <Link to={"/gioi-thieu"} className="btn-view">
                Tìm hiểu thêm
              </Link>
            </div>
            <div className="col-12 mt-5 ">
              <div className="row sub-contain">
                <div className="col sub-item">
                  <span className="px-5 py-3">
                     Hỗ trợ 
                    <br/>
                    <b>¥5000/tháng</b>
                  </span>
                </div>
                <div className="col sub-item">
                  <span className="px-5 py-3">
                     Miễn phí
                    <br/>
                    <b>600 giờ học tiếng Nhật</b>
                  </span>
                </div>
                <div className="col sub-item">
                  <span className="px-5 py-3">
                     Chỉ tiêu 
                    <br/>
                    <b>30 sinh viên/khoá</b>
                  </span>
                </div>
                <div className="col sub-item reverse">
                  <span className="px-5 py-3">
                     Đảm bảo
                    <br/>
                    <b>100% có việc làm</b>
                  </span>
                </div>
                <div className="col sub-item reverse">
                  <span className="px-5 py-3">
                    Đào tạo
                    <br/>
                    <b>Thời gian đào tạo 3 năm</b>
                  </span>
                </div>
                <div className="col sub-item reverse">
                  <span className="px-5 py-3">
                   Cam kết
                    <br/>
                    <b>Làm việc 3 năm tại Nhật</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
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

      <div className="mb-3 container" id="contact">
        <label for="" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          name=""
          id=""
          aria-describedby="emailHelpId"
          placeholder="abc@mail.com"
        />
        <small id="emailHelpId" className="form-text text-muted">
          Help text
        </small>
      </div>

      <Footer />
    </div>
  );
}
