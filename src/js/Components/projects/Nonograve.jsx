import klassendiagram from "../Images/img/Klassendiagram.jpeg";
import dogL from "../Images/img/dog-left.png";
import dogR from "../Images/img/dog.png";
import { PiStarFourBold } from "react-icons/pi";

export default function Nonograve() {
    return <div className="">
        <div className="projectitle">
        <h1>Nonograve</h1>
        <h3>Typescript game</h3>
        </div>
        <div className="skillsbanner">
            <span className="skillspan">
                <PiStarFourBold />
            </span>
            <span className="skillspan">
                Vaardigheden 
            </span >
            <span className="skillspan">
                    <PiStarFourBold />
                </span>
            <span className="skillspan">
                 Typescript 
            </span>
            <span className="skillspan">
                 Javascript 
            </span>
            <span className="skillspan">
                 Acesprite 
            </span>
        </div>
        <div className="projectcontent">
        <p>Arcade game waar je scoort met botten</p>
        <p>
        Een game gemaakt in typescript. Dit was een project vanuit mijn eerste leerjaar op mijn HBO opleiding.
        Dit opdracht was om de conventies van Object Orientated Programming onder de knie te krijgen.
        </p>
        <p>In deze game beweeg je heen en weer om botten op te vangen. Hoe meer botten je vangt hoe hoger je score.
        Er vallen ook rode larven uit de lucht die de hond pijn doen. Ze heeft in het hoekje 4 poten wat haar levens zijn.
        </p>
        <p>
        Deel van de opdracht was het opzetten van een klassendiagram, deze klassendiagram bevat schoonheid foutjes voornamelijk in de formattering van de programmering conventies.	
        </p>
        <img className="projectImage" src={klassendiagram} alt="klassendiagram"/>
        <p>
        De game assets zijn deels van een opensource game asset website, voornamelijk de achtergronden en objecten. De achtergrond heb ik wel deels bewerkt in Asesprite om het een beter geheel te maken. De hond, de zombie, het logo en de levens zijn door mijzelf gemaakt in Asesprite en Illustrator, 
        </p>
        <div>
            <img src={dogR} alt="dog-right"/>
            <img src={dogL} alt="dog-left"/>
        </div>
        <h2>Resultaat</h2>
        <ul>
        <li>
		    <h3 >
                <a className="callA" href="https://lfdejong.github.io/">Live Demo</a>
            </h3>
		</li>
		<li>
			<h3 >
                <a className="callA" href="https://github.com/lfdejong/lfdejong.github.io">Code</a>
            </h3>
		</li>
        </ul>
        </div>
    </div>;
  }
  