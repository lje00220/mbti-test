import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import Profile from "../pages/profile/Profile";
import Header from "../components/Header";
import TestPage from "../pages/testPage/TestPage";
import useBearsStore from "../zustand/bearsStore";
import ResultPage from "../pages/resultPage/ResultPage";

const PrivateRoute = ({ element: Element }) => {
  const { accessToken } = useBearsStore((state) => state);
  return accessToken ? <Element /> : <Navigate to="/" />;
};

const PublicRoute = ({ element: Element }) => {
  const { accessToken } = useBearsStore((state) => state);
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
