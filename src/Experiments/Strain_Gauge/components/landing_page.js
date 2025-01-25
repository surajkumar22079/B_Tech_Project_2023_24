import React, { useState } from "react";
import Graph from "./Graph";
import RTDimage from "../Images/RTD_image_L1.png"
// import flame_img from "../Images/Flames_img.png"
import flame_img from "../Images/Diagram.jpg"
import burner_img from "../Images/Flames_img2.png"
import circuit_img from "../Images/Simple Diagram.jpg"
import wheatstonebridge from "../Images/wheatstone-bridge-diagram-01.png"
import "./RTD.css"

const sampleData = [
  { x: 1, y: 100 },
  { x: 2, y: 150 },
  { x: 8, y: 200 },
  { x: 9, y: 200 },
  { x: 9, y: 200 },
  // Add more data points as needed
];

const StrainguageExpermi = () => {
  const [initialTemp, setInitialTemp] = useState();
  const [initialResistance, setInitialResistance] = useState();
  const [finalTemp, setFinalTemp] = useState();
  const [finalResistance, setFinalResistance] = useState();
  const [material, setMaterial] = useState("Copper"); // Default value for material
  const [resistanceData, setResistanceData] = useState([]);
  const [tempRange, setTempRange] = useState("Iron(+)Versus Constantan(-)");
  const [minTemp, setminTemp] = useState(95);
  const [maxTemp, setmaxTemp] = useState(760);
  const [resistanceRange, setResistanceRange] = useState("0 Ω - 100 Ω");
  const [showChart, setShowChart] = useState(false);
  const [alphaValue, setAlphaValue] = useState(80);
  const [count, setCount] = useState(0);
  const [flameimgwidth, setFlameimgwidth] = useState(0);
  const [inpvolt, setinpvolt] = useState(0); // New state for height
  const [resis, setresis] = useState(0); // New state for inner radius
  const [gauge, setgauge] = useState(0); // New state for outer radius
  const [weight, setweight] = useState(0); // New state for level
  const [config,setConfig] = useState("full");

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

    let e_one;
    if (material === "Copper") {
      e_one = 17000000;
      
    } else if (material === "	Constantan") {
      e_one = 162000000;
      
    } else if (material === "Annealed Constantan") {
      e_one = 162000000;
      
    }
    else if (material === "Isoelastic") {
      e_one = 20000000;
      
    }
    else if (material === "Tungsten") {
      e_one = 58000000;
      
    }
    else if (material === "Titanium") {
      e_one = 15000000;
      
    }
    else if (material === "Karma Alloy") {
      e_one = 162000000;
      
    }

    if (typeof e_one === "undefined") {
      alert("Please select a material before checking Voltage.");
      return;
    }

    let Rfinalcalculated = ((0.25)*(((gauge*weight*3000000)/e_one)*resis)*inpvolt);
    if(config==="half") Rfinalcalculated = 2*Rfinalcalculated;
    else if(config === "full" ) Rfinalcalculated = 4*Rfinalcalculated;
         console.log(Rfinalcalculated);
        setFinalTemp(Rfinalcalculated)
    return Rfinalcalculated;

    
  };

 const handleConfigChange = (e) =>{
  setConfig(e.target.value);

 }

  const calculateRange = (material) => {
    let mintemp1, maxtemp1, resistanceRange;
    if (material === "Copper") {
      setAlphaValue(17000000);
      // mintemp1 = 95;
      // maxtemp1 = 760;
      // resistanceRange = "Iron(+)Versus Constantan(-)";
    } else if (material === "Constantan") {
      setAlphaValue(162000000);
      // mintemp1 = 95;
      // maxtemp1 = 1260;
      // resistanceRange = "Nickel-10% Chromium(+)Versus Nickel-5%(-)(Aluminum Silicon)";
    } else if (material === "Annealed Constantan") {
      setAlphaValue(162000000);
      // mintemp1 = 870;
      // maxtemp1 = 1450;
      // resistanceRange = "Platinum-13% Rhodium(+) Versus Platinum(-)";
    }
    else if (material === "Isoelastic") {
      setAlphaValue(20000000);
      // mintemp1 = 980;
      // maxtemp1 = 1450;
      // resistanceRange = "Platinum-10% Rhodium(+) Versus Platinum(-)";
    }
    else if (material === "Tungsten") {
      setAlphaValue(58000000);
      // mintemp1 = 0;
      // maxtemp1 = 350;
      // resistanceRange = "Copper(+) Versus Constantan(-)";
    }
    else if (material === "Titanium") {
      setAlphaValue(15000000);
      // mintemp1 = 0;
      // maxtemp1 = 350;
      // resistanceRange = "Copper(+) Versus Constantan(-)";
    }
    else if (material === "Karma Alloy") {
      setAlphaValue(162000000);
      // mintemp1 = 0;
      // maxtemp1 = 350;
      // resistanceRange = "Copper(+) Versus Constantan(-)";
    }
    // setminTemp(mintemp1);
    // setmaxTemp(maxtemp1);
    // setTempRange(tempRange);
    // setResistanceRange(resistanceRange);
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
      alert("Output Voltage cannot be negative. Please enter a valid value.");
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
      const newData = { x: weight, y: finalTemp };
      setResistanceData([...resistanceData, newData]);
      alert("Output Voltage value is correct. Data saved.");
    } else {
      alert("Warning: Entered Output Voltage value is incorrect.");
    }
  };
  
  

  return (
    <div className="rtd-experiment">
      <div className="rtd-l1-left">
        <h2>Strain Gauge</h2>
        <div className="images-diag">
          <div className="rtd-and-flames">
            <div className="rtd-image">
              <img src={wheatstonebridge} alt="" className="beaker-image" />
            </div>
          </div>
        </div>

      </div>
      <div className="right_rtd_L1">
        <div className="input-form">
          <h2>Control Panel</h2>
          <div className="control-panel-boxes material">
            <label htmlFor="initialTemperature">Material</label>
            <select className="material-input" value={material} onChange={handleMaterialChange} >
              <option value="Copper">Copper</option>
              <option value="Constantan">Constantan</option>
              <option value="Annealed Constantan">Annealed Constantan</option>
              <option value="Isoelastic">Isoelastic</option>
              <option value="Tungsten">Tungsten</option>
              <option value="Titanium">Titanium</option>
              <option value="Karma Alloy">Karma Alloy</option>
            </select>
          </div>
          <div className="control-panel-boxes config">
            <label htmlFor="config">Bridge Configuration</label>
            <select className="material-input" value={config} onChange={handleConfigChange} >
              <option value="full">Full Bridge</option>
              <option value="half">Half Bridge</option>
              <option value="quarter">Quarter Bridge</option>
            </select>
          </div>

          <div className="control-panel-boxes">
            {/* New input box for height */}
            <label htmlFor="inpvolt">Input Voltage (V):</label>
            <input
              type="number"
              id="inpvolt"
              value={inpvolt}
              onChange={(e) => setinpvolt(parseFloat(e.target.value))}
            />
          </div>

          <div className="control-panel-boxes">
            {/* New input box for inner radius */}
            <label htmlFor="resis">Resistance (Ω):</label>
            <input
              type="number"
              id="resis"
              value={resis}
              onChange={(e) => setresis(parseFloat(e.target.value))}
            />
          </div>
          <div className="control-panel-boxes">
            {/* New input box for outer radius */}
            <label htmlFor="gauge">Gauge Factor:</label>
            <input
              type="number"
              id="gauge"
              value={gauge}
              onChange={(e) => setgauge(parseFloat(e.target.value))}
            />
          </div>
          <div className="control-panel-boxes">
            {/* New input box for level */}
            <label htmlFor="weight">Weight (Kg):</label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setweight(parseFloat(e.target.value))}
            />
          </div>


          <div className="formula-final-resistance">
          <p className="main-formula">Note : Weight vaires w.r.t Voltage, other parameters reamins same.</p>
            <p className="main-formula">Formula, dR = GF * dL/L * R
                <p>New resistance of strain Gauge : Rg = R+ dR</p>
                <p>Output voltage in Quarter Bridge : e = 1/4 * (dR/R) * E</p>
                <p>Output voltage in Half Bridge : e = 1/2 * (dR/R) * E</p>
                Output voltage in Full Bridge : e = (dR/R) * E</p>
                <p>Where, R = Resistance of Strain Gauge, E = Voltage applied</p>
                <p>Strain dL/L = M/(Z*YM), Where, Z = 1/6 * b* h^2 And M = W.L</p>
                <p>Where, M= Bending movment, W = applied weight(NEWTON), L = distance from load point to sg center(in meters)</p>
                <p>b = width of the cantilever (in meters), h = thickness of cantilever (in meters)</p>
                <p>Consider L = 16 cm, b = 2cm, h = 4mm= 0.4 cm</p>
                <p>YM = Young's Modulus of Strain guage material, GF = Gauge Factor</p>
          </div>
          <div className="control-panel-boxes">

            <label htmlFor="finalResistance">Output Voltage (in mV)</label>
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

export default StrainguageExpermi;
