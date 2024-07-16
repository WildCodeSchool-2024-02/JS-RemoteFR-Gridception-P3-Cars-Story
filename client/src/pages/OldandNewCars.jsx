import { useState } from "react";

import "../styles/OldAndNewCars.css";

import oldCarPic from "../assets/voiture_ancienne_2018.jpg";
import bmwi8 from "../assets/images/bmwi8.jpg";

export default function OldandNewCars() {
  const [isNewCar, setIsNewCar] = useState(false);
  const carsArray = [
    {
      title: "Old Cars",
      image: oldCarPic,
      description: "old car, Mercury 1930 phaeton ",
      description2:
        "The Buick Series 60 was introduced in 1930. The Series 60 was offered in a variety of body styles and was available with an inline six or inline eight over the course of its production. The Buick Series 60 was produced until 1935.",
      description3: "prices vary between $39,000 and $77,000",
    },
    {
      title: "New Cars",
      image: bmwi8,
      description:
        "New Car ,The three-cylinder thermal engine fitted to the BMW i8 produces 170 kW (231 hp) and drives the rear wheels, while the electric machine with a power of 96 kW (131 hp), ",
      description2:
        " 1.5 HYBRID 374 A -Gasoline electric hybrid - Automatic transmission ",
      description3:
        "Its new price is 141,950 euros for the coupes and 156,950 euros for the roadster.",
    },
  ];

  return (
    <main id="Old-and-New-Cars-Container">
      <section>
        <button
          className={!isNewCar ? "selected" : ""}
          type="button"
          onClick={() => setIsNewCar(false)}
        >
          Old Cars
        </button>
        <button
          className={isNewCar ? "selected" : ""}
          type="button"
          onClick={() => setIsNewCar(true)}
        >
          New Cars
        </button>
      </section>

      <section>
        <h1>{!isNewCar ? carsArray[0].title : carsArray[1].title}</h1>

        <img
          src={!isNewCar ? carsArray[0].image : carsArray[1].image}
          alt={!isNewCar ? carsArray[0].title : carsArray[1].title}
        />

        <p>{!isNewCar ? carsArray[0].description : carsArray[1].description}</p>
        <p>
          {!isNewCar ? carsArray[0].description2 : carsArray[1].description2}
        </p>
        <p>
          {!isNewCar ? carsArray[0].description3 : carsArray[1].description3}
        </p>
      </section>
    </main>
  );
}
