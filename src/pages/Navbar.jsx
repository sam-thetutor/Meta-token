import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/owl-logo.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <div className="fixed text-lg h-[90px] text-white w-full top-0 left-0 z-10 px-8">
      <nav className="flex justify-between items-center py-4 md:px-16">
        <a href="/" className="w-[50px]">
          <img src={logo} alt="logo" />
        </a>

        {/* Menu Icon for Mobile */}
        <div className="md:hidden cursor-pointer hover:text-orange-500" onClick={handleClick} >
          {click ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Menu Items */}
        <ul className={`flex-col text-xl md:flex-row md:flex md:gap-4 absolute md:static ml-6 md:bg-transparent transition-all duration-300 ease-in-out ${click ? 'top-16 left-0 w-full' : 'top-[-200px] md:top-0 md:w-auto'}`}>
          <li>
            <a href="#hero" onClick={closeMenu} className=" hover:text-orange-500 cursor-pointer">
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu} className="hover:text-orange-400 cursor-pointer">
              About
            </a>
          </li>
          <li>
            <a href="#tokenomics" onClick={closeMenu}  className="hover:text-orange-400 cursor-pointer">
              Tokenomics
            </a>
          </li>
          <li>
            <a href="#buy" onClick={closeMenu}  className="hover:text-orange-400 cursor-pointer">
              Socials
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
