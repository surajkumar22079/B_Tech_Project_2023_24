import React, { useState } from "react";
import Graph from "./Graph";
import RTDimage from "../Images/RTD_image_L1.png"
import flame_img from "../Images/Flames_img.png"
import burner_img from "../Images/Flames_img2.png"
import circuit_img from "../Images/Thermocouple.png"
import "./RTD.css"

const sampleData = [
  { x: 1, y: 100 },
  { x: 2, y: 150 },
  { x: 8, y: 200 },
  { x: 9, y: 200 },
  { x: 9, y: 200 },
  // Add more data points as needed
];

const ThermocoupleExpermi = () => {
  const [initialTemp, setInitialTemp] = useState();
  const [initialResistance, setInitialResistance] = useState();
  const [finalTemp, setFinalTemp] = useState();
  const [finalResistance, setFinalResistance] = useState();
  const [material, setMaterial] = useState("J"); // Default value for material
  const [resistanceData, setResistanceData] = useState([]);
  const [tempRange, setTempRange] = useState("Iron(+)Versus Constantan(-)");
  const [minTemp, setminTemp] = useState(95);
  const [maxTemp, setmaxTemp] = useState(760);
  const [resistanceRange, setResistanceRange] = useState("0 Ω - 100 Ω");
  const [showChart, setShowChart] = useState(false);
  const [alphaValue, setAlphaValue] = useState(52);
  const [count, setCount] = useState(0);
  const [flameimgwidth, setFlameimgwidth] = useState(0);

  const handlePlotClick = () => {
    console.log(resistanceData);
    if (count >= 3)
      setShowChart(!showChart);
    else {
      alert("Please enter at least 3 correct values");
    }
  };
  const resetResistanceData = () => {
    setInitialTemp(0);
    setFinalTemp(0);
    setFinalResistance(0);
    setInitialResistance(0);
    setResistanceData([]);
    setCount(0);
  }

  const calculateResistance = (
    initialTemp,
    finalTemp,
    material,
    initialResistance
  ) => {
    // Implement your specific formula to calculate FinalResistance based on initialTemp and finalTemp.
    // Replace the following line with your actual formula.

    let alpha;
    if (material === "J") {
      alpha = 52
      if (
        !(
          initialTemp >= -5 &&
          initialTemp <= 20 &&
          finalTemp >= 95 &&
          finalTemp <= 760 
        )
      ) {
        alert("Input value is out of range. Please enter correct value");
      }
    } else if (material === "K") {
      alpha = 41;
      if (
        !(
          finalTemp >= 95 &&
          finalTemp <= 1260 &&
          initialTemp >= -5 &&
          initialTemp <= 20 
        )
      ) {
        alert("Input value is out of range. Please enter correct value");
      }
    } else if (material === "R") {
      alpha = 9;
      if (
        !(
          initialTemp >= -5 &&
          initialTemp <= 20 &&
          finalTemp >= 870 &&
          finalTemp <= 1450
        )
      ) {
        alert("Input value is out of range. Please enter correct value");
      }
    }
    else if (material === "S") {
      alpha = 6;
      if (
        !(
          initialTemp >= -5 &&
          initialTemp <= 20 &&
          finalTemp >= 980 &&
          finalTemp <= 1450
        )
      ) {
        alert("Input value is out of range. Please enter correct value");
      }
    }
    else if (material === "T") {
      alpha = 41;
      if (
        !(
          initialTemp >= -5 &&
          initialTemp <= 20 &&
          finalTemp >= 0 &&
          finalTemp <= 350 
        )
      ) {
        alert("Input value is out of range. Please enter correct value");
      }
    }

    if (typeof alpha === "undefined") {
      alert("Please select a material before checking voltage.");
      return;
    }

    // const Rfinalcalculated =
    //   initialResistance * (1 + alpha * (finalTemp - initialTemp));
    // return Rfinalcalculated;
    const Rfinalcalculated =
        alpha * (finalTemp - initialTemp)*0.001;
        console.log(Rfinalcalculated);
    return Rfinalcalculated;
  };

  const calculateRange = (material) => {
    let mintemp1, maxtemp1, resistanceRange;
    if (material === "J") {
      setAlphaValue(52);
      mintemp1 = 95;
      maxtemp1 = 760;
      resistanceRange = "Iron(+)Versus Constantan(-)";
    } else if (material === "K") {
      setAlphaValue(41);
      mintemp1 = 95;
      maxtemp1 = 1260;
      resistanceRange = "Nickel-10% Chromium(+)Versus Nickel-5%(-)(Aluminum Silicon)";
    } else if (material === "R") {
      setAlphaValue(9);
      mintemp1 = 870;
      maxtemp1 = 1450;
      resistanceRange = "Platinum-13% Rhodium(+) Versus Platinum(-)";
    }
    else if (material === "S") {
      setAlphaValue(6);
      mintemp1 = 980;
      maxtemp1 = 1450;
      resistanceRange = "Platinum-10% Rhodium(+) Versus Platinum(-)";
    }
    else if (material === "T") {
      setAlphaValue(41);
      mintemp1 = 0;
      maxtemp1 = 350;
      resistanceRange = "Copper(+) Versus Constantan(-)";
    }
    setminTemp(mintemp1);
    setmaxTemp(maxtemp1);
    setTempRange(tempRange);
    setResistanceRange(resistanceRange);
  };

  const handleMaterialChange = (e) => {
    const selectedMaterial = e.target.value;
    setMaterial(selectedMaterial);
    calculateRange(selectedMaterial);
  };

  const handleFinalTempChange = (e) => {
    const ele = e.target.value;
    if (ele < minTemp || ele > maxTemp) {
      setFinalTemp(ele);
    } else {
      let width1 = (ele - initialTemp) * 0.091 + 23;
      if (ele - initialTemp <= 0)
        setFlameimgwidth(0);
      else {
        if (width1 > 55) width1 = 55;
        setFlameimgwidth(width1);
      }
      setFinalTemp(ele);
    }
  };
  
  
  const checkResistance = () => {
    if (finalTemp < minTemp || finalTemp > maxTemp) {
      alert("Entered temperature is out of range. Kindly enter correct temperature value");
      return;
    }
  
    if (finalResistance < 0) {
      alert("Output voltage cannot be negative. Please enter a valid value.");
      return;
    }
    
    const calculatedResistance = calculateResistance(
      initialTemp,
      finalTemp,
      material,
      initialResistance
    );
  
    if (Math.abs(calculatedResistance - finalResistance) < 0.101) {
      setCount(count + 1);
      const newData = { x: finalTemp, y: finalResistance };
      setResistanceData([...resistanceData, newData]);
      alert("Output Volatge value is correct. Data saved.");
    } else {
      alert("Warning: Entered Output Voltage value is incorrect.");
    }
  };
  
  

  return (
    <div className="rtd-experiment">
      <div className="rtd-l1-left">
        <h2>Thermocouple </h2>
        <div className="images-diag">
          <div className="rtd-and-flames">
            <div className="rtd-image">
              <img src={RTDimage} alt="" className="beaker-image" />
            </div>
            <div className="flame-img-div">
              <img src={flame_img} alt="" className="flame_img" style={{ width: `${flameimgwidth}%` }} />
              <img src={burner_img} alt="" className="burner_img" />
            </div>
          </div>
          <div className="circuit-div">
            <img src={circuit_img} alt="" />
          </div>
        </div>

      </div>
      <div className="right_rtd_L1">
        <div className="input-form">
          <h2>Control Panel</h2>
          <div className="control-panel-boxes material">
            <label htmlFor="initialTemperature">Thermocouple Type</label>
            <select className="material-input" value={material} onChange={handleMaterialChange} >
              <option value="J">J</option>
              <option value="K">K</option>
              <option value="R">R</option>
              <option value="S">S</option>
              <option value="T">T</option>
            </select>
          </div>
          <div className="control-panel-box-span">
            <span>Value of S (µV/°C) : {alphaValue}</span>
            
          </div>
          <div className="control-panel-boxes">

            <div className="temp-range-box"><label htmlFor="initialTemperature">Initial Temperature :</label>
            {/* <span>Temperature Range: {minTemp} to {maxTemp}</span></div> */}
            <span>Temperature Range (°C) : -5 to 20</span></div>
            <input className="initial-temperature-input" type="number" id="initialTemperature" value={initialTemp}
              onChange={(e) => setInitialTemp(parseFloat(e.target.value))}
            />
          </div>
          {/* <div className="control-panel-boxes">

            <label htmlFor="initialResistance">Initial Resistance:</label>
            <input
              className="initial-resistance-input"
              type="number"
              id="initialResistance"
              value={initialResistance}
              onChange={(e) => setInitialResistance(parseFloat(e.target.value))}
            />
          </div> */}
          <div className="control-panel-boxes">
            <div className="temp-range-box"><label htmlFor="finalTemperature">Final Temperature :</label>
            <span>Temperature Range (°C) : {minTemp} to {maxTemp}</span></div>
            <input
              className="final-temperature-input"
              type="number"
              id="finalTemperature"
              value={finalTemp}
              onChange={handleFinalTempChange}
            />
          </div>
          <div className="formula-final-resistance">
            <p className="main-formula">Output Volatge value is Eemf = −S∆T = S(Th − Tc)</p>
            <p>where: Eemf is the voltage output of the thermocouple</p>
            <p>S(µV/°C) is a temperature-dependent material property, known as the Seebeck coefficient</p>
            <p>Tc is the Temperature of the Cold Junction</p>
            <p>Th is the Temperature of the Hot Junction</p>
          </div>
          <div className="control-panel-boxes">

            <label htmlFor="finalResistance">Output Voltage (mV)</label>
            <input
              className="final-resistance-input"
              type="number"
              id="finalResistance"
              value={finalResistance}
              onChange={(e) => setFinalResistance(parseFloat(e.target.value))}
            />
          </div>
          <div className="control-panel-boxes control-panel-btn-box">

            <button className="check-button" onClick={checkResistance}>
              Check Voltage
            </button>
            <button className="plot-button" onClick={handlePlotClick}>
              Plot
            </button>
            <button className="plot-button" onClick={resetResistanceData}>
              Reset
            </button>
          </div>
          {showChart && (
            <div className="Chart-display">
              <Graph data={resistanceData}></Graph>
            </div>
          )}
        </div>
      </div>
    </div>

  );
};

export default ThermocoupleExpermi;
