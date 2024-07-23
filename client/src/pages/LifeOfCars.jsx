import "../styles/LifeOfCars.css";


import Cycle from "../assets/images/Cycle.jpg";
import carslife from "../assets/images/carslife.jpg";


export default function LifeOfCars() {
  return (
    <div className="Life-Of-Cars">
      <h1>Life Of Cars</h1>
    <div className="content-block">
      <img  src={Cycle} alt="Car cycle" className="content-image"  />
      <p className="content-text">
        There are nearly 1.4 billion motor vehicles, with four or more wheels, in circulation in the world.
      More than 300 million vehicles in China
      compared to 268 million for its American rival.France has 52 million registered vehicles and of this total 39.3 million are “really” in circulation.
      </p>
     </div>

     <h2 className="button-container" >
     <a href="https://www.greenncap.com/european-lca-results/" className="link-button" target="_blank" rel="noopener noreferrer">Learn more</a>
     </h2>


     <div className="content-block">
      <img src={carslife} alt="Life cycle of car" className="content-image" />

      <p className="content-text">
        life cycle of a car : Background data for hydrogen fuel cell (hfc) and H2 tank system
        [JOANNEUM RESEARCH 2022]
        Tank & HFC
        Steel 19.6%
        Aluminium 8.9%
        Plastic 7.5%
        Electronic 0.9%
        Copper 5.3%
        Graphit 6.2%
        CFK 51.5%
        SUM 100.
      </p>
      
      </div>
    </div>
  );
}
