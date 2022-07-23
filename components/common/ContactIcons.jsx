// Icons
import { FaFacebookSquare } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { BsPhoneFill } from 'react-icons/bs';

const ContactIcons = ({ color, type }) => {
  return (
    <ul
      className={`${type === 'header'
        ? "flex justify-center gap-20 mx:gap-20 2xl:gap-20 custom:gap-10"
        : "footer-container__icons my-4 flex justify-center items-center gap-8"
        }`}
    >
      <li>
        <a href="https://www.facebook.com/ranchPCPH">
          <FaFacebookSquare
            color={color}
            type={type}
            fontSize={`${type === 'header' ? 45 : 30} `}
          />
        </a>
      </li>
      <li>
        <a href="mailto:ranchpcsvs@gmail.com">
          <HiMail
            color={color}
            type={type}
            fontSize={`${type === 'header' ? 45 : 30} `}
          />
        </a>
      </li>
      <li>
        <a href="tel:+639958497534">
          <BsPhoneFill
            color={color}
            type={type}
            fontSize={`${type === 'header' ? 45 : 30} `}
          />
        </a>
      </li>
    </ul>
  )
}

export default ContactIcons;