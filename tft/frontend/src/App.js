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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gioi-thieu" element={<AboutPage />} />
        <Route path="/tuyen-sinh" element={<EnrolmentPage />} />
        <Route path="/tot-nghiep" element={<GraduationPage />} />
        <Route path="/bai-viet" element={<PostPage />} />
        <Route path="/danh-muc" element={<GraduationPage />} />
        <Route path="/vinh-danh" element={<ApploadPage />} />

        <Route path="/quan-tri" element={<AdminHomePage />} />
        <Route path="/quan-tri/gioi-thieu" element={<AdminPostPage />} />
        <Route path="/quan-tri/bai-viet" element={<AdminPosts/>} />
        <Route path="/quan-tri/danh-muc" element={<AdminCategories/>} />
        <Route path="/quan-tri/thanh-vien" element={<AdminMembers/>} />

        <Route path="/quan-tri/thanh-vien/them-thong-tin-thanh-vien" element={<UserCreate />} />
        <Route path="/quan-tri/thanh-vien/sua-thong-tin-thanh-vien" element={<UserUpdate/>} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;

export const apiURL = 'http://localhost:8000/api/';