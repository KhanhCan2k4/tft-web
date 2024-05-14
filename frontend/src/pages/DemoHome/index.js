import { Link } from "react-router-dom";
import "./styles.css";
import { lazy, useEffect, useRef, useState } from "react";
import CarouselAppload from "../../components/CarouselAppload";
import Footer from "../../components/Footer";
import CarouselBanner from "../../components/CarouselBanner";
import PostBlock1 from "./../../components/PostBlock/PostBlock1";
import PostCard from "./../../components/PostCard/index";
import SlideListPost from "../../components/SlideListPost";
import { Parser } from "html-to-react";
import SildePosts, { SildePosts2 } from "../../components/SlidePosts";
import ContactForm from "../../components/ContactForm";

const initBanner = {
  img: "banner.jpg",
  title: "Trường Cao đẳng Công nghệ Thủ Đức",
};

const types = ["logo logo-vn", "logo logo-ja", "logo-tdc", "overlay"];

const posts = [
  {
    id: 1,
    title: "Posts a article",
    content: "Posts a article in the database",
    image: "banners/banner-2.jpg",
    views: 0,
    likes: 0,
    created_at: "12/12/2015",
  },
  {
    id: 2,
    title: "Posts a article ahihi",
    content: "Posts a article in the database",
    views: 10,
    likes: 20,
    image: "banners/banner-3.jpg",
    created_at: "12/12/2015",
  },
  {
    id: 3,
    title: "Posts a article 12345",
    content: "Posts a article in the database",
    views: 0,
    likes: 20,
    image: "banners/banner-4.jpg",
    created_at: "12/12/2015",
  },
  {
    id: 4,
    title: "Posts a article wrokmmh",
    content: "Posts a article in the database",
    views: 0,
    likes: 0,
    created_at: "12/12/2015",
  },
];

const posts2 = [...posts, ...posts];

