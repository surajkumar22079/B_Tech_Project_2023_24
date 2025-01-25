import React, { useState } from 'react';
import "./RTD.css";
import { tree } from 'd3';


// x refers to 	ρ
//y refers to specific heat capacity (s)
// z refers to K(thermal conductivity)

const materialDetails = [
  { x: 21450, y: 130, z: 71.6, material: "platinum" },
  { x: 8030, y: 500, z: 21.4, material: "SS304" },
  { x: 7990, y: 500, z: 21.4, material: "SS316" },
  { x: 7750, y: 460, z: 24.9, material: "SS410" },
  { x: 1.2, y: 1005, z: 0.025, material: "Air" },
  { x: 3580, y: 877, z: 26.8, material: "MgoPowder" },
  { x: 3210, y: 800, z: 3, material: "SiliconCompound" },
  // Add more data points as needed
];
function calculate_τ(val1 = 0, val2 = 0, val3 = 0) {
  let x1, y1, z1;
  x1 = materialDetails[val1].x;
  y1 = materialDetails[val1].y;
  z1 = materialDetails[val1].z;
  const result = (val2 * x1 * y1 * 15) / (z1 * 1000000);
  const precision = 3; // Set the desired number of decimal places 
  const formattedResult = result.toFixed(precision);
  return formattedResult;
}


const MyComponent = () => {



  // console.log(sampleData[0]);
  const [isBare, setIsBare] = useState(false);
  const [material, setMaterial] = useState('Platinum');
  const [sheathMaterial, setSheathMaterial] = useState('Platinum');
  const [sheathThickness, setSheathThickness] = useState(0);
  const [sheathLength, setSheathLength] = useState(15);
  const [thermowellMaterial, setThermowellMaterial] = useState('Platinum');
  const [thermowellThickness, setThermowellThickness] = useState(2.5);
  const [thermowellLength, setThermowellLength] = useState(15);


  const [bare_τ, setBareτ] = useState(0);
  const [air_τ, setAirτ] = useState(0);
  const [sheath_τ, setSheath] = useState(0);
  const [fillingmaterial_τ, setFillingMaterial_τ] = useState(0);
  const [thermowell_τ, setThermowell] = useState(0);

  const handleBareCheckboxChange = (e) => {
    if (!isBare) {
      const ele = calculate_τ(0, 2, 0);
      console.log(ele);
      setBareτ(ele);
      alert(`The value of time constant is ${ele}`)
    }
    setIsBare(!isBare);

  }

  const handleSheathChange = (e) => {
    let ele;
    let Thickness = e;
    if (sheathMaterial === "SS304")
      ele = calculate_τ(1, Thickness, 0);
    if (sheathMaterial === "SS316")
      ele = calculate_τ(2, Thickness, 0);
    if (sheathMaterial === "SS410")
      ele = calculate_τ(3, Thickness, 0);
      let ele1 = calculate_τ(0, 2, 0); // bare_element
      let ele2 = calculate_τ(4, 0.2, 0);
    setSheath(ele1 + ele2 + ele);
    const returnVal = ele1+ele2+ele;
    console.log(returnVal);
    alert(`The value of time constant is ${returnVal}`);
  }

  const handleThermowellChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'thermowellMaterial':
        setThermowellMaterial(value);
        break;
      case 'thermowellThickness':
        setThermowellThickness(value);
        break;
      case 'thermowellLength':
        setThermowellLength(value);
        break;
      default:
        break;
    }
  }

  const handleReloadClick = () => {
    setIsBare(false);
    setMaterial('Platinum');
    setSheathMaterial('Platinum');
    setSheathThickness('2');
    setSheathLength('15');
    setThermowellMaterial('Platinum');
    setThermowellThickness('2.5');
    setThermowellLength('15');
  }

  const handlePlotClick = () => {
    // Perform calculations and plot the graphs
    // You can implement the calculation and graph plotting logic here.
  }

  return (
    <div className="container">
      <div className="left-part">
        {/* Left part is blank */}
      </div>
      <div className="right-part">
        <h1>Headings</h1>
        <div className="sub-divs">
          <h3>First Div</h3>
          <input type="checkbox" id="bare" onChange={handleBareCheckboxChange} />
          <label htmlFor="bare">Bare</label>
          <br />
          {/* <label>Material: Platinum</label> */}
          <select name="sheathMaterial" value={sheathMaterial} disabled={true}>
            <option value="SS304">Material</option>
          </select>
        </div>
        <div className="sub-divs">
          <h3>Second Div</h3>
          <input type="checkbox" id="sheath" />
          <label htmlFor="sheath">With Sheath</label>
          <br />
          <select name="sheathMaterial" value={sheathMaterial}>
            <option value="SS304">SS304</option>
            <option value="SS316">SS316</option>
            <option value="SS410">SS410</option>
          </select>
          <input type="text" name="sheathThickness" value={sheathThickness} onChange={handleSheathChange} placeholder="Thickness" />
        </div>
        <div className="sub-divs">
          <h3>Third Div</h3>
          <input type="checkbox" id="thermowell" />
          <label htmlFor="thermowell">Thermowell</label>
          <br />
          <select name="thermowellMaterial" value={thermowellMaterial} onChange={handleThermowellChange}>
            <option value="Platinum">Platinum</option>
            <option value="SS304">SS304</option>
            <option value="SS316">SS316</option>
            <option value="SS410">SS410</option>
          </select>
          <input type="text" name="thermowellThickness" value={thermowellThickness} onChange={handleThermowellChange} placeholder="Thickness" />
          <input type="text" name="thermowellLength" value={thermowellLength} onChange={handleThermowellChange} placeholder="Length" />
        </div>
        <div className="sub-divs">
          <h3>Fourth Div</h3>
          <button onClick={handleReloadClick}>Reload</button>
          <button onClick={handlePlotClick}>Plot</button>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
