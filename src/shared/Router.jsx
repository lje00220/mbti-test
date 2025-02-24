import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Header from "../components/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import TestPage from "../pages/TestPage";
import ResultPage from "../pages/ResultPage";
import useUserStore from "../zustand/userStore";

/**
 * 라우터 컴포넌트
 *
 * @returns {JSX.Element}
 */

// 로그인한 회원만 접근 가능 (프로필 수정, 테스트, 테스트 결과 페이지)
const PrivateRoute = ({ element: Element }) => {
  const { accessToken } = useUserStore((state) => state);
  return accessToken ? <Element /> : <Navigate to="/" />;
};

// 비회원도 접근 가능 (홈, 로그인, 회원가입 페이지)
const PublicRoute = ({ element: Element }) => {
  const { accessToken } = useUserStore((state) => state);
  return !accessToken ? <Element /> : <Navigate to="/" />;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<PublicRoute element={Login} />} />
        <Route path="/signup" element={<PublicRoute element={SignUp} />} />
        <Route path="/profile" element={<PrivateRoute element={Profile} />} />
        <Route path="/test" element={<PrivateRoute element={TestPage} />} />
        <Route path="/result" element={<PrivateRoute element={ResultPage} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
