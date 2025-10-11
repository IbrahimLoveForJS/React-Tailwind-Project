import { useState, useEffect } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button"; // your button component

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleSignOut() {
    localStorage.removeItem("grocifyAuth");
    navigate("/signin");
  }

  return (
    <header
      className={`bg-white fixed top-0 right-0 left-0 z-50 ${
        isScrolled ? "drop-shadow-[0_4px_25px_rgba(0,0,0,0.1)]" : ""
      }`}
    >
      <nav className="max-w-[1200px] px-10 md:h-[14vh] h-[12vh] mx-auto flex justify-between items-center">
        {/* logo */}
        <Link to="/" className="text-3xl font-bold">
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </Link>

        {/* Desktop Menu */}
        <ul className="md:flex items-center gap-x-15 hidden">
          <li>
            <a className="font-semibold tracking-wider text-orange-500" href="#home">Home</a>
          </li>
          <li>
            <a className="font-semibold tracking-wider hover:text-orange-500" href="#products">Products</a>
          </li>
          <li>
            <a className="font-semibold tracking-wider hover:text-orange-500" href="#process">Process</a>
          </li>
          <li>
            <a className="font-semibold tracking-wider hover:text-orange-500" href="#category">Categories</a>
          </li>
        </ul>

        {/* Nav Actions */}
        <div className="flex items-center gap-x-5">
          {/* Input Field */}
          <div className="md:flex p-1 border-2 border-orange-500 rounded-full hidden">
            <input
              type="text"
              name="text"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 h-[5vh] leading-[5vh] px-3 pt-[4px] focus:outline-none"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
              <IoSearch />
            </button>
          </div>

          <a href="#" className="text-zinc-800 text-2xl"><GoHeartFill /></a>
          <a href="#" className="text-zinc-800 text-2xl"><HiShoppingBag /></a>

          {/* Sign Out Button */}
          <button onClick={handleSignOut} className="bg-gradient-to-b from-orange-400 to-orange-500 cursor-pointer text-white px-4 ml-5 py-1 text-lg rounded-md hover:to-orange-600">
            Sign Out
          </button>

          {/* Hamburger */}
          <a
            href="#"
            className="text-zinc-800 text-3xl md:hidden"
            onClick={() => setShowMenu(prev => !prev)}
          >
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </a>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`flex flex-col gap-y-12 bg-orange-500/15 backdrop-blur-xl shadow-xl rounded-xl p-10 items-center gap-x-15 md:hidden absolute top-30 transition-all duration-500 ${
            showMenu ? "left-1/2" : "-left-full"
          } transform -translate-x-1/2`}
        >
          <li>
            <a className="font-semibold tracking-wider text-orange-500" href="#home">Home</a>
          </li>
          <li>
            <a className="font-semibold tracking-wider hover:text-orange-500" href="#products">Products</a>
          </li>
          <li>
            <a className="font-semibold tracking-wider hover:text-orange-500" href="#process">Process</a>
          </li>
          <li>
            <a className="font-semibold tracking-wider hover:text-orange-500" href="#category">Categories</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
