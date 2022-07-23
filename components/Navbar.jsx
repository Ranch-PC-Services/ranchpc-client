import React, { useState } from 'react';

import styles from '../styles/landing/Navbar.module.scss';

import Link from 'next/link';
import { Tooltip, Button } from '@material-tailwind/react';

// Images
import Image from 'next/image';
import logo from '../assets/images/logobg.png';

// Icons
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosClose } from 'react-icons/io';
import { BsGlobe } from 'react-icons/bs';
import { HiOutlineTruck } from 'react-icons/hi';

// Components
import Header from './subComponents/Header';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div>

      <nav className={styles.nav__container}>
        <br />
        <nav className={styles.app__navbar}>

          <div className="app__navbar-logo">
            <a href="#" className="flex items-center gap-5 text-4xl font-bold tracking-wide">
              <Image
                src={logo}
                alt="logo_bg"
                style={{ borderRadius: '5px' }}
              />
              Ranch PC
            </a>
          </div>

          <div className="flex gap-10">
            <ul className="app__navbar-links gap-5 text-xl font-semibold items-center list-none custom:hidden sm:hidden md:hidden lg:flex xl:flex 2xl:flex">
              <li className="p__opensans cursor-pointer"><a href="#home">Home</a></li>
              <li className="p__opensans cursor-pointer"><a href="#services">Services</a></li>
              <li className="p__opensans cursor-pointer"><a href="#about">About</a></li>
            </ul>

            {/* Remove tooltip in the future */}
            <div className="app__navbar-login flex justify-end items-center gap-4 custom:hidden">
              <Tooltip content="Multi Language Support Coming Soon">
                <Button variant="gradient">
                  <Link href="/post/order" className="p__opensans cursor-pointer">
                    <BsGlobe color="#fff" fontSize={27} />
                  </Link>
                </Button>
              </Tooltip>

              <Tooltip content="Shipping Feature Coming Soon">
                <Button variant="gradient">
                  <Link href="/post/faq" className="p__opensans cursor-pointer">
                    <HiOutlineTruck stroke="#fff" fontSize={35} />
                  </Link>
                </Button>
              </Tooltip>
            </div>
          </div>

          <div className="app__navbar-smallscreen mt-6 hidden custom:flex sm:flex md:flex lg:hidden xl:hidden 2xl:hidden">
            <GiHamburgerMenu
              className="cursor-pointer"
              onClick={() => setToggleMenu(true)}
              color="#fff"
              fontSize={27}
            />
            {toggleMenu && (
              <div className="app__navbar-smallscreen_overlay duration-500 z-[10] fixed top-0 left-0 w-full h-[100vh] bg-[#15131A] flex flex-col flex__center slide-bottom">
                <IoIosClose
                  onClick={() => setToggleMenu(false)}
                  fontSize={45}
                  className="overlay__close text-white cursor-pointer absolute top-5 right-5"
                />
                <ul className="app__navbar-smallscreen_links list-none text-white text-2xl mt-20">
                  <li className="cursor-pointer m-4 text-[2rem] text-center">
                    <a href="#home" onClick={() => setToggleMenu(false)}>Home</a>
                  </li>
                  <li className="cursor-pointer m-4 text-[2rem] text-center">
                    <a href="#services" onClick={() => setToggleMenu(false)}>Services</a>
                  </li>
                  <li className="cursor-pointer m-4 text-[2rem] text-center">
                    <a href="#about" onClick={() => setToggleMenu(false)}>About</a>
                  </li>
                </ul>
              </div>
            )}
          </div>

        </nav>
      </nav>

      <Header />

    </div>
  )
}

export default Navbar;