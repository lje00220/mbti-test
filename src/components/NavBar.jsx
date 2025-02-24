import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../zustand/userStore";
import toast from "react-hot-toast";

/**
 * nav bar 컴포넌트
 *  - 다른 페이지로 이동할 수 있는 Link들로 이루어짐
 *
 * @param {string} props.style - 로그아웃 버튼의 스타일 (모바일, 태블릿 - Link / 데스크탑 - 버튼)
 * @returns
 */

const NavBar = ({ style }) => {
  const accessToken = useUserStore((state) => state.accessToken);
  const isLogout = useUserStore((state) => state.isLogout);
  const nickname = useUserStore((state) => state.nickname);
  const navigate = useNavigate();

  // 로그아웃 이벤트 핸들러
  const handleLogout = () => {
    toast.success("로그아웃 되었습니다!");
    isLogout();
    navigate("/");
  };

  return (
    <>
      {accessToken ? (
        <>
          {/* 로그인이 되어 있다면 전체 페이지 접근 가능 */}
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
        // 로그인이 되어있지 않다면 로그인 페이지만 접근 가능
        <Link to="/login" className="headerText mr-5">
          로그인
        </Link>
      )}
    </>
  );
};

export default NavBar;
