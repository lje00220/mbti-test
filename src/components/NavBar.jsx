import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../zustand/userStore";
import toast from "react-hot-toast";

const NavBar = ({ style }) => {
  const accessToken = useUserStore((state) => state.accessToken);
  const isLogout = useUserStore((state) => state.isLogout);
  const nickname = useUserStore((state) => state.nickname);
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success("로그아웃 되었습니다!");
    isLogout();
    navigate("/");
  };

  return (
    <>
      {accessToken ? (
        <>
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
            <button onClick={handleLogout} className={style}>
              로그아웃
            </button>
          </Link>
        </>
      ) : (
        <Link to="/login" className="headerText mr-5">
          로그인
        </Link>
      )}
    </>
  );
};

export default NavBar;
