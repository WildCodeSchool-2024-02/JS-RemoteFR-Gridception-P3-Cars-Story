import { Link } from "react-router-dom";
import "../styles/Home.css";

export default function Home() {
  return (
    <main id="HomeContainer">
      <section id="carousel-sports-cars">
        <Link to="/sports-cars">Sports Cars</Link>
      </section>

      <section id="carousel-old-new-cars">
        <Link to="/old-and-new-cars">Old and New Cars</Link>
      </section>

      <section id="Life-Of-Cars">
        <Link to="/life-of-cars">Life Of Cars</Link>
      </section>

      <section id="Chat-electric-cars">
        <Link to="/chat-electric-cars">
          Chat with me about electric cars (with respect)
        </Link>
      </section>
    </main>
  );
}
