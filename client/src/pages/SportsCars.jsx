import { Link } from "react-router-dom";

import "../styles/SportsCars.css";

import duesenberg from "../assets/images/duesenberg-speedster.jpg";
import f1 from "../assets/images/f1.jpg";


export default function SportsCars() {
  return (
    <main id="SportsCarsContainer">
      <h1>SportsCars</h1>

      <div  id="infos">
        <div className="img-container">
          <img src={duesenberg} alt="" />
        </div>

        <p>
        It is powered by an aircraft engine manufactured by Lycoming Engines 
         It is also popular with gangsters whose
         Al Capone famous godfather of the Chicago mafia because of his
         speed and the possibility of shielding it with sheets
         additional metal
        </p>

        <p>Modèle : Duesenberg Speedster</p>

        <p>Average price : $400.000</p>
      </div>

      <div  id="infos">
        <div className="img-container">
          <img src={f1} alt="" />
        </div>
        <p>
        Equipment : 
        the steering wheel of an F1 car costs on average around 50,000 euros alone.
        Gearbox $500,000 /Replacement chassis $275,000 / Flat bottom diffuser $225,000
        Front suspension $125,000 / Front spoiler $125,000 / Rear suspension $100,000
        Side pontoon $95,000 .Side pontoon $95,000 /Rear spoiler $92,000
        Electronic systems $50,000 / Brakes $25,000 /Brake deflector $10,000
        Wheel $5,000 .
        Another example of a very salty note for the manufacturer. 
        The breakage how much does a big loss cost.
        This is the case of the violent clash between ,
        the Haas and the Red Bull of Sergio Perez during the first lap of the race in the principality.
        With a "bill" of almost 2 million euros after this shock, the Mexican's total slate amounts to $2,452,000 (2.3 million euros)
         even though he had managed to avoid the big damage so far.
        </p>
          </div>
      <div id="links">
        <Link to="/sports-cars/1/security">Sécurity</Link>
        <Link to="/sports-cars/1/tuning">Cars customs</Link>
      </div>
    </main>
  );
}
