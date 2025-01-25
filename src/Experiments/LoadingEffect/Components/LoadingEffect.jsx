import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js library
import Circuit_diagram from "./Assets/circuit_diagram.png";
import Circuit_diagram2 from "./Assets/circuit_diagram2.png";
import upper_img from "./Assets/circuit_diagram2_upper.png";
import lower_img from "./Assets/circuit_diagram2_lower.png";
import "./LoadingEffect.css";

const LoadingEffect = () => {
    const [length, setLength] = useState(0.5);
    const [material, setMaterial] = useState("Aluminium");
    const [vmetertype, setvmetertype] = useState("ideal");
    const [height, setHeight] = useState(81);
    const [resistance, setResistance] = useState(23);
    const [userinputresistance, setuserinputResistance] = useState(0);
    const [idealVoltages, setIdealVoltages] = useState([]);
    const [realVoltages, setRealVoltages] = useState([]);
    const chartRef = useRef(null);

    const heightSelect = (e) => {
        setLength(e.target.value);
        setHeight(length * 588.85 + 41);
    };

    const materialChange = (e) => {
        setMaterial(e.target.value);
        if (material === "Al") setResistance(26.5 * 0.001);
        else if (material === "Bronge") setResistance(17.2 * 0.001);
        else if (material === "Cu") setResistance(23 * 0.001);
    };

    const checkResistance = () => {
        let calculatedValue = 0;
        if (vmetertype === "ideal") {
            calculatedValue = (10 / (5 + resistance)) * resistance * length;
        } else {
            const temp = resistance * length;
            calculatedValue = (10 * temp) / (5 + (1 - length) * resistance + ((400 * temp) / (400 + temp)));
        }
        calculatedValue = parseFloat(calculatedValue.toFixed(5));
        console.log("Calculated value:", calculatedValue);
        console.log("User input value:", userinputresistance);
        console.log(vmetertype);

        // Define a tolerance for comparison
        const tolerance = 0.01; // You can adjust this value as needed

        // Check if the absolute difference between the values is within the tolerance
        if (Math.abs(calculatedValue - userinputresistance) <= tolerance) {
            alert("Voltage entered is correct");
            if (vmetertype === "ideal") {
                setIdealVoltages([...idealVoltages, calculatedValue]); // Save ideal voltage
            } else {
                setRealVoltages([...realVoltages, calculatedValue]); // Save real voltage
            }
        } else {
            alert("Entered value is not correct");
        }
    };



    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                // Clear previous chart instance if it exists
                if (window.myChart) {
                    window.myChart.destroy();
                }
                // Draw the new chart
                window.myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: Array.from({ length: idealVoltages.length }, (_, i) => i + 1), // X-axis labels
                        datasets: [
                            {
                                label: 'Ideal Voltmeter',
                                data: idealVoltages,
                                borderColor: 'blue',
                                fill: false,
                            },
                            {
                                label: 'Real Voltmeter',
                                data: realVoltages,
                                borderColor: 'red',
                                fill: false,
                            },
                        ],
                    },
                    options: {
                        scales: {
                            x: {
                                title: {
                                    display: true,
                                    text: 'Length',
                                },
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: 'Voltage',
                                },
                            },
                        },
                    },
                });
            }
        }
    }, [idealVoltages, realVoltages]);

    return (
        <div className='main-loading'>
            <div className="upper">
                <div className="diagram">
                    <img src={Circuit_diagram} alt="" className="left_img" />
                    <div className="right_img">
                        <img src={upper_img} alt="" className="upr_img" style={{ height: `${height}px` }} />
                        <img src={lower_img} alt="" className="lwr_img" />
                    </div>
                </div>
                <div className="right_rtd_L1">
                    <div className="control-panel input-form">
                        <h2>Control Panel</h2>
                        <div className="control-panel-boxes"><label htmlFor="material">Select Material: </label>
                            <select name="material" id="material" value={material} onChange={materialChange}>
                                <option value="Al">Aluminium</option>
                                <option value="Bronge">Bronge</option>
                                <option value="Cu">Copper</option>
                            </select></div>
                        <div className="control-panel-box-span">
                            <p>Resistance per unit length : {resistance} Ω/m</p>
                            <p>(considering the cross-section area as 1mmsq.)</p>
                        </div>
                        <div className="control-panel-boxes">
                            <label htmlFor="material">Type of Voltmeter: </label>
                            <select name="vmetertype" id="vmetertype" value={vmetertype} onChange={(e) => setvmetertype(e.target.value)}>
                                <option value="ideal">Ideal</option>
                                <option value="real">Real</option>
                            </select>
                        </div>
                        <br />
                        <div className="control-panel-boxes">
                            <label htmlFor="length">Length of resistive wire: </label>
                            <input className="range-length" type="range" min={0} max={1} step={0.01} value={length} id="length" onChange={heightSelect} />

                        </div>
                        <div className="control-panel-box-span">
                            <p>Length of resistance: {length}m</p>
                        </div>
                        <div className="formula-final-resistance">
                            <label htmlFor="userVoltage">Enter the voltage value read by the voltmeter and click the check button</label><br />
                            <p>Consider the value of voltmeter resistance as 100kΩ</p>
                        </div>
                        <div className="control-panel-boxes">
                            <label htmlFor="userVoltage">Final Voltage</label>
                            <input name="userVoltage" type="number" value={userinputresistance} onChange={(e) => setuserinputResistance(e.target.value)} />

                        </div>
                        <div className="control-panel-boxes control-panel-btn-box">
                            <button className='check-button' onClick={checkResistance}>Check Voltage</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chart-container">
                <h2>Voltage v/s length</h2>
                <canvas ref={chartRef}></canvas>
            </div>
        </div>
    );
};

export default LoadingEffect;
