import React, { useState, useEffect } from 'react';
import './Piezometer.css';

const Piezometer = ({ selectedButtonliquid, sliderValue }) => {

    let height = (((sliderValue - 101.3) / 1.314) * 44) + 48; // Parse sliderValue as a number
    let height_real = ((sliderValue - 101.3) / (9.8 * 997)) * 100000; // Parse sliderValue as a number
    height_real = height_real.toFixed(2);

    if (selectedButtonliquid === "button2") {
        height = (((sliderValue - 101.3) / 1.314) * 44) + 48;
        height_real = ((sliderValue - 101.3) / (9.8 * 700)) * 100000; // Parse sliderValue as a number
        height_real = height_real.toFixed(2);

    };
    if (selectedButtonliquid === "button3") {
        height = (((sliderValue - 101.3) / 1.314) * 3.09) + 67;
        height_real = ((sliderValue - 101.3) / (9.8 * 13545)) * 100000; // Parse sliderValue as a number
        height_real = height_real.toFixed(2);

    };

    const [color, setColor] = useState("#d4d4d4");

    useEffect(() => {
        if (selectedButtonliquid === "button1") {
            setColor("blue");
        } else if (selectedButtonliquid === "button2") {
            setColor("yellow");
        } else if (selectedButtonliquid === "button3") {
            setColor("#d4d4d4");
        }
    }, [selectedButtonliquid]);

    // Function to calculate absolute pressure based on the change in height
    const calculateAbsolutePressure = (changeInHeight, density) => {
        return (parseFloat(changeInHeight) * density).toFixed(2);
    };

    // Generate data points for the observation table
    const generateObservationData = () => {
        const observationData = [];
        const densities = {
            button1: 997,
            button2: 700,
            button3: 13545
        };

        for (let i = 0; i <= 12; i++) {
            const changeInHeight = i * 5; // Increment height by 5 cm
            const absolutePressure = calculateAbsolutePressure(changeInHeight, densities[selectedButtonliquid]);
            observationData.push({ changeInHeight: `${changeInHeight} cm`, absolutePressure: `${absolutePressure} kPa` });
        }

        return observationData;
    };

    // Table data for observation
    const observationData = generateObservationData();

    return (
        <div>
            <p className='heading-piezo'>Piezometer filled with {selectedButtonliquid === "button1" ? "Water" : null}{selectedButtonliquid === "button2" ? "Oil" : null}{selectedButtonliquid === "button3" ? "Mercury" : null}</p>
            <div className='piezo-box'>
                <div className="container-Piezometer">
                    <div className="Vertical-cylender"></div>
                    <div className="Horizontal-cylinder"></div>
                    <div className='abc'><div className="liquid-Vertical" style={{ backgroundColor: color, height: height + 'px' }}></div> </div>
                    <div className="liquid-Horizontal" style={{ backgroundColor: color }}></div>
                </div>
                <div className="piezo-details">
                    <p>Change in height: {height_real} cm</p>
                    <p>Density of {selectedButtonliquid === "button1" ? "Water: 997 Kg/m^3" : null}{selectedButtonliquid === "button2" ? "Oil: 700 Kg/m^3" : null}{selectedButtonliquid === "button3" ? "Mercury: 13545.8 Kg/m^3" : null}</p>
                </div>
            </div>
            <div className="observation-table1">
                <h2>Observation Table</h2>
                <table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
                    <thead>
                        <tr>
                            <th style={{ border: '1px solid black' }}>Change in Height</th>
                            <th style={{ border: '1px solid black' }}>Absolute Pressure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {observationData.map((data, index) => (
                            <tr key={index}>
                                <td style={{ border: '1px solid black' }}>{data.changeInHeight}</td>
                                <td style={{ border: '1px solid black' }}>{data.absolutePressure}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default Piezometer;
