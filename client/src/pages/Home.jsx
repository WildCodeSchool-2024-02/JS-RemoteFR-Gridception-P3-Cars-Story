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

        <section id="caroussel-Old-and-new-cars">
          <Link to="/Old-and-New-Cars">Old and New Cars</Link>
         </section> 

        <section id="cars-life">
          <Link to="/Life-of-Cars">Life Of Cars</Link>
        </section>


        <section id="chat-electric-cars">
          Chat with me about electric cars (With Respect)
        </section>
      </main>

      <footer>
        <p>LinkedIn</p>
        <p>GitHub</p>
      </footer>
    </div>
  );
}
