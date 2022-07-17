// Components
import ParticlesComponent from '../common/ParticlesComponent';

// Images
import Image from 'next/image';
import computer from '../../assets/images/computer.png';

// Icons
import { BsArrowDown } from 'react-icons/bs'

const Header = () => {
  return (
    <>
      <div className="header relative bg-[#15131A] text-white font-bold">
        {/* <ParticlesComponent theme="dark" /> */}

        <div className="header-container flex flex-col items-center justify-center">
          <div className="header-container__img custom:hidden">
            <Image
              src={computer}
              alt="computer_bg"
              width={"200px"}
              height={"200px"}
            />
          </div>
          <div className="header-container__title text-[3.75rem] text-center tracking-wide leading-snug mb-20 custom:text-3xl sm:text-3xl md:text-4xl lg:text-[3.5rem] lg:leading-snug xl:text-[3.75rem]">
            Build Your Personal Computer <br />
            that Satisfies You with Us
          </div>
        </div>

        <div className="wave-up bg-[#110F14] -mt-10 ml-[12.5%] w-[100px] flex justify-center p-8">
          <a href="#services">
            <BsArrowDown color="#fff" fontSize={30} />
          </a>
        </div>
      </div>
    </>
  )
}

export default Header;