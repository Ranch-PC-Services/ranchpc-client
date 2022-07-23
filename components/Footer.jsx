import styles from '../styles/landing/Footer.module.scss';

// Components
import ContactIcons from './common/ContactIcons';

const Footer = () => {
  return (
    <footer className="bg-[#222] text-center">
      <div className={styles.footer__container}>
        <p className="text-[2rem] mt-5">Ranch PC Services</p>

        <ContactIcons />

        <div className={styles.footer__containerSub}>
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