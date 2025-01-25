import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js library 
import "./MainTh.css";
import Circuit_diagram from "./Assets/circuit_diagram.png"
import thermistor_graph from "./Assets/thermistor_graph.jpg"

const LoadingEffect = () => {
    const [typeofthermistor, setthermistortype] = useState("ntc");
    const [deltaT, setdeltaT] = useState("0");
    const [Vout, setVout] = useState(0);
    const [varResistance, setvarResistance] = useState(100);
    const [resistance, setResistance] = useState(10);
    const [Rth, setRth] = useState(0);
    const [alpha, setAlpha] = useState(0.39);
    const [material, setMaterial] = useState("Pt");

    const [vmetertype, setvmetertype] = useState("ideal");
    const [height, setHeight] = useState(81);
    const [userinputresistance, setuserinputResistance] = useState(0);
    const [idealVoltages, setIdealVoltages] = useState([]);
    const [realVoltages, setRealVoltages] = useState([]);
    const chartRef = useRef(null);





    const materialChange = (e) => {
        setMaterial(e.target.value);
        if (e.target.value === "Cu") setAlpha(0.43);
        else if (e.target.value === "Pt") setAlpha(0.39);
        else if (e.target.value === "Ni") setAlpha(0.67);

        let tempRth = resistance * (1 + alpha * deltaT);
        tempRth = tempRth.toFixed(3);
        setRth(tempRth);
        const Rv = varResistance;
        let VoutTemp = (((Rth + Rv) * 100 + (7 * Rth * Rv)) / (10 * Rth * Rv)) * ((50 * Rth - 20 * Rv) / (Rth + Rv + 70));
        setVout(VoutTemp.toFixed(2));
    }


    const heightSelect = (e) => {
        setvarResistance(e.target.value);
        let tempRth = resistance * (1 + alpha * deltaT);
        tempRth = tempRth.toFixed(3);
        setRth(tempRth);
        const Rv = varResistance;
        let VoutTemp = (((Rth + Rv) * 100 + (7 * Rth * Rv)) / (10 * Rth * Rv)) * ((50 * Rth - 20 * Rv) / (Rth + Rv + 70));
        setVout(VoutTemp.toFixed(2));
    };

    const handleTempChange = (e) => {
        setdeltaT(e.target.value);
        let tempRth = resistance * (1 + alpha * deltaT);
        tempRth = tempRth.toFixed(3);
        setRth(tempRth);
        const Rv = varResistance;
        let VoutTemp = (((Rth + Rv) * 100 + (7 * Rth * Rv)) / (10 * Rth * Rv)) * ((50 * Rth - 20 * Rv) / (Rth + Rv + 70));
        setVout(VoutTemp.toFixed(2));
    };

    useEffect(() => {
        // Calculate resistance for different temperature inputs
        const temperatures = Array.from({ length: 100 }, (_, i) => i); // Generate temperature values from 0 to 99
        const idealVoltagesData = [];
        const realVoltagesData = [];
    
        temperatures.forEach(temp => {
            const tempRth = resistance * (1 + alpha * temp);
            const Rv = varResistance;
            const VoutTemp = (((tempRth + Rv) * 100 + (7 * tempRth * Rv)) / (10 * tempRth * Rv)) * ((50 * tempRth - 20 * Rv) / (tempRth + Rv + 70));
            idealVoltagesData.push({ x: temp, y: tempRth });
            realVoltagesData.push({ x: temp, y: VoutTemp });
        });
    
        setIdealVoltages(idealVoltagesData);
        setRealVoltages(realVoltagesData);
    
        // Chart.js initialization
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
                        labels: temperatures, // X-axis labels
                        datasets: [
                            {
                                label: 'Ideal Resistance',
                                data: idealVoltagesData,
                                borderColor: 'blue',
                                fill: false,
                            }, 
                        ],
                    },
                    options: {
                        scales: {
                            x: {
                                title: {
                                    display: true,
                                    text: 'Temperature (°C)',
                                },
                            },
                            y: {
                                title: {
                                    display: true,
                                    text: 'Resistance (Ω)',
                                },
                            },
                        },
                    },
                });
            }
        }
    }, [varResistance, resistance, alpha]);
    

    return (
        <div className='main-loading'>
            <div className="upper">
                <div className="diagram">
                    <img src={Circuit_diagram} alt="" className="left_img" />
                </div>
                <div className="right_rtd_L1">
                    <div className="control-panel">
                        <h2>Control Panel</h2>
                        <div className="control-panel-boxes">
                            <label htmlFor="material">Material: </label>
                            <select name="material" id="material" value={material} onChange={materialChange}>
                                <option value="Pt">Platinum</option>
                                <option value="Ni">Nickel</option>
                                <option value="Cu">Copper</option>
                            </select>
                        </div>
                        <div className="control-panel-box-span"> 
                        <p>Value of α : {alpha}</p>
                        </div>
                        {/* <p>Resistance per unit varResistance : {resistance} ohm/m</p>
                <p>(considering the cross-section area as 1mmsq.)</p> */}
                        {/* <label htmlFor="material">Type of Voltmeter: </label>
                <select name="vmetertype" id="vmetertype" value={vmetertype} onChange={(e) => setvmetertype(e.target.value)}>
                    <option value="ideal">Ideal</option>
                    <option value="real">Real</option>
                </select> */}
                       <div className="control-panel-boxes">
                       <label htmlFor="varResistance">Variable resistance </label>
                        <input type="range" min={10} max={200} step={1} value={varResistance} id="varResistance" onChange={heightSelect} />
                        </div>
                        <div className="control-panel-box-span"><p>Resistance :  {varResistance}Ω</p></div>
                       <div className="control-panel-boxes">
                       <label htmlFor="deltaT">Temperature change</label>
                        <input type="range" min={0} max={20} step={0.05} value={deltaT} id="varResistance" onChange={handleTempChange} />
                        
                       </div>
                       <div className="control-panel-box-span">
                       <p>Temperature difference :  {deltaT}°C</p> 
                       </div>
                        <div className="control-panel-box-span">
                       <p>Value of Rth on basis of above calculated value: {Rth} </p>
                       <p>Value of Vout : {Vout}V</p>
                        </div>
                        {/* <div className="checkresistance">
                    <label htmlFor="userVoltage">Enter the voltage value read by the voltmeter and click the check button</label><br />
                    <p>Consider the value of voltmeter resistance as 100kΩ</p>
                    <input name="userVoltage" type="number" value={userinputresistance} onChange={(e) => setuserinputResistance(e.target.value)} />
                    <button onClick={checkResistance}>Check Voltage</button>
                </div> */}
                    </div>
                </div>
            </div>
            <div className="chart-container">
                <h2>Variation of Thermistor resistance on changing temperature</h2>
                <img src={thermistor_graph} alt=""  className='thermistor-graph'/>
            </div>
        </div>
    );
};

export default LoadingEffect;
