import React, { useState } from "react";
import Graph from "./Graph";
import RTDimage from "../Images/RTD_image_L1.png"
import flame_img from "../Images/Flames_img.png"
import burner_img from "../Images/Flames_img2.png"
import circuit_img from "../Images/circuit_diagram_rtd.png"
import "./RTD.css"

const sampleData = [
  { x: 1, y: 100 },
  { x: 2, y: 150 },
  { x: 8, y: 200 },
  { x: 9, y: 200 },
  { x: 9, y: 200 },
  // Add more data points as needed
];

const RTDExperiment = () => {
  const [initialTemp, setInitialTemp] = useState();
  const [initialResistance, setInitialResistance] = useState();
  const [finalTemp, setFinalTemp] = useState();
  const [finalResistance, setFinalResistance] = useState();
  const [material, setMaterial] = useState("Platinum"); // Default value for material
  const [resistanceData, setResistanceData] = useState([]);
  const [tempRange, setTempRange] = useState("-200°C to 850°C");
  const [minTemp, setminTemp] = useState(-200);
  const [maxTemp, setmaxTemp] = useState(850);
  const [resistanceRange, setResistanceRange] = useState("0 Ω - 100 Ω");
  const [showChart, setShowChart] = useState(false);
  const [alphaValue, setAlphaValue] = useState(0.00385);
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
    if (material === "Platinum") {
      alpha = 0.00385
      if (
        !(
          initialTemp >= 0 &&
          initialTemp <= 100 &&
          finalTemp >= -200 &&
          finalTemp <= 850 &&
          initialResistance >= 0
        )
      ) {
        alert("Input value is out of range. Please enter correct value");
      }
    } else if (material === "Copper") {
      alpha = 0.00427;
      if (
        !(
          finalTemp >= -100 &&
          finalTemp <= 260 &&
          initialTemp >= 0 &&
          initialTemp <= 200 &&
          initialResistance >= 0
        )
      ) {
        alert("Input value is out of range. Please enter correct value");
      }
    } else if (material === "Nickel") {
      if (
        !(
          initialTemp >= 0 &&
          initialTemp <= 200 &&
          finalTemp >= -100 &&
          finalTemp <= 260 &&
          initialResistance >= 0
        )
      ) {
        alert("Input value is out of range. Please enter correct value");
      }
      alpha = 0.00672;
    }
    else if (material === "Balco") {
      if (
        !(
          initialTemp >= 0 &&
          initialTemp <= 200 &&
          finalTemp >= -100 &&
          finalTemp <= 204 &&
          initialResistance >= 0
        )
      ) {
        alert("Input value is out of range. Please enter correct value");
      }
      alpha = 0.00518;
    }

    if (typeof alpha === "undefined") {
      alert("Please select a material before checking resistance.");
      return;
    }

    const Rfinalcalculated =
      initialResistance * (1 + alpha * (finalTemp - initialTemp));
    return Rfinalcalculated;
  };

  const calculateRange = (material) => {
    let mintemp1, maxtemp1, resistanceRange;
    if (material === "Platinum") {
      setAlphaValue(0.00385);
      mintemp1 = -200;
      maxtemp1 = 850;
      resistanceRange = "0 Ω - 100 Ω";
    } else if (material === "Copper") {
      setAlphaValue(0.00427);
      mintemp1 = -100;
      maxtemp1 = 260;
      resistanceRange = "0 Ω - 200 Ω";
    } else if (material === "Nickel") {
      setAlphaValue(0.00672);
      mintemp1 = -100;
      maxtemp1 = 260;
      resistanceRange = "0 Ω - 300 Ω";
    }
    else if (material === "Balco") {
      setAlphaValue(0.00518);
      mintemp1 = -100;
      maxtemp1 = 204;
      resistanceRange = "0 Ω - 300 Ω";
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
      alert("Entered resistance is out of range. Kindly enter correct resistance value");
    }
    else {
      let width1 = (ele - initialTemp) * 0.091 + 23;
      // if(ele>=(-100) && ele<0) {
      //   setFlameimgwidth(26);
      // }
      // if(ele>=(0) && ele<100) {
      //   setFlameimgwidth(36);
      // }
      // if(ele>=(100) && ele<200) {
      //   setFlameimgwidth(46);
      // }
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
    const calculatedResistance = calculateResistance(
      initialTemp,
      finalTemp,
      material,
      initialResistance
    );
    console.log(calculatedResistance);

    if (Math.abs(calculatedResistance - finalResistance) < 0.101) {
      setCount(count + 1);
      const newData = { x: finalTemp, y: finalResistance };
      setResistanceData([...resistanceData, newData]);
      alert("Resistance value is correct. Data saved.");
    } else {
      alert("Warning: Entered resistance value is incorrect.");
    }
  };

  return (
    <div className="rtd-experiment">
      <div className="rtd-l1-left">
        <h2>Level-1 Static Characterstics</h2>
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
            <label htmlFor="initialTemperature">Select Material:</label>
            <select className="material-input" value={material} onChange={handleMaterialChange} >
              <option value="Platinum">Platinum</option>
              <option value="Copper">Copper</option>
              <option value="Nickel">Nickel</option>
              <option value="Balco">Balco</option>
            </select>
          </div>
          <div className="control-panel-box-span">
            <span>Value of α : {alphaValue}</span>
            <span>Temperature Range: {minTemp} to {maxTemp}</span>
          </div>
          <div className="control-panel-boxes">

            <label htmlFor="initialTemperature">Initial Temperature:</label>
            <input className="initial-temperature-input" type="number" id="initialTemperature" value={initialTemp}
              onChange={(e) => setInitialTemp(parseFloat(e.target.value))}
            />
          </div>
          <div className="control-panel-boxes">

            <label htmlFor="initialResistance">Initial Resistance:</label>
            <input
              className="initial-resistance-input"
              type="number"
              id="initialResistance"
              value={initialResistance}
              onChange={(e) => setInitialResistance(parseFloat(e.target.value))}
            />
          </div>
          <div className="control-panel-boxes">
            <label htmlFor="finalTemperature">Final Temperature:</label>
            <input
              className="final-temperature-input"
              type="number"
              id="finalTemperature"
              value={finalTemp}
              onChange={handleFinalTempChange}
            />
          </div>
          <div className="formula-final-resistance">
            <p className="main-formula">Final resistance value is Rf = Ri*(1+α(Tf-Ti))</p>
            <p>Rf: final resistance value</p>
            <p>Ti: Initial temperature</p>
            <p>Tf: Temperature at which resistance is to be calculated</p>
            <p>Ri: Known resistance at temperature Ti</p>
            <p>α : value of α for different material </p>
            <p>Now calculate the final resistance value acccording to the values entered above and enter the value in box below. Then check whether the entered value is correct or not by clicking on the button "check resistance"</p>
            <p>After successfully entering three or more values click on the "Plot" button to display the variation of x and y</p>
          </div>
          <div className="control-panel-boxes">

            <label htmlFor="finalResistance">Final Resistance:</label>
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
              Check Resistance
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

export default RTDExperiment;
