import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from "./abc";

const ProductGraph = ({ freq , Ip,Np,u0, m , b , ro_ri}) => {
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
  }, [freq , Ip,Np,u0, m , b, ro_ri]);

  return (
    <div>
       <Chart data = {data}></Chart>
    </div>
  );
};

export default ProductGraph;