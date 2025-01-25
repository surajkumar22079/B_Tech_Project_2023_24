import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from "./Chart.js";
import Observation from "./Observation_table.js";
import "./LVDT.css";
import SinGraph from "./sine_curve.js";
import { classNames } from "@syncfusion/ej2-react-buttons/index.js";

const ProductGraph = () => {
  const [disp, setValue] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.disp);
  };
  let [Np, setNum1] = useState(1000);
  let [Vin, setNum2] = useState(5);
  let [freq, setNum3] = useState(1000);
  // let [Vout, setSum] = useState(0);
  let [b, setNum4] = useState(20);
  let Ip = Vin / 10000;
  let Ns = Np / 2;
  let [ro_ri, setrori] = useState(2);
  let dist = 0;
  let u0 = 4 * Math.PI * 10E-7;
  let m = 20;
  // let [data, setData] = useState([]);



  const handleSubmit = () => {

    Ip = Vin / 10000;
    Ns = Np / 2;
  }
  const [isComponentVisible, setIsComponentVisible] = useState(true);

  const toggleVisibility = () => {
    setIsComponentVisible(!isComponentVisible);
  };
  const [data, setData] = useState([]);
  const [Vout , setVout] = useState(0);
  useEffect(() => {
    const newData = [];
    for (let i = -9; i <= 9; i += 1) {
      newData.push({
        x: i,
        // y:  (freq * Ip) * (( 4 * 3.14 * 2*Np * Np * u0 * b * i) / (3 * Math.log10(2) *m)) * (1 - (i*i/ (2 * b * b))) ,
        // y: Ns*i,
        y: Math.abs(1.046 * freq * Ip * Np * Np * u0 * i * ((2 * b * b - i * i) / (m * b * Math.log(ro_ri)))),
      });
    }
    setData(newData);
    setVout(Math.abs(1.046 * freq * Ip * Np * Np * u0 * disp * ((2 * b * b - disp * disp) / (m * b * Math.log(ro_ri))))/30);
  });


  return (
    <div className="observation_block">
      <form className="form" onSubmit={handleSubmit}>
            <h2 className="config">Configurations</h2>
            <div className="input_box">
              <label htmlFor="Np">Number of Turns</label>
              <br />
              <select name="" id="Np" value={Np} onChange={(e) => setNum1(e.target.value)}>
                <option  >1000</option>
                <option  >1500</option>
              </select>
            </div>
            <br />

            <div className="input_box">
              <label htmlFor="Vin">Supply Voltage</label>
              <br />
              <select name="" id="Vin" value={Vin} onChange={(e) => setNum2(e.target.value)}>
                <option  >5</option>
                <option  >7</option>
                <option  >10</option>
              </select>
            </div>
            <br />
            <div className="input_box">
              <label htmlFor="freq">Supply Frequency</label>
              <br />
              <select name="" id="freq" value={freq} onChange={(e) => setNum3(e.target.value)}>
                <option  >1000</option>
                <option  >3000</option>
                <option  >5000</option>
              </select>
            </div>
            <br />
            <div>
              <div className="input_box">
                <label htmlFor="freq">Input length of primary winding</label>
                <br />
                <input value={b} id="b" type="number" onChange={(e) => setNum4(e.target.value)} ></input>
                {/* <input   type="number" min={-10}  max={10} value={x} onChange={(e) => setX(e.target.value)}  /> */}
              </div>
            </div>
            <div className="input_box " style={{display:"flex", flexDirection : "column"  , margin:`${13}px ${8}px`}}>
              <p>Value of the displacement of rod from mean position: {disp}</p>
              <input type="range" min="-9" max="9" step="1" className ="range_input" value={disp} onChange={(e) => setValue(e.target.value) }  />
            </div>
            <button className="submitbtn" type="submit" onClick={toggleVisibility}>Submit</button>
          </form>
      <div className="graphs">
        {/* <p>{Vout}</p> */}
        <SinGraph x={Vin} y={Vout} className="sineBlock" ></SinGraph>
        <h3>Sine curves of Vin and Vout</h3>

        <Chart data={data}></Chart>
        <h3> Vout wrt displacement of Iron Rod</h3>
      </div>
      <Observation data={data}></Observation>
      {/* <div className="observation_block">
    </div> */}
    </div>
  );
};

export default ProductGraph;