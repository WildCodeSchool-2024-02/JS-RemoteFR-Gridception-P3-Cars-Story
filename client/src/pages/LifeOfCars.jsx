import "../styles/LifeOfCars.css";


import Cycle from "../assets/images/Cycle.jpg";
import carslife from "../assets/images/carslife.jpg";


export default function LifeOfCars() {
  return (
    <div id="LifeOfCars">
      <h1>Life Of Cars</h1>
      <img src={Cycle} alt="" width="20%"   />
      <p>There are nearly 1.4 billion motor vehicles, with four or more wheels, in circulation in the world.
      More than 300 million vehicles in China
      compared to 268 million for its American rival.France has 52 million registered vehicles and of this total 39.3 million are “really” in circulation.
      </p>
     <section>
      <p>life cycle of a car</p>
      <img src={carslife} alt="" width="20%" />
      </section>
    </div>
  );
}
