import { NavLink } from "react-router-dom";
import { Button } from "../button";

const Header = () => {
  return (
    <header className="h-16">
      <nav className="w-full h-full max-w-[1220px] px-20 mx-auto flex justify-between items-center ">
        <span className="text-3xl">iRepair</span>
        <ul className="space-x-5">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/about">About</NavLink>

          <NavLink to="/login">
            <Button>Login</Button>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
