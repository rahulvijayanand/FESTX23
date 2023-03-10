import React, { useState, useRef } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import Navlogo from "../assets/SECL.png";

const Navbar = () => {
  const navRef = useRef();
  const [navs, setNav] = useState(false);
  const handleNav = () => {
    setNav(!navs);
  };
  return (
    <div className="customtext flex fixed w-[100%] top-0 justify-between items-center h-20 mx-auto px-4 text-white bg-transparent bg-cover">
      <Link
        to="/"
        className="text-xl font-cinzel font-bold text-white"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <img src={Navlogo} alt="festx" className="w-[60px] h-[60px]" />
      </Link>
      <nav className="lg:flex hidden space-x-5" ref={navRef}>
        <Link
          to="/"
          className="zoom p-4 transition-transform duration-300 mx-auto hover:scale-150 text-lg"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          HOME
        </Link>
        <Link
          to="/events"
          className="zoom p-4 transition-transform duration-300 mx-auto hover:scale-150 text-lg"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          EVENTS
        </Link>
        {/*<Link
          to="/speakers"
          className="zoom p-4 transition-transform duration-300 mx-auto hover:scale-150 text-lg"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          SPEAKERS
        </Link>*/}
        {/* <Link to="/sponsors" className="zoom p-4 transition-transform duration-300 mx-auto hover:scale-150 text-lg"
          onClick={() => {
            window.scrollTo(0, 0);
          }}>Sponsors</Link> */}
        <Link
          to="/contact"
          className="zoom p-4 transition-transform duration-300 mx-auto hover:scale-150 text-lg"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          CONTACT
        </Link>
      </nav>
      <div onClick={handleNav} className="block lg:hidden">
        {navs ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          navs
            ? "fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-900 bg-transparent/90 ease-in-out duration-700 lg:hidden"
            : "fixed left-[-100%] top-0 w-[40%] h-full border-r border-r-gray-900 bg-transparent/90 ease-in-out duration-700 lg:hidden"
        }
      >
        <h1
          className="w-full text-3xl font-cinzel font-bold text-white m-4"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={Navlogo} alt="festx" className=" w-[60px] h-[60px]" />
        </h1>
        <nav className="uppercase text-xl p-5 flex flex-col" ref={navRef}>
          <Link
            to="/"
            className=" p-4 border-b border-b-gray-300"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Home
          </Link>
          <Link
            to="/events"
            className=" p-4 border-b border-b-gray-300"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Events
          </Link>
          {/* <Link to="/speakers" className="p-4 border-b border-b-gray-300">Speakers</Link> */}
          {/* <Link to="/sponsors" className="p-4 border-b border-b-gray-300">Sponsors</Link> */}
          <Link
            to="/contact"
            className=" p-4"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
