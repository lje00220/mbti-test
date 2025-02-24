import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import NavBar from "./NavBar";

/**
 * Header 컴포넌트
 *  - Navbar 컴포넌트를 활용한 반응형 구현
 *  - 페이지 상단의 헤더 역할
 *
 * @returns {JSX.Element}
 */

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // 햄버거 클릭 시 토글을 열고 닫는 이벤트 핸들러
  const handleOpenToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="flex items-center justify-between bg-bg_color p-5 shadow-md">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <p className="headerText mx-4 text-xl">홈</p>
        </Link>
        {/* 데스크탑 환경에서의 헤더 */}
        <nav className="hidden gap-5 md:flex lg:flex">
          <div className="mr-5 flex flex-row items-center justify-end gap-5">
            <NavBar style="pinkBtn" />
          </div>
        </nav>
        <div className="flex md:hidden lg:hidden">
          <button onClick={handleOpenToggle}>
            <Menu />
          </button>
        </div>
      </header>
      {/* 토글이 열렸을 때 nav bar 작동 (모바일 환경)*/}
      {isOpen && (
        <nav className="flex flex-col items-center gap-5 bg-bg_color py-5 shadow-md md:hidden lg:hidden">
          <NavBar style="headerText" />
        </nav>
      )}
    </div>
  );
};

export default Header;
