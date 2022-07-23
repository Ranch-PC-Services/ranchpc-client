// Components
import ParticlesComponent from '../common/ParticlesComponent';

// Images
import Image from 'next/image';
import computer from '../../assets/images/computer.png';

// Icons
import { FaFacebookSquare } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { BsPhoneFill, BsArrowDown } from 'react-icons/bs';

const Header = () => {
  return (
    <>
      <div className="header relative bg-[#15131A] text-white font-bold">
        {/* <ParticlesComponent theme="dark" /> */}

        <div className="header-container flex flex-col items-center justify-center">
          <div className="header-container__img custom:hidden">
            <Image
              src={computer}
              className="header__image"
              alt="computer_bg"
              width={"200px"}
              height={"200px"}
            />
          </div>
          {/* mobile */}
          <div className="header-container__img mt-10 mx:hidden 2xl:hidden lg:hidden md:hidden sm:hidden custom:block">
            <Image
              src={computer}
              className="header__image"
              alt="computer_bg"
              width={"100px"}
              height={"100px"}
            />
          </div>
          <div className="header-container__title text-[4rem] text-center tracking-wide leading-snug mb-10 custom:text-3xl sm:text-3xl md:text-4xl lg:text-[3.5rem] lg:leading-snug xl:text-[3.75rem]">
            Build Your Personal Computer <br />
            that Satisfies You with Us
          </div>
          <div className="header-icons mb-40">
            <ul className="flex justify-center gap-20 mx:gap-20 2xl:gap-20 custom:gap-10">
              <li><FaFacebookSquare color="#6F757D" fontSize={45} /></li>
              <li><HiMail color="#6F757D" fontSize={45} /></li>
              <li><BsPhoneFill color="#6F757D" fontSize={45} /></li>
            </ul>
          </div>
        </div>

        <div className="wave-up bg-[#110F14] -mt-10 ml-[12.5%] w-[100px] flex justify-center p-8 custom:w-[60px] custom:-mt-20 custom:p-6">
          <a href="#services">
            <BsArrowDown
              className="custom:hidden"
              color="#fff"
              fontSize={30}
            />
            <BsArrowDown
              className="hidden custom:block"
              color="#fff"
              fontSize={25}
            />
          </a>
        </div>
      </div>
    </>
  )
}

export default Header;