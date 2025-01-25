// ThermocoupleTheoryComponent.jsx
import React from 'react';
import './Theory.css'; // Import the corresponding CSS file
import img1 from "../../Images/thermocouple.jpeg"

const Theory = () => {
  return (
    <div className="thermocouple-theory-container theory1">
      <h2>Thermocouple</h2>

      <div className="temperature-section theory1-box">
        <h3>Temperature Measurement Principle:</h3>
        <p>
        A thermocouple is a sensor that measures temperature. It consists of two different types of metals, joined together at one end. When the junction of the two metals is heated or cooled, a voltage is created that can be correlated back to the temperature. A thermocouple is a simple, robust and cost-effective temperature sensor used in a wide range of temperature measurement processes.
Thermocouples are manufactured in a variety of styles, such as thermocouple probes, thermocouple probes with connectors, transition joint thermocouple probes, infrared thermocouples, bare wire thermocouple or even just thermocouple wire.
Thermocouples are commonly used in a wide range of applications. Due to their wide range of models and technical specifications, but it is extremely important to understand its basic structure, functionality, ranges as to better determine the right thermocouple type and material of thermocouple for an application.
          </p>
          <img src={img1} alt="" />
          <p className="caption">Fig1: Thermocouple</p>
      </div>

      <div className="working-section theory1-box">
        <h3>Working:</h3>
        <p>
        When two wires composed of dissimilar metals are joined at both ends and one of the ends is heated, there is a continuous current which flows in the thermoelectric circuit.

If this circuit is broken at the center, the net open circuit voltage (the Seebeck voltage) is a function of the junction temperature and the composition of the two metals. Which means that when the junction of the two metals is heated or cooled a voltage is produced that can be correlated back to the temperature.
        </p>
      </div>

      <div className="advantages-section theory1-box">
        <h3>Advantages:</h3>
        <ul>
          <li>Less costly than RTD.</li>
          <li>Reproducible quality.</li>
          <li>Rapid response time.</li>
          <li>High accuracy.</li>
          <li>Sturdy design.</li>
        </ul>
      </div>

      <div className="disadvantages-section theory1-box">
        <h3>Disadvantages:</h3>
        <ul>
          <li>Lead and cold junction compensation required.</li>
          <li>Signal requires amplification.</li>
          <li>Displays nonlinearity.</li>
        </ul>
      </div>
    </div>
  );
};

export default Theory;
