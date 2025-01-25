import React from 'react'
import "./Procedure.css"

export default function Procedure() {
    return (
        <div className="theory1">
            <h1>RTD Experiment Report</h1>

            <div className='theory1-box'>
                <h3>Equipment and Materials:</h3>
                <ul>
                    <li>RTD sensor (commonly made of platinum, nickel, or copper)</li>
                    <li>RTD signal conditioning amplifier</li>
                    <li>Data acquisition system (DAQ)</li>
                    <li>RTD excitation source (typically a constant current source)</li>
                    <li>Measurement device (such as a multimeter or data acquisition module)</li>
                    <li>Temperature source or environment (oven, water bath, etc.)</li>
                    <li>Connecting cables and accessories</li>
                </ul>
            </div>

            <div className='theory1-box'>
                <h3>Procedure:</h3>
                <ul>
                    <li>
                        <h3>Setup:</h3>
                        <ul>
                            <li>Mount the RTD sensor securely in the temperature source or environment to be measured.</li>
                            <li>Connect the RTD sensor to the signal conditioning amplifier using appropriate cables.</li>
                            <li>Connect the signal conditioning amplifier to the data acquisition system (DAQ).</li>
                            <li>Connect the RTD excitation source to the RTD sensor.</li>
                        </ul>
                    </li>

                    <li>
                        <h3>Calibration:</h3>
                        <ul>
                            <li>Perform calibration of the RTD sensor to establish its resistance-temperature relationship.</li>
                            <li>Use a precision temperature reference to apply known temperatures to the RTD sensor.</li>
                            <li>Measure the resistance of the RTD sensor at each known temperature.</li>
                            <li>Plot the resistance-temperature curve and determine the calibration coefficients.</li>
                        </ul>
                    </li>

                    {/* Add more steps as necessary */}
                </ul>
            </div>

            {/* Add more sections for remaining steps */}
        </div>
    )
}