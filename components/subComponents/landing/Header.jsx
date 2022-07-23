// Components
import ContactIcons from '../../common/ContactIcons';

// Images
import Image from 'next/image';
import computer from '../../../assets/images/computer.png';

// Icons
import { BsArrowDown } from 'react-icons/bs';

const Header = () => {
  return (
    <>
      <div className="header relative bg-[#15131A] text-white font-bold">

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
          <div className="header-container__title overflow-y-hidden text-[4rem] text-center tracking-wide leading-snug mb-10 custom:text-3xl sm:text-3xl md:text-4xl lg:text-[3.5rem] lg:leading-snug xl:text-[3.75rem]">
            Build Your Personal Computer <br />
            that Satisfies You with Us
          </div>
          <div className="header-icons mb-40">
            <ContactIcons color="#6F757D" type="header" />
          </div>
        </div>

        <div className="wave-up bg-[#110F14] relative -mt-10 ml-[12.5%] w-[100px] flex justify-center p-8 custom:w-[60px] custom:-mt-20 custom:p-6">
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