export default function DemoHome() {
  const [banners, setBanners] = useState([initBanner]);
  const [prevNavLink, setPrevNavLink] = useState();

  const pageItem = useRef();
  const banner = useRef();

  const [activePageItem, setActivePageItem] = useState();

  useEffect(() => {
    let timeId = setTimeout(function bubble() {
      const b = document.createElement("div");
      b.className = "bubble " + types[Math.floor(Math.random() * types.length)];

      b.style.left = `${Math.round(Math.random() * 100)}%`;

      const size = Math.round(Math.random() * 90) + 10;

      b.style.width = size + "px";
      b.style.height = size + "px";

      // document.querySelector(".footer-container")?.appendChild(b);

      timeId = setTimeout(bubble, 1500);

      setTimeout(() => {
        b.remove();
      }, 5000);
    }, 1500);
  }, []);

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

  const homePageItem = (
    // {/* MARK:HOME */}
    <>
      <div className="stack-wave first">
        <div className="waveWrapper waveAnimation">
          <div className="waveWrapperInner bgTop">
            <div
              className="wave waveTop"
              style={{
                backgroundImage:
                  "url('http://front-end-noobs.com/jecko/img/wave-top.png')",
              }}
            ></div>
          </div>
          <div className="waveWrapperInner bgMiddle">
            <div
              className="wave waveMiddle"
              style={{
                backgroundImage:
                  "url('http://front-end-noobs.com/jecko/img/wave-mid.png')",
              }}
            ></div>
          </div>
          <div className="waveWrapperInner bgBottom">
            <div
              className="wave waveBottom"
              style={{
                backgroundImage:
                  "url('http://front-end-noobs.com/jecko/img/wave-bot.png')",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="stack-container">
        <div className="item-page" id="trang-chu">
          <div className="page-content">
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
                    <b>
                      "CNTT theo mô hình gắn kết với doanh nghiệp &amp; trường
                      cao đẳng Nhật Bản"
                    </b>
                  </h3>
                </div>
                <h6 className="text pb-3 ps-4">
                  Chương trình đào tạo ngành Công nghệ thông tin theo mô hình
                  gắn kết với doanh nghiệp và trường cao đẳng Nhật Bản (gọi tắt
                  là Chương trình IT-TFT) là chương trình được xây dựng trên cơ
                  sở tiếp cận mô hình KOSEN của Nhật Bản, kết hợp chương trình
                  đào tạo của Trường Cao đẳng Công nghệ Thủ Đức (TDC) và Trường
                  Cao đẳng Công nghệ Công nghiệp Tokyo - Nhật Bản (Tokyo
                  Metropolitan College of Industrial Technology - TMCIT), với sự
                  hợp tác và hỗ trợ từ Tập đoàn Freesia - Nhật Bản.
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
                      <br />
                      <b>¥5000/tháng</b>
                    </span>
                  </div>
                  <div className="col sub-item">
                    <span className="px-5 py-3">
                      Miễn phí
                      <br />
                      <b>600 giờ học tiếng Nhật</b>
                    </span>
                  </div>
                  <div className="col sub-item">
                    <span className="px-5 py-3">
                      Chỉ tiêu
                      <br />
                      <b>30 sinh viên/khoá</b>
                    </span>
                  </div>
                  <div className="col sub-item reverse">
                    <span className="px-5 py-3">
                      Đảm bảo
                      <br />
                      <b>100% có việc làm</b>
                    </span>
                  </div>
                  <div className="col sub-item reverse">
                    <span className="px-5 py-3">
                      Đào tạo
                      <br />
                      <b>Thời gian đào tạo 3 năm</b>
                    </span>
                  </div>
                  <div className="col sub-item reverse">
                    <span className="px-5 py-3">
                      Cam kết
                      <br />
                      <b>Làm việc 3 năm tại Nhật</b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    // {/* END:HOME */}
  );
  const enrollmentPageItem = (
    // {/* MARK:ENROLLMENT */}
    <>
      <div className="stack-container  post-list">
        <div className="item-page mb-0" id="tuyen-sinh">
          <SildePosts
            posts={posts}
            title={{
              header: "Tuyển sinh",
              body: "Sinh viên khoá 6 ngành CNTT TFT",
              footer: "Ngành CNTT liên kết với doanh nghiệp Nhật Bản",
              link: "tuyen-sinh",
            }}
          />
        </div>
      </div>
      {/* END:ENROLLMENT */}
    </>
  );

  const studentPageItem = (
    // {/* MARK:FOR STUDENT  */}
    <>
      <div className="stack-container post-list">
        <div className="item-page mb-0" id="sinh-vien">
          <SildePosts2
            posts={posts}
            title={{
              header: "Cộng đồng",
              body: "Cộng đồng sinh viên CNTT TFT các khoá",
              footer: "Học sinh, sinh viên Hỏi đáp thắc mắc",
              link: "sinh-vien",
            }}
          />
        </div>
      </div>
    </>
    // {/* END:FOR STUDENT */}
  );

  const apploadPageItem = (
    <>
      {/* MARK:APPLOAD */}
      <div className="stack-wave first">
        <div className="waveWrapper waveAnimation">
          <div className="waveWrapperInner bgTop">
            <div
              className="wave waveTop"
              style={{
                backgroundImage:
                  "url('http://front-end-noobs.com/jecko/img/wave-top.png')",
              }}
            ></div>
          </div>
          <div className="waveWrapperInner bgMiddle">
            <div
              className="wave waveMiddle"
              style={{
                backgroundImage:
                  "url('http://front-end-noobs.com/jecko/img/wave-mid.png')",
              }}
            ></div>
          </div>
          <div className="waveWrapperInner bgBottom">
            <div
              className="wave waveBottom"
              style={{
                backgroundImage:
                  "url('http://front-end-noobs.com/jecko/img/wave-bot.png')",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="stack-container">
        <div className="item-page" id="vinh-danh">
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
      {/* END:APPLOAD */}
    </>
  );

  const contactPageItem = (
    <>
      {/* MARK:FOOTER & CONTACT */}
      <div className="stack-wave">
        <div className="waveWrapper waveAnimation">
          <div className="waveWrapperInner bgTop">
            <div
              className="wave waveTop"
              style={{
                backgroundImage:
                  "url('http://front-end-noobs.com/jecko/img/wave-top.png')",
              }}
            ></div>
          </div>
          <div className="waveWrapperInner bgMiddle">
            <div
              className="wave waveMiddle"
              style={{
                backgroundImage:
                  "url('http://front-end-noobs.com/jecko/img/wave-mid.png')",
              }}
            ></div>
          </div>
          <div className="waveWrapperInner bgBottom">
            <div
              className="wave waveBottom"
              style={{
                backgroundImage:
                  "url('http://front-end-noobs.com/jecko/img/wave-bot.png')",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="footer-container stack-container py-5">
        <div className="mb-3 container py-5" id="lien-he">
          <ContactForm />
        </div>
        <Footer />
      </div>
      {/* END:FOOTER & CONTACT */}
    </>
  );

  const pageItems = [
    homePageItem,
    enrollmentPageItem,
    studentPageItem,
    apploadPageItem,
    contactPageItem,
  ];

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
            href="#trang-chu"
            aria-current="page"
          >
            Trang chủ
          </a>
        </li>
        <li className="nav-item">
          <a onClick={handleNavLink} className="nav-link" href="#tuyen-sinh">
            Tuyển sinh
          </a>
        </li>
        <li className="nav-item">
          <a onClick={handleNavLink} className="nav-link" href="#sinh-vien">
            Dành cho sinh viên
          </a>
        </li>
        <li className="nav-item">
          <a onClick={handleNavLink} className="nav-link" href="#vinh-danh">
            Vinh danh
          </a>
        </li>
        <li className="nav-item">
          <a onClick={handleNavLink} className="nav-link" href="#lien-he">
            Liên hệ
          </a>
        </li>
      </ul>

      <div ref={banner} id="banner">
        <img
          className="img-fluid"
          src="./src/banners/banner.jpg"
          alt="Trường Cao đẳng Công nghệ Thủ Đức"
        />

        <div className="row banner-container">
          <div className="col-md-7">
            <h1 className="title">
              <span>Chương trình</span>
              <br />
              <b>
                CNTT theo mô hình <br />
                gắn kết với doanh nghiệp
                <br /> &emsp; &<br />
                trường Cao đẳng Nhật Bản
              </b>
            </h1>
          </div>

          <div className="col-md-5">
            <div className="row logos">
              <div className="col-md-6 position-relative">
                <div className="logo logo-vn"></div>
              </div>
              <div className="col-md-6 position-relative">
                <div className="logo logo-ja"></div>
              </div>
              <div className="offset-md-3 col-md-6 position-relative">
                <div className="logo logo-tdc"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {homePageItem}
      {enrollmentPageItem}
      {studentPageItem}
      {apploadPageItem}
      {contactPageItem}
    </div>
  );
}
