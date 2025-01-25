import React from 'react'
import "./Procedure.css"

export default function Procedure() {
    return (
        <div className="theory1">
            <h1>Thermistor Experiment Report</h1>

            <div className='theory1-box'>
                <h3>Equipment and Materials:</h3>
                <ul>
                    <li>Thermistor</li>
                    <li>Signal conditioning circuit</li>
                    <li>Data acquisition system (DAQ)</li>
                    <li>Precision temperature reference (calibrated thermometer or temperature bath)</li>
                    <li>Excitation source (voltage or current source)</li>
                    <li>Connecting cables and accessories</li>
                </ul>
            </div>

            <div className='theory1-box'>
                <h3>Procedure:</h3>
                <ul>
                    <li>
                        <h3>Thermistor Setup:</h3>
                        <ul>
                            <li>Mount the thermistor securely in the temperature-controlled environment.</li>
                            <li>Connect the thermistor to the signal conditioning circuit.</li>
                            <li>Connect the signal conditioning circuit to the data acquisition system (DAQ).</li>
                            <li>Apply excitation voltage or current to the thermistor using the excitation source.</li>
                        </ul>
                    </li>

                    <li>
                        <h3>Calibration:</h3>
                        <ul>
                            <li>Calibrate the thermistor using a precision temperature reference.</li>
                            <li>Measure the resistance of the thermistor at known temperatures.</li>
                            <li>Establish the resistance-temperature relationship for the thermistor.</li>
                        </ul>
                    </li>

                    <li>
                        <h3>Measurement:</h3>
                        <ul>
                            <li>Set up the data acquisition system (DAQ) to acquire thermistor resistance measurements.</li>
                            <li>Adjust the temperature of the environment to desired levels.</li>
                            <li>Measure the resistance of the thermistor at each temperature using the data acquisition system.</li>
                        </ul>
                    </li>

                    {/* Add more steps as necessary */}
                </ul>
            </div>

            {/* Add more sections for remaining steps */}
        </div>
    )
}
