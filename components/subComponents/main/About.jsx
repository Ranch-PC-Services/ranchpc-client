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
      <p className="text-center text-5xl">Ranch PC Service Team</p>

      <div className="teamDets mt-10 relative bg-[#15131A]">
        <div className="rpcTeam relative flex justify-center items-center">
          <div className="cardTeam relative w-[300px] h-[400px] bg-[#222] m-[20px]"
          // animate={animationLeft}
          >
            <div className="conTeam">
              <div className="imgTeam"><Image src={isaac} alt="isaac_bg" /></div>
              <div className="conTeamBx">
                <h3>Isaac Sarte<br /><span>BS Computer Science</span></h3>
              </div>
            </div>
            <ul className="sclTeam">
              <li>
                <a href="#"><FaFacebookSquare /></a>
              </li>
            </ul>
          </div>
          <div className="cardTeam"
          // animate={animationUp}
          >
            <div className="conTeam">
              <div className="imgTeam"><Image src={jar} alt="jar_bg" /></div>
              <div className="conTeamBx">
                <h3>Jarren Barbacena<br /><span>Business Operations Management</span></h3>
              </div>
            </div>
            <ul className="sclTeam">
              <li>
                <a href="#"><FaFacebookSquare /></a>
              </li>
            </ul>
          </div>
          <div className="cardTeam"
          // animate={animationDown}
          >
            <div className="conTeam">
              <div className="imgTeam"><Image src={mart} alt="mart_bg" /></div>
              <div className="conTeamBx">
                <h3>Mart Panaligan<br /><span>BA Multimedia Arts</span></h3>
              </div>
            </div>
            <ul className="sclTeam">
              <li>
                <a href="#"><FaFacebookSquare /></a>
              </li>
            </ul>
          </div>
          <div className="cardTeam"
          // animate={animationRight}
          >
            <div className="conTeam">
              <div className="imgTeam"><Image src={desi} alt="desi_bg" /></div>
              <div className="conTeamBx">
                <h3>Desi Panen<br /><span>Physical Therapy</span></h3>
              </div>
            </div>
            <ul className="sclTeam">
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