import { BrowserRouter, Route, Routes } from "react-router-dom"

import HomePage from './pages/Home/index';
import AboutPage from "./pages/About";
import EnrolmentPage from "./pages/Enrolment";
import GraduationPage from "./pages/Graduation";
import PostPage from "./pages/Post";
import AdminHomePage from "./pages/AdminHome";
import AdminPostPage from "./pages/AdminPost";
import AdminPosts from "./pages/AdminPosts";
import AdminCategories from "./pages/AdminCategories";
import AdminMembers from "./pages/AdminMembers";
import ApploadPage from "./pages/Appload";
import TagPage from "./pages/Tag";
import UserUpdate from "./pages/UserUpdate";
import UserCreate from "./pages/UserCreate";
import CreatePost from "./pages/AdminCreatePost";
import AdminBanner from "./pages/AdminBanner";
import Intro from "./pages/Intro";
import FadeTransition from "./components/FadeTransition";
import EditPost from "./pages/AdminEditPost";
import AdminEnroll from "./pages/AdminEnroll";
import AdminStudentPost from './pages/AdminStudentPosts/index';
import Configuration from "./pages/Configuration";
import FormEditConfiguration from "./components/FormEditConfiguration";
import FormAddConfiguration from "./components/FormAddConguration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route loader path="/" element={<FadeTransition><HomePage /></FadeTransition> } />
        <Route path="/intro" element={<Intro />} />
        <Route path="/gioi-thieu" element={<AboutPage />} />
        <Route path="/tuyen-sinh" element={<EnrolmentPage />} />
        <Route path="/tot-nghiep" element={<GraduationPage />} />
        <Route path="/bai-viet" element={<PostPage />} />
        <Route path="/vinh-danh" element={<ApploadPage />} />

        <Route path="/quan-tri" element={<AdminHomePage />} />
        <Route path="/quan-tri/gioi-thieu" element={<AdminPostPage />} />

        <Route path="/quan-tri/banner" element={<AdminBanner />} />

        <Route path="/quan-tri/bai-viet" element={<AdminPosts/>} />
        <Route path="/quan-tri/bai-viet/them-bai-viet" element={<CreatePost/>} />
        <Route path="/quan-tri/bai-viet/chinh-sua-bai-viet" element={<EditPost/>} />

        <Route path="/quan-tri/tuyen-sinh" element={<AdminEnroll/>} />
        <Route path="/quan-tri/tuyen-sinh/them-bai-viet" element={<CreatePost/>} />
        <Route path="/quan-tri/tuyen-sinh/chinh-sua-bai-viet" element={<EditPost/>} />

        <Route path="/quan-tri/sinh-vien" element={<AdminStudentPost/>} />
        <Route path="/quan-tri/sinh-vien/them-bai-viet" element={<CreatePost/>} />
        <Route path="/quan-tri/sinh-vien/chinh-sua-bai-viet" element={<EditPost/>} />

        <Route path="/quan-tri/danh-muc" element={<AdminCategories/>} />

        <Route path="/quan-tri/thanh-vien" element={<AdminMembers/>} />
        <Route path="/quan-tri/thanh-vien/them-thong-tin-thanh-vien" element={<UserCreate />} />
        <Route path="/quan-tri/thanh-vien/sua-thong-tin-thanh-vien" element={<UserUpdate/>} />

        <Route path="/quan-tri/cai-dat" element={<Configuration/>} />
        <Route path="/quan-tri/cai-dat/chinh-sua" element={<FormEditConfiguration/>} />
        <Route path="/quan-tri/cai-dat/them" element={<FormAddConfiguration/>} />

      </Routes>
    </BrowserRouter >
  );
}

export default App;

export const apiURL = 'http://localhost:8000/api/';