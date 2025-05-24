import { PiStarFourBold } from "react-icons/pi";
import banner from "../Images/img/cushionbanner.png"
export default function Pillow() {
    
    return <div className="">
      <img className="projectBanner" src={banner} alt="banner-cushion"/>
      <div className="projectitle">
      <h1>Kussen controler</h1>
        <h3>Kussen controller met game prototype voor patienten</h3>
        </div>
         <div className="skillsbanner">
                <span className="skillspan">
                    <PiStarFourBold />
                </span>
                <span className="skillspan">
                    Vaardigheden 
                </span>
                <span className="skillspan">
                    <PiStarFourBold />
                </span>
                <span className="skillspan">
                    Unity
                </span>
                <span className="skillspan">
                    Arduino
                </span>
            </div>
            <div className="projectcontent">

            </div>
    </div>;
  }
  