import "../styles/TuningDetails.css";

import DodgeCharger from "../assets/images/DodgeCharger.jpg";

export default function TuningDetails() {
  return (
    <div id="TuningDetailsContainer">
      <h1>TuningDetails</h1>

      <p>prices varying from a little over $41,000 to over $108,000, 
        and a horsepower varying from 300 to 807 horsepower</p>

      <img src={DodgeCharger} alt="" />
    </div>
  );
}
