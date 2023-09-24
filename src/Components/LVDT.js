import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import ProductGraph from "./LVDT_graph";
import { ScatterChart, Scatter, XAxis, 
  YAxis, CartesianGrid } from 'recharts';

// const labels = [-8,-4,-1,1,4,8]

// const data = [
//   { x: -1, y: 23 },
//   { x: 2, y: 3 },
//   { x: 3, y: 15 },
//   { x: 4, y: 35 },
//   { x: 5, y: 45 },
//   { x: 6, y: 25 },
//   { x: 7, y: 17 },
//   { x: 8, y: 32 },
//   { x: 9, y: 43 },
// ];

const LVDT = () => {

  // let [x, setX] = useState(0);  
  let [Np, setNum1] = useState(1000);
  let [Vin, setNum2] = useState(5);
  let [freq, setNum3] = useState(1000);
  // let [Vout, setSum] = useState(0);
  let [b, setNum4] = useState(20);
  let Ip = Vin / 10000;
  let Ns = Np / 2;
  let [ro_ri , setrori]  = useState(2);
  let dist = 0;
  let u0 = 4 * Math.PI * 10E-7;
  let m = 20;
  // let [data, setData] = useState([]);
  
    

  const handleSubmit = () => {
    Ip = Vin / 10000;
    Ns = Np / 2; 
  }
    // event.preventDefault();
    // setSum(Vout);
    // const newData = [];
    // for (let i = -10; i <= 10; i += 2) {
    //   newData.push({
    //     x: i,
    //     y: ((freq * Ip* 4 * 3.14 * Np * Ns * u0 * b * i) / (3 * m)) *(1 - (i ^ 2 / (2 * b * b))),
    //   })
    // setData(newData);
  

  return (
    <div>
      <h1>LVDT experiment</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Np">Number of Turns</label>
        <select name="" id="Np" value={Np} onChange={(e) => setNum1(e.target.value)}>
          <option  >1000</option>
          <option  >1500</option>
        </select>
        <br />
        {/* <input value = {x} id="slider" type="range" min="50" max="100" step="10" onChange={(e) => setNum4(e.target.value)} ></input> */}
        <br />
        <label htmlFor="Vin">Supply Voltage</label>
        <select name="" id="Vin" value={Vin} onChange={(e) => setNum2(e.target.value)}>
          <option  >5</option>
          <option  >7</option>
          <option  >10</option>
        </select>
        <br />
        <label htmlFor="freq">Supply Frequency</label>
        <select name="" id="freq" value={freq} onChange={(e) => setNum3(e.target.value)}>
          <option  >1000</option>
          <option  >3000</option>
          <option  >5000</option>
        </select>
        <br />
        <div>
          <input value={b} id="b" type="number"   onChange={(e) => setNum4(e.target.value)} ></input>
          {/* <input   type="number" min={-10}  max={10} value={x} onChange={(e) => setX(e.target.value)}  /> */}
        </div>
        <button type="submit">Submit</button>
      </form>
          {/* <Line data={data}></Line> */}
      <div style={{display :"flex", justifyContent:"center"}}>
      <ProductGraph freq = {freq} Ip = {Ip} Np = {Np} u0 = {u0} m = {m} b = {b} ro_ri = {ro_ri}></ProductGraph>
      </div>
    </div>
  );
};

export default LVDT;