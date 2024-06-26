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
        <section id="carousel-old-new-cars">
          <Link to="/Old-and-New-Cars">Old and New CArs</Link>
          </section>

        <section id="Life-Of-Cars">
          <Link to="/Life-Of-Cars">Life Of Cars</Link>
          </section>

        <section id="Chat-electric-cars">
        <Link to="/Chat-electric-cars">Chat with me about electric cars (with respect)</Link>
        </section>
      </main>

      <footer>
        <p>LinkedIn</p>
        <p>GitHub</p>
      </footer>
    </div>
  );
}
