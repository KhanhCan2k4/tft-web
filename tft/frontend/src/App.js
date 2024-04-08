import { BrowserRouter, Route, Routes } from "react-router-dom"

import HomePage from './pages/Home/index';
import AboutPage from "./pages/About";
import EnrolmentPage from "./pages/Enrolment";
import GraduationPage from "./pages/Graduation";
import PostPage from "./pages/Post";
import AdminHomePage from "./pages/AdminHome";
import AdminPostPage from "./pages/AdminPost";
import ApploadPage from "./pages/Appload";

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
      </Routes>
    </BrowserRouter >
  );
}

export default App;
