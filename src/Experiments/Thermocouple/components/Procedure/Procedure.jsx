import React from 'react'
import "./Procedure.css"

export default function Procedure() {
    return (
        <div className="theory1">
            <h1>Thermocouple Experiment Report</h1>

            <div className='theory1-box'>
                <h3>Equipment and Materials:</h3>
                <ul>
                    <li>Thermocouple</li>
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
                        <h3>Thermocouple Setup:</h3>
                        <ul>
                            <li>Mount the thermocouple securely in the temperature-controlled environment.</li>
                            <li>Connect the thermocouple to the signal conditioning circuit.</li>
                            <li>Connect the signal conditioning circuit to the data acquisition system (DAQ).</li>
                            <li>Apply excitation voltage or current to the thermocouple using the excitation source.</li>
                        </ul>
                    </li>

                    <li>
                        <h3>Calibration:</h3>
                        <ul>
                            <li>Calibrate the thermocouple using a precision temperature reference.</li>
                            <li>Measure the voltage output of the thermocouple at known temperatures.</li>
                            <li>Establish the voltage-temperature relationship for the thermocouple.</li>
                        </ul>
                    </li>

                    <li>
                        <h3>Measurement:</h3>
                        <ul>
                            <li>Set up the data acquisition system (DAQ) to acquire thermocouple voltage measurements.</li>
                            <li>Adjust the temperature of the environment to desired levels.</li>
                            <li>Measure the voltage output of the thermocouple at each temperature using the data acquisition system.</li>
                        </ul>
                    </li>

                    {/* Add more steps as necessary */}
                </ul>
            </div>

            {/* Add more sections for remaining steps */}
        </div>
    )
}
