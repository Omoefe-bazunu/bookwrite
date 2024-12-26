import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiAlignRight } from "react-icons/fi";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className="h-72 mx-auto w-full"
      style={{
        backgroundImage: `url("./src/assets/headerbg.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <nav className="w-10/12 lg:w-4/6 mx-auto h-20 flex justify-between items-center py-6 relative">
        {/* Profile Icon */}
        <div className="profileIcon w-10 h-10 bg-sec rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
            <h4 className="text-xl text-primary font-bold">GL</h4>
          </div>
        </div>

        {/* Hamburger Menu */}
        <button
          className="sm:hidden text-white text-3xl z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FiAlignRight />
        </button>

        {/* Sliding Menu */}
        <ul
          className={`fixed top-0 left-0 h-full bg-primary text-white z-10 transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } w-3/4 sm:hidden flex flex-col gap-8 pt-20 px-12`}
        >
          <button
            className="text-2xl mb-4 self-end"
            onClick={() => setIsMenuOpen(false)}
          >
            ✕
          </button>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-sec" : "text-white")}
            onClick={() => setIsMenuOpen(false)}
          >
            <li className=" border-b border-white pb-2">Home</li>
          </NavLink>
          <a
            href="#about"
            className="text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <li className=" border-b border-white pb-2">About</li>
          </a>
          <NavLink
            to="/books"
            className={({ isActive }) => (isActive ? "text-sec" : "text-white")}
            onClick={() => setIsMenuOpen(false)}
          >
            <li className=" border-b border-white pb-2">Books</li>
          </NavLink>
          <a
            href="#contact"
            className="text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <li className=" border-b border-white pb-2">Contact</li>
          </a>
        </ul>

        {/* Normal Navigation Links for Large Screens */}
        <ul className="navLinks hidden sm:flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-sec" : "text-white")}
          >
            <li>Home</li>
          </NavLink>
          <a href="#about" className="text-white">
            <li>About</li>
          </a>
          <NavLink
            to="/books"
            className={({ isActive }) => (isActive ? "text-sec" : "text-white")}
          >
            <li>Books</li>
          </NavLink>
          <a href="#contact" className="text-white">
            <li>Contact</li>
          </a>
        </ul>
      </nav>
      <div className=" mx-auto w-full py-4 flex items-center justify-center flex-col mt-4">
        <p>Who?</p>
        <h1 className=" text-4xl lg:text-6xl">
          GABRIEL <span className=" text-sec">LAWAL</span>
        </h1>
        <div className=" flex gap-4 items-center w-5/12 lg:w-3/12">
          <hr className=" w-full h-0.5" />
          <h2 className=" lg:text-2xl text w-full text-nowrap">
            Creative Writer
          </h2>
          <hr className=" w-full h-0.5" />
        </div>
      </div>
    </div>
  );
};
