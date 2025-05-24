import { PiStarFourBold } from "react-icons/pi";
import bestiary1 from "../Images/img/bpost.png";
import bestiary2 from "../Images/img/bsearch.png";
import bestiary3 from "../Images/img/bdraft.png";
export default function Bestiary() {
    return <div>
        <div className="projectitle">
        <h1>Bestiary</h1>
        <h3>Laravel project.</h3>
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
                    Laravel
                </span>
                <span className="skillspan">
                    PHP
                </span>
                <span className="skillspan">
                    Bootstrap
                </span>
            </div>
            <div className="projectcontent">
            <p>
                Wikipedia voor mythische wezens.
            </p>
            <p>
                Laravel project gemaakt in het tweede jaar waarbij wij met het framework Laravel een blog of forum mogen maken. Mijn project was een bestiary, wat een verzameling is van informatie over verschillende mythische wezens het is vergelijkbaar met Wikipedia.
            </p>
            <p>
                Gebaseerd op de eisen van de opdracht heb ik een lijst van functionaliteiten opgezet die in de applicatie verwerkt moesten worden.
            </p>
            <ul>
                <li>Als de gebruiker naar de website ga dan kan ik iets opzoeken met de search balk.</li>
                <li>De gebruiker kan een account aanmaken.</li>
                <li>De gebruiker kan inloggen.</li>
                <li>Er is een admin account op de website.</li>
                <li>De admin heeft het recht om een artikel te verwijderen.</li>
                <li>De admin kan gelijk artikelen editen.</li>
                <li>Een gebruiker kan een artikel bewerken.</li>
                <li>Een gebruiker kan een comment achterlaten op een artikel.</li>
                <li>De gebruiker moet 5 keer commenten op een artikel om een eigen artikel te plaatsen op de site.</li>
                <li>Er zijn tags waar de gebruiker door kan zoeken.</li>
                <li>De gebruiker die de originele artikel heeft geplaatst kan deze aan en uit zetten.</li>
                <li>De gebruiker kan hun username en profiel foto veranderen.</li>
                <li>De gebruiker kan afbeeldingen uploaden op het artikel.</li>
                <li>De home/index van de pagina heeft dagelijks 3 feature artikelen die random worden uitgekozen.</li>
                <li>Er is cross site en SQL beveiliging.</li>
            </ul>
        <p>
            Deze heb ik toegepast over het kwartaal van dit project. Door eerst te beginnen met de database, het opzetten van models en dan de CRUD toe te passen in de controllers.
            Een ingelogde gebruiker kan een artikel aanmaken, updated, lezen en verwijderen. Ze kunnen hun zelf gemaakte artikelen op gepubliceerd of op draft zetten en op artikelen een comment plaatsen.
            Elk artikel heeft een specifieke tag waar de gebruiker op kan zoeken. Er is ook een zoek functie die op titel, woorden in de descriptie en de tags kan zoeken.
            Voor de front-end lag bij dit project heb ik voornamelijk gebruik gemaakt van Bootstrap.
        
               </p>
            <h2>Resultaat</h2>
            <img className="projectImage" src={bestiary1} alt="screenshot van de api"/>
            <img className="projectImage" src={bestiary2} alt="screenshot van de api"/>
            <img className="projectImage" src={bestiary3} alt="screenshot van de api"/>
            <ul className="callList">
                <li>
                    <h3>
                        <a className="callA" href="https://github.com/lfdejong/bestiary">Code</a>
                        </h3>
                </li>
            </ul>
            </div>
    </div>;
  }
  