import "./styles.css";
import NavBar from "./../../components/Navbar/index";

export default function HomePage() {
  return (
    <div className="home-page">
      <header>
        <NavBar />
      </header>

      <div id="head-banner">
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

      <div id="main-content"></div>

      <footer id="main-footer"></footer>
    </div>
  );
}
