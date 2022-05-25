import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <Link to="/" exact className="pt-2">
          Corbin Arnett
        </Link>
        {/* Menu Items */}
        <div className="hidden space-x-6 md:flex">
          <Link to="/about" className="hover:text-darkGrayishBlue">
            About Me
          </Link>
          <Link to="/project" className="hover:text-darkGrayishBlue">
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
