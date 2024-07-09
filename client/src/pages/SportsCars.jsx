import { Link } from "react-router-dom";

import "../styles/SportsCars.css";

import Cars from "../assets/images/duesenberg-speedster.jpg";

export default function SportsCars() {
  return (
    <main id="SportsCarsContainer">
      <h1>SportsCars</h1>

      <section id="infos">
        <div className="img-container">
          <img src={Cars} alt="" />
        </div>

        <p>Modèle : Duesenberg Speedster</p>

        <p>Prix moyen : $400.000</p>
      </section>

      <section id="links">
        <Link to="/sports-cars/1/security">Sécurité</Link>
        <Link to="/sports-cars/1/tuning">Personnalisation</Link>
      </section>
    </main>
  );
}
