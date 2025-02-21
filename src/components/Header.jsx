import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useBearsStore from "../zustand/bearsStore";

const Header = () => {
  const { isAuthenticated, isLogout } = useBearsStore((state) => state);
  const a = useBearsStore((state) => state);
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("로그아웃 되었습니다!");
    console.log("logout", a);
    isLogout();
    navigate("/");
  };

  return (
    <header className="flex items-center justify-between bg-[#f3f4f6] p-5 text-[#ff5a5f] shadow-md">
      <Link to="/">
        <p className="ml-10 text-xl">홈</p>
      </Link>
      <nav className="flex gap-5">
        {isAuthenticated ? (
          <div className="mr-5 flex flex-row items-center justify-end gap-5">
            <Link to="/profile" className="hover:text-white">
              프로필
            </Link>
            <Link to="/test" className="hover:text-white">
              테스트
            </Link>
            <Link to="/result" className="hover:text-white">
              결과 보기
            </Link>
            <Link to="/">
              <button
                onClick={handleLogout}
                className="rounded-xl bg-[#ff5a5f] px-5 py-3 text-white hover:bg-[#f3f4f6] hover:text-[#ff5a5f]"
              >
                로그아웃
              </button>
            </Link>
          </div>
        ) : (
          <Link to="/login" className="mr-5">
            로그인
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
