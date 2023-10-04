import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from "./Chart.js";
import Observation from "./Observation_table.js";
import "./LVDT.css";
import SinGraph from "./sine_curve.js";

const ProductGraph = ({ freq , Ip,Np,u0, m , b , ro_ri , Vin}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = [];
    for (let i = -9; i <= 9; i+=1) {
      newData.push({
        x: i,
        // y:  (freq * Ip) * (( 4 * 3.14 * 2*Np * Np * u0 * b * i) / (3 * Math.log10(2) *m)) * (1 - (i*i/ (2 * b * b))) ,
        // y: Ns*i,
        y: Math.abs(1.046* freq*Ip*Np*Np*u0*i * ((2*b*b-i*i)/(m*b*Math.log(ro_ri)))),
      });
    }
    setData(newData);
  }, [freq , Ip,Np,u0, m , b, ro_ri ]);

  return (
    <div>
      <SinGraph x = {Vin} y = {Vin-1} className = "sineBlock" ></SinGraph>
    <div className="observation_block">
       <Observation data = {data}></Observation>
       <Chart data = {data}></Chart> 
    </div>
    </div>
  );
};

export default ProductGraph;