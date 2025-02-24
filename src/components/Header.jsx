import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useBearsStore from "../zustand/bearsStore";

const Header = () => {
  const { accessToken, isLogout, nickname } = useBearsStore((state) => state);
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("로그아웃 되었습니다!");
    isLogout();
    navigate("/");
  };

  return (
    <header className="flex items-center justify-between bg-bg_color p-5 shadow-md">
      <Link to="/">
        <p className="headerText mx-4 text-xl">홈</p>
      </Link>
      <nav className="flex gap-5">
        {accessToken ? (
          <div className="mr-5 flex flex-row items-center justify-end gap-5">
            <Link to="/profile" className="headerText">
              {`${nickname} 님`}
            </Link>
            <Link to="/test" className="headerText">
              테스트
            </Link>
            <Link to="/result" className="headerText">
              결과 보기
            </Link>
            <Link to="/">
              <button onClick={handleLogout} className="pinkBtn">
                로그아웃
              </button>
            </Link>
          </div>
        ) : (
          <Link to="/login" className="headerText mr-5">
            로그인
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
