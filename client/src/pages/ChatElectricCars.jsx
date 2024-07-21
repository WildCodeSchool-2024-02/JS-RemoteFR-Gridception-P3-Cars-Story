import ReactPlayer from "react-player";

import "../styles/ChatElectricCars.css";


import Carsvideo from "../assets/Carsvideo.mp4";

export default function ChatElectricCars() {
  return (
    <div id="ChatElectricCarsContainer">
      <h1>Chat-electric-cars</h1>
      <h2>A real will or a utopia or a heresy or else Follow the trend</h2>
    
            <p>Chat with me about electric cars with respect </p>
      <p>According to experts, an electric car could have a lifespan of 50 years with optimal use of the electric car.
         Just replacing the battery every 15 years represents a significant cost. 
         To extend the life of an electric vehicle, 
         we advise you to carry out its service every year or every 30,000 km traveled.
         It is also important to adopt ecological ,
         driving and prevent battery wear by avoiding charge cycles below 20% and above 80%.
         You should know that electric car batteries do not tolerate complete discharges and maximum charges.
        </p>
      
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh' }}>
            <ReactPlayer url={Carsvideo} playing loop />

        </div>

    </div>
  );
}
