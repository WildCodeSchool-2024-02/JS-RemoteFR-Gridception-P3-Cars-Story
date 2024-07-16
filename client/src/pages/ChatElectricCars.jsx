import ReactPlayer from "react-player";

import Carsvideo from "../assets/Carsvideo.mp4";

export default function ChatElectricCars() {
  return (
    <div id="ChatElectricCarsContainer">
      <h1>Chat-electric-cars</h1>
      <h2>A real will or a utopia or a heresy or else Follow the trend</h2>

      <ReactPlayer url={Carsvideo} playing loop />

      <p>Chat with me about electric cars with respect </p>
    </div>
  );
}
