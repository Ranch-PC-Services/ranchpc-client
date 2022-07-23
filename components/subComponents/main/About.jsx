// Icons
import { FaFacebookSquare } from 'react-icons/fa';

// Images
import Image from 'next/image';
import isaac from '../../../assets/images/Isaac.jpg';
import jar from '../../../assets/images/Jarren.jpg';
import desi from '../../../assets/images/Desi.jpg';
import mart from '../../../assets/images/Mart.jpg';

const About = () => {
  return (
    <div id="about" className="about-container bg-[#15131A]">
      <p className="text-center text-5xl custom:text-3xl">Ranch PC Service Team</p>

      <div className="teamDets mt-10 relative bg-[#15131A]">
        <div className="rpcTeam z-[1] relative flex flex-wrap justify-center items-center">
          <div className="cardTeam relative flex justify-center items-center w-[300px] h-[400px] bg-[#222] m-[20px]"
          // animate={animationLeft}
          >
            <div className="conTeam relative flex justify-center items-center flex-col opacity-50">
              <div className="imgTeam relative w-[150px] h-[150px] overflow-hidden"><Image src={isaac} alt="isaac_bg" /></div>
              <div className="conTeamBx">
                <h3 className="text-white uppercase font-medium text-[18px] text-center">Isaac Sarte<br />
                  <span className="text-[12px] font-light">BS Computer Science</span>
                </h3>
              </div>
            </div>
            <ul className="sclTeam absolute bottom-[50px] flex">
              <li>
                <a href="#"><FaFacebookSquare /></a>
              </li>
            </ul>
          </div>
          <div className="cardTeam relative flex justify-center items-center w-[300px] h-[400px] bg-[#222] m-[20px]"
          // animate={animationUp}
          >
            <div className="conTeam relative flex justify-center items-center flex-col opacity-50">
              <div className="imgTeam relative w-[150px] h-[150px] overflow-hidden"><Image src={jar} alt="jar_bg" /></div>
              <div className="conTeamBx">
                <h3 className="text-white uppercase font-medium text-[18px] text-center">Jarren Barbacena<br />
                  <span className="text-[12px] font-light">Business Operations Management</span>
                </h3>
              </div>
            </div>
            <ul className="sclTeam absolute bottom-[50px] flex">
              <li>
                <a href="#"><FaFacebookSquare /></a>
              </li>
            </ul>
          </div>
          <div className="cardTeam relative flex justify-center items-center w-[300px] h-[400px] bg-[#222] m-[20px]"
          // animate={animationDown}
          >
            <div className="conTeam relative flex justify-center items-center flex-col opacity-50">
              <div className="imgTeam relative w-[150px] h-[150px] overflow-hidden"><Image src={mart} alt="mart_bg" /></div>
              <div className="conTeamBx">
                <h3 className="text-white uppercase font-medium text-[18px] text-center">Mart Panaligan<br />
                  <span className="text-[12px] font-light">BA Multimedia Arts</span>
                </h3>
              </div>
            </div>
            <ul className="sclTeam absolute bottom-[50px] flex">
              <li>
                <a href="#"><FaFacebookSquare /></a>
              </li>
            </ul>
          </div>
          <div className="cardTeam relative flex justify-center items-center w-[300px] h-[400px] bg-[#222] m-[20px]"
          // animate={animationRight}
          >
            <div className="conTeam relative flex justify-center items-center flex-col opacity-50">
              <div className="imgTeam relative w-[150px] h-[150px] overflow-hidden"><Image src={desi} alt="desi_bg" /></div>
              <div className="conTeamBx">
                <h3 className="text-white uppercase font-medium text-[18px] text-center">Desi Panen<br />
                  <span className="text-[12px] font-light">Physical Therapy</span>
                </h3>
              </div>
            </div>
            <ul className="sclTeam absolute bottom-[50px] flex">
              <li>
                <a href="#"><FaFacebookSquare /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <br /><br />

    </div>
  )
}

export default About