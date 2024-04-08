import { BrowserRouter, Route, Routes } from "react-router-dom"

import HomePage from './pages/Home/index';
import AboutPage from "./pages/About";
import EnrolmentPage from "./pages/Enrolment";
import GraduationPage from "./pages/Graduation";
import PostPage from "./pages/Post";
import AdminHomePage from "./pages/AdminHome";

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

        <Route path="/admin/" element={<AdminHomePage />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
