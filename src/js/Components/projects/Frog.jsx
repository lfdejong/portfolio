import { PiStarFourBold } from "react-icons/pi";
import frogCode from "../Images/img/frogcode.png";
import frog1 from "../Images/img/frogbanner.png";
import frog2 from "../Images/img/frog-api-full.png";
export default function Frog() {
    return <div className="">
    <img className="projectBanner" src={frog1} alt="banner-frog"/>
    <div className="projectitle">
      <h1>Frog Api</h1>
        <h3>Een API over verschillende kikker soorten.</h3>
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
                    React
                </span>
                <span className="skillspan">
                    Javascript
                </span>
                <span className="skillspan">
                    Parcel
                </span>
            </div>
 <div className="projectcontent">
<p>In het tweede kwartaal van het tweede jaar bij CMGT heb ik individueel gewerkt aaneen full stack project. De opdracht was om een restful API op te bouwen van zowel de back-end met Parcel als de front-end in React. Het onderwerpen doelstelling van de API mocht ik zelf invullen.
In het begin van de school periode was de attentie op het bouwen van de back-end en het leren van de status codes.
Ik begon met het verzamelen en opbouwen van de data, daarna werd crud of ook wel GET
POST, PUT, DELETE en OPTIONS
</p>
 <img className="projectImage" src={frogCode} alt="back-end-frog"/>
<p>
functionaliteiten aangemaakt. Voor deze opdracht was het ook van belang om status codes te implementeren.
De tweede helft van de opdracht was het maken van de front-end, de front-end fetches de data vanuit de door mij gemaakte back-end en geeft de informatie terug voor de gebruiker. De gebruiker kan deze data  lezen, aanmaken, bewerken of  verwijderen.
</p>
<h4>Resultaat</h4>
 <img className="projectImage" src={frog2} alt="screenshot van de api"/>
    <h3>Links</h3>
        <ul className="callList">
            <li>
            <h2>
                <a className="callA" href="https://screencast-o-matic.com/watch/c3Vt3rVDFk8">Video</a>
            </h2>
            </li>
            <li>

                <h2 >
                    <a className="callA" href="https://github.com/lfdejong/frog-api-frontend">Front-end Code</a>
                </h2>
            </li>
        </ul>
    </div>
    </div>;
  }
  