import { Link } from "react-router-dom";

import "../styles/SportsCars.css";

import duesenberg from "../assets/images/duesenberg-speedster.jpg";
import fordmustang1968 from "../assets/images/fordmustang1968.jpg";


export default function SportsCars() {
  return (
    <main id="SportsCarsContainer">
      <h1>SportsCars</h1>

      <section id="infos">
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

        <p>Prix moyen : $400.000</p>
      </section>

      <section id="infos">
        <div className="img-container">
          <img src={fordmustang1968} alt="" />
        </div>
          <p>
description

          </p>
          </section>
      <section id="links">
        <Link to="/sports-cars/1/security">Sécurity</Link>
        <Link to="/sports-cars/1/tuning">Cars customs</Link>
      </section>
    </main>
  );
}
