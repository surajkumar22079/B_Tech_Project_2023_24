import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LVDT from "./Experiments/LVDT/LVDT_app.js"
import "./Experiment_list.css"

const Experiment_list = () => {
  return (
    // <Router> {/* Wrap your App component with Router */} 
    <div className="exp-list">
      <h1>Instrumentation Experiments</h1>
      <div className="exp-list-box">
        <Link to="/lvdt">1.To understand working principle of LVDT</Link>
        <Link to="/osc">2. To study the working of Oscilloscope and Signal Generator</Link>
        <Link to="/loading">3.To study the loading effect in potentiometer</Link>
        <Link to="/rtd">4.Understanding the Working Principle of RTD</Link>
        <Link to="/man">5. To study the principle behind Piezometer and U-Tube Manometer</Link>
        <Link to="/thermistor">6.To study the behaviour of thermistor</Link>
        <Link to="/clm">7.To study the Working of Capacitive Level Measurement (CLM)</Link>
        <Link to="/thermo">8.To Measure the temperature using Thermocouple</Link>
        <Link to="/strain">9.To study the working of Strain Gauge</Link>
      </div>
    </div>
    // </Router>
  )
}

export default Experiment_list
