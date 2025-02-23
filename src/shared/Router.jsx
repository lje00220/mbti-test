import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Header from "../components/Header";

import useBearsStore from "../zustand/bearsStore";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import TestPage from "../pages/TestPage";
import ResultPage from "../pages/ResultPage";

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
