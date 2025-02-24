import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import NavBar from "./NavBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="flex items-center justify-between bg-bg_color p-5 shadow-md">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <p className="headerText mx-4 text-xl">홈</p>
        </Link>
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
      {isOpen && (
        <nav className="flex flex-col items-center gap-5 bg-bg_color py-5 shadow-md md:hidden lg:hidden">
          <NavBar style="headerText" />
        </nav>
      )}
    </div>
  );
};

export default Header;
