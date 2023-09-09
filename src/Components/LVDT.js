import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';

const LVDT = () => {
  const [x, setX] = useState(0);

  
  const [Np, setNum1] = useState(0);
  const [Vin, setNum2] = useState(0);
  const [freq, setNum3] = useState(0);
  const [Vout, setSum] = useState(0);
  const [b, setNum4] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const Ip = Vin/10000;
    const Ns = Np/2;
    const ro_ri = 2;
    const dist =0 ;
    const u0 = 4*Math.PI*10E7;
     
    // const di = 20;
    const m = 10; 
    const data = {
      labels: [...Array(20).keys()],
      datasets: [
        {
          label: "ABC",
          data: [...Array(20).keys()].map((b) =>  (freq*Ip)*((4*Math.PI*Np*Ns*u0*b*x)/(3*m))(1 - (x^2/(2*b*b)))),
        },
      ],
    };
 
    setSum(Vout);
  };

  return (
    <div>
      <h1>Sum of Three Numbers</h1>
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
      <input value = {b} id="b" type="range" min="50" max="100" step="10" onChange={(e) => setNum4(e.target.value)} ></input>
      {/* <input   type="number" min={-10}  max={10} value={x} onChange={(e) => setX(e.target.value)}  /> */}
      <Line data={data} />
    </div> 
      </form> 
    </div>
  );
};

export default LVDT;