// Components
import ContactIcons from './common/ContactIcons';

const Footer = () => {
  return (
    <footer className="bg-[#222] text-center">
      <div className="footer-container text-white font-bold">
        <p className="text-[2rem] mt-5">Ranch PC Services</p>

        <ContactIcons />

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