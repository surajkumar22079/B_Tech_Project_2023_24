import React, { useState } from "react";
import Graph from "./Graph";
import RTDimage from "../Images/RTD_image_L1.png"
// import flame_img from "../Images/Flames_img.png"
import flame_img from "../Images/Diagram.jpg"
import burner_img from "../Images/Flames_img2.png"
import circuit_img from "../Images/Simple Diagram.jpg"
import "./RTD.css"

const sampleData = [
  { x: 1, y: 100 },
  { x: 2, y: 150 },
  { x: 8, y: 200 },
  { x: 9, y: 200 },
  { x: 9, y: 200 },
  // Add more data points as needed
];

const CapacitanceExpermi = () => {
  const [initialTemp, setInitialTemp] = useState();
  const [initialResistance, setInitialResistance] = useState();
  const [finalTemp, setFinalTemp] = useState();
  const [finalResistance, setFinalResistance] = useState();
  const [material, setMaterial] = useState("Water"); // Default value for material
  const [resistanceData, setResistanceData] = useState([]);
  const [tempRange, setTempRange] = useState("Iron(+)Versus Constantan(-)");
  const [minTemp, setminTemp] = useState(95);
  const [maxTemp, setmaxTemp] = useState(760);
  const [resistanceRange, setResistanceRange] = useState("0 Ω - 100 Ω");
  const [showChart, setShowChart] = useState(false);
  const [alphaValue, setAlphaValue] = useState(80);
  const [count, setCount] = useState(0);
  const [flameimgwidth, setFlameimgwidth] = useState(0);
  const [height, setHeight] = useState(0); // New state for height
  const [innerRadius, setInnerRadius] = useState(0); // New state for inner radius
  const [outerRadius, setOuterRadius] = useState(0); // New state for outer radius
  const [level, setLevel] = useState(0); // New state for level

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

    let e_two;
    if (material === "Water") {
      e_two = 80
      
    } else if (material === "Hydrochloric Acid") {
      e_two = 5;
      
    } else if (material === "Coffee Beans") {
      e_two = 1.5;
      
    }
    else if (material === "Grain of mustard seed") {
      e_two = 3.6;
      
    }
    else if (material === "Skimmed milk powder") {
      e_two = 2.3;
      
    }

    if (typeof e_two === "undefined") {
      alert("Please select a material before checking Capacitance.");
      return;
    }

    // const Rfinalcalculated =
    //   initialResistance * (1 + e_two * (finalTemp - initialTemp));
    // return Rfinalcalculated;
    const Rfinalcalculated =
        (2*Math.PI*8.85*0.000000000001*(((height*0.01*0.9)-5-level*0.01)+e_two*level*0.01)/(Math.log(outerRadius/innerRadius)))*(100000000);
        console.log(Rfinalcalculated);
        setFinalTemp(Rfinalcalculated)
    return Rfinalcalculated;

    // 2 πε0 (ε1h1 + ε2h2) / ln (r2/r1)
  };

  const calculateRange = (material) => {
    let mintemp1, maxtemp1, resistanceRange;
    if (material === "Water") {
      setAlphaValue(80);
      mintemp1 = 95;
      maxtemp1 = 760;
      resistanceRange = "Iron(+)Versus Constantan(-)";
    } else if (material === "Hydrochloric Acid") {
      setAlphaValue(5);
      mintemp1 = 95;
      maxtemp1 = 1260;
      resistanceRange = "Nickel-10% Chromium(+)Versus Nickel-5%(-)(Aluminum Silicon)";
    } else if (material === "Coffee Beans") {
      setAlphaValue(1.5);
      mintemp1 = 870;
      maxtemp1 = 1450;
      resistanceRange = "Platinum-13% Rhodium(+) Versus Platinum(-)";
    }
    else if (material === "Grain of mustard seed") {
      setAlphaValue(3.6);
      mintemp1 = 980;
      maxtemp1 = 1450;
      resistanceRange = "Platinum-10% Rhodium(+) Versus Platinum(-)";
    }
    else if (material === "Skimmed milk powder") {
      setAlphaValue(2.3);
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
    // if (finalTemp < minTemp || finalTemp > maxTemp) {
    //   alert("Entered temperature is out of range. Kindly enter correct temperature value");
    //   return;
    // }
  
    if (finalResistance < 0) {
      alert("Output Capacitance cannot be negative. Please enter a valid value.");
      return;
    }
    
    const calculatedResistance = calculateResistance(
      initialTemp,
      finalTemp,
      material,
      initialResistance
    );
  
    if (Math.abs(calculatedResistance - finalResistance) < 0.1) {
      setCount(count + 1);
      const newData = { x: level, y: finalTemp };
      setResistanceData([...resistanceData, newData]);
      alert("Output Capacitance value is correct. Data saved.");
    } else {
      alert("Warning: Entered Output Capacitance value is incorrect.");
    }
  };
  
  

  return (
    <div className="rtd-experiment">
      <div className="rtd-l1-left">
        <h2>Capacitance Level Measurement</h2>
        <div className="images-diag">
          <div className="rtd-and-flames">
            <div className="rtd-image">
              <img src={flame_img} alt="" className="beaker-image" />
            </div>
            {/* <div className="flame-img-div">
              <img src={flame_img} alt="" className="flame_img" style={{ width: `${flameimgwidth}%` }} />
              <img src={burner_img} alt="" className="burner_img" />
            </div> */}
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
            <label htmlFor="initialTemperature">Service Type</label>
            <select className="material-input" value={material} onChange={handleMaterialChange} >
              <option value="Water">Water</option>
              <option value="Hydrochloric Acid">Hydrochloric Acid</option>
              <option value="Coffee Beans">Coffee Beans</option>
              <option value="Grain of mustard seed">Grain of mustard seed</option>
              <option value="Skimmed milk powder	">Skimmed milk powder</option>
            </select>
          </div>
          <div className="control-panel-box-span">
            <span>Value of Dielectric Constant(ε2) : {alphaValue}</span>
            
          </div>
          {/* <div className="control-panel-boxes">

            <div className="temp-range-box"><label htmlFor="initialTemperature">Initial Temperature :</label>
            {/* <span>Temperature Range: {minTemp} to {maxTemp}</span></div> */}
            {/* <span>Temperature Range (°C) : -5 to 20</span></div>
            <input className="initial-temperature-input" type="number" id="initialTemperature" value={initialTemp}
              onChange={(e) => setInitialTemp(parseFloat(e.target.value))}
            /> */}
          {/* </div> */} 
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
          {/* <div className="control-panel-boxes">
            <div className="temp-range-box"><label htmlFor="finalTemperature">Final Temperature :</label>
            <span>Temperature Range (°C) : {minTemp} to {maxTemp}</span></div>
            <input
              className="final-temperature-input"
              type="number"
              id="finalTemperature"
              value={finalTemp}
              onChange={handleFinalTempChange}
            />
          </div> */}

          <div className="control-panel-boxes">
            {/* New input box for height */}
            <label htmlFor="height">Height of Tank (cm):</label>
            <input
              type="number"
              id="height"
              value={height}
              onChange={(e) => setHeight(parseFloat(e.target.value))}
            />
          </div>
          <div className="control-panel-boxes">
            {/* New input box for inner radius */}
            <label htmlFor="innerRadius">Inner Radius (cm):</label>
            <input
              type="number"
              id="innerRadius"
              value={innerRadius}
              onChange={(e) => setInnerRadius(parseFloat(e.target.value))}
            />
          </div>
          <div className="control-panel-boxes">
            {/* New input box for outer radius */}
            <label htmlFor="outerRadius">Outer Radius (cm):</label>
            <input
              type="number"
              id="outerRadius"
              value={outerRadius}
              onChange={(e) => setOuterRadius(parseFloat(e.target.value))}
            />
          </div>
          <div className="control-panel-boxes">
            {/* New input box for level */}
            <label htmlFor="level">Level (cm):</label>
            <input
              type="number"
              id="level"
              value={level}
              onChange={(e) => setLevel(parseFloat(e.target.value))}
            />
          </div>


          <div className="formula-final-resistance">
          <p className="main-formula">Note : Level vaires w.r.t Capacitance, other parameters reamins same.</p>
            <p className="main-formula">Formula, C=2 πε0 (ε1h1 + ε2h2) / ln (r2/r1)</p>
                <p>Where,</p>
                <p>C = Capacitance in μF</p>
                <p>r1 = radius of inner cylinder/pipe for 'pipe in pipe' type probe</p>
                <p>r2 = radius of outer cylinder/pipe for 'pipe in pipe' type probe</p>
                <p>ε0 = permittivity of the space = 8.85 xnp 10-12</p>
                <p>h1 =Height (Level) of air column = span - liqiud column height</p>
                <p>h2 =Height (Level) of liquid column</p>
                <p>span = (Tank height * 0.9) - 5</p>
                <p>ε1 = permittivity of air =1</p>
                <p>ε2= Dielectric constant of the process fluid/selected service</p>
                <p>Process Fluid/Service	Dielectric Constant(ε2 ): Water (80), Hydrochloric Acid (5)</p>
                <p>Coffee Beans (1.5), Grain of mustard seed (3.6), Skimmed milk powder (2.3)</p>
          </div>
          <div className="control-panel-boxes">

            <label htmlFor="finalResistance">Output Capacitance (μF)</label>
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
              Check Capacitance
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

export default CapacitanceExpermi;
