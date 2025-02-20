import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Header = () => {
  const { isAuthenticated, isLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("로그아웃 되었습니다!");
    isLogout();
    navigate("/");
  };

  return (
    <header className="h-200px flex justify-between bg-blue-300 p-8">
      <Link to="/">홈</Link>
      <nav className="flex gap-5">
        {isAuthenticated && (
          <Link to="/" onClick={handleLogout}>
            로그아웃
          </Link>
        )}
        <Link to="/login">로그인</Link>
      </nav>
    </header>
  );
};

export default Header;
