import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  return (
    <div id="HomeContainer">
      <header>
        <h1>Cars</h1>
        <h2>Dream or Necessity</h2>
      </header>

      <main>
        <section id="carousel-sports-cars">
          <Link to="/sports-cars">Sports Cars</Link>
        </section>

        <section id="carousel-old-new-cars">Old and New Cars</section>

        <section id="cars-life">Life of Cars</section>

        <section id="chat-electric-cars">
          Chattez avec moi à propos des voitures électriques (avec respect)
        </section>
      </main>

      <footer>
        <p>LinkedIn</p>
        <p>GitHub</p>
      </footer>
    </div>
  );
}
