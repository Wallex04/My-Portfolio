import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/wallexLogo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        {/* <img src={Logo} alt="image-Logo " /> */}
        <h1 className="text-2xl font-extrabold">WALLEX</h1>
      </div>

      <ul className="hidden md:flex">
        <li className="hover:border-b-4 border-pink-500">
          <Link
            to="home"
            smooth={true}
            duration={500}
          >
          Home
          </Link>
        </li>
        <li className="hover:border-b-4 border-pink-500">
        <Link
            to="about"
            smooth={true}
            duration={500}
          >
         About
          </Link>
        </li>
        <li className="hover:border-b-4 border-pink-500">
              <Link
            to="skills"
            smooth={true}
            duration={500}
          >
        Skills
          </Link>
        </li>
        <li className="hover:border-b-4 border-pink-500">
        <Link
            to="work"
            smooth={true}
            duration={500}
          >
       Work
          </Link>
        </li>
        <li className="hover:border-b-4 border-pink-500">
        <Link
            to="contact"
            smooth={true}
            duration={500}
          >
         Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu*/}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
         <li className="py-6 text-4xl"><Link onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
          >
          Home
          </Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
          >
         About
          </Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
          >
        Skills
          </Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClick}
            to="work"
            smooth={true}
            duration={500}
          >
       Work
          </Link></li>
        <li className="py-6 text-4xl"> <Link onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
          >
         Contact
          </Link></li>
       
      </ul>

      {/* social icon*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-md bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/okunlola-akinwale-817151186/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-md bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Wallex04"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-md bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://mail.google.com/mail/u/0/#starred"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-lg bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://docs.google.com/document/d/1DMz-RwqRy8t81r-R_NvmbywPH7QMbLeU_Ohewwi2GKw/edit"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
