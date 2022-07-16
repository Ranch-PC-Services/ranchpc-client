// Icons
import { FaFacebookSquare } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { BsPhoneFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#222] text-center">
      <div className="footer-container text-white font-bold">
        <p className="text-[2rem] mt-5">Ranch PC Services</p>

        <div className="footer-container__icons my-4 flex justify-center items-center gap-8">
          <a href="https://www.facebook.com/ranchPCPH">
            <FaFacebookSquare color="#fff" fontSize={30} />
          </a>
          <a href="rancpcsvs@gmail.com">
            <HiMail color="#fff" fontSize={30} />
          </a>
          <a href="09958497534">
            <BsPhoneFill color="#fff" fontSize={30} />
          </a>
        </div>

        <div className="footer-container__sub bg-[#0a0a0a]">
          <span className="text-[1.2rem]">Copyright 2020 {""}
            <a href="#home" className="text-[#637CBB]">Ranch PC</a> {""}
            all rights reserved.
          </span>
        </div>

      </div>
    </footer>
  )
}

export default Footer;