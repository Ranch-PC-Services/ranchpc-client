import React, { useState } from "react";
import Link from "next/link";
import { Tooltip, Button } from "@material-tailwind/react";

// Icons
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosClose } from "react-icons/io";
import { BsGlobe } from "react-icons/bs";
import { HiOutlineTruck } from "react-icons/hi";

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="header-container bg-[#15131A] text-white font-bold w-full">
      <nav className="app__navbar w-full flex justify-between max-w-[100rem] custom:max-w-full">

        <div className="app__navbar-logo">
          <a href="#" className="text-3xl font-bold tracking-wide">Ranch PC</a>
        </div>

        <div className="flex gap-10">
          <ul className="app__navbar-links text-xl font-semibold items-center list-none custom:hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex">
            <li className="p__opensans"><a href="#home">Home</a></li>
            <li className="p__opensans"><a href="#services">Services</a></li>
            <li className="p__opensans"><a href="#about">About</a></li>
          </ul>

          {/* Remove tooltip in the future */}
          <div className="app__navbar-login flex justify-end items-center gap-4">
            <Tooltip content="Multi Language Support Coming Soon">
              <Button variant="gradient">
                <Link href="/post/order" className="p__opensans"><BsGlobe color="#fff" fontSize={27} /></Link>
              </Button>
            </Tooltip>

            <Tooltip content="Shipping Feature Coming Soon">
              <Button variant="gradient">
                <Link href="/post/faq" className="p__opensans"><HiOutlineTruck stroke="#fff" fontSize={35} /></Link>
              </Button>
            </Tooltip>
          </div>
        </div>

        <div className="app__navbar-smallscreen hidden custom:flex sm:flex md:flex lg:hidden xl:hidden 2xl:hidden">
          <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay duration-500 z-[10] fixed top-0 left-0 w-full h-[100vh] bg-[#15131A] flex flex-col flex__center slide-bottom">
              <IoIosClose fontSize={45} className="overlay__close text-white cursor-pointer absolute top-5 right-5" onClick={() => setToggleMenu(false)} />
              <ul className="app__navbar-smallscreen_links list-none text-white text-2xl mt-20">
                <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
                <li><a href="#services" onClick={() => setToggleMenu(false)}>Services</a></li>
                <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              </ul>
            </div>
          )}
        </div>

      </nav>
    </header>
  )
}

export default Navbar;