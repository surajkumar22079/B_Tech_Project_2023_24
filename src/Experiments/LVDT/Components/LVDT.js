import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import ProductGraph from "./LVDT_graph";
import {
  ScatterChart, Scatter, XAxis,
  YAxis, CartesianGrid
} from 'recharts';
import sample_diag from "../images/Diagram_sample.jpg"
import "./LVDT.css";
import LogicCircuit from "./LogicCircuit";



const LVDT = () => {

  // let [x, setX] = useState(0);  


  return (
    <div>
      
      <div className="container">
        {/* <Diagram></Diagram> */}
        {/* <LogicCircuit ></LogicCircuit> */}
        <h3>Note: Kindly complete the circuit as shown in tha sidebar</h3>
        <div className="top_container">
          <LogicCircuit ></LogicCircuit>
          {/* <Wire className="wire"></Wire> */}
          <div className="diagram_img sample_diag">
            <h3>Sample Diagram</h3>
            <img LVDT={sample_diag} alt="" />
          </div>
        </div>
        {/* <Line data={data}></Line> */}
        {/* <div className="graph_observation" style={{ display: isComponentVisible ? 'flex' : 'none', justifyContent: "center" }}>  */}
        <ProductGraph  ></ProductGraph>

      </div>
    </div>
  );
};

export default LVDT;