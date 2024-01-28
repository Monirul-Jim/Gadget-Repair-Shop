import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { Button } from "../button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="h-16">
      <nav className="w-full h-full max-w-[1220px] px-4 md:px-20 mx-auto flex justify-between items-center relative">
        <span className="text-3xl">iRepair</span>
        <div className="md:hidden">
          {isMenuOpen ? (
            <RxCross2 onClick={handleMenuToggle} />
          ) : (
            <RiMenu3Fill onClick={handleMenuToggle} />
          )}
        </div>
        <ul
          className={`md:flex items-center lg:space-x-5  sm:py-4 absolute top-14 right-0  md:w-auto md:static  md:bg-transparent transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/login">
              <Button>Login</Button>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
