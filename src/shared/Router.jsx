import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import Profile from "../pages/profile/Profile";
import Header from "../components/Header";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import TestPage from "../pages/testPage/TestPage";

const PrivateRoute = ({ element: Element }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <Element /> : <Navigate to="/login" />;
};

const PublicRoute = ({ element: Element }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return !isAuthenticated ? <Element /> : <Navigate to="/" />;
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
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
