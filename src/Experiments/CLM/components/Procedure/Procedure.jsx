import React from 'react'
import "./Procedure.css"

export default function Procedure() {
    return (
        <div className="theory1">
            <h1>Capacitive Level Measurement Experiment Report</h1>

            <div className='theory1-box'>
                <h3>Equipment and Materials:</h3>
                <ul>
                    <li>Capacitive level sensor</li>
                    <li>Signal conditioning circuitry</li>
                    <li>Data acquisition system (DAQ)</li>
                    <li>Measurement display device (such as a digital voltmeter or data acquisition module)</li>
                    <li>Test setup (including containers or tanks for liquid measurement)</li>
                    <li>Connecting cables and accessories</li>
                </ul>
            </div>

            <div className='theory1-box'>
                <h3>Procedure:</h3>
                <ul>
                    <li>
                        <h3>Setup:</h3>
                        <ul>
                            <li>Mount the capacitive level sensor in the test setup, ensuring proper positioning for accurate measurement.</li>
                            <li>Connect the capacitive level sensor to the signal conditioning circuitry using appropriate cables.</li>
                            <li>Connect the signal conditioning circuitry to the data acquisition system (DAQ).</li>
                            <li>Place the capacitive level sensor in the liquid to be measured.</li>
                            <li>Ensure all connections are secure and properly insulated.</li>
                        </ul>
                    </li>

                    <li>
                        <h3>Calibration:</h3>
                        <ul>
                            <li>Perform calibration of the capacitive level sensor to establish its capacitance-distance relationship.</li>
                            <li>Apply known liquid levels to the sensor and record corresponding output voltages or capacitances.</li>
                            <li>Plot the calibration curve and determine calibration coefficients.</li>
                        </ul>
                    </li>

                    <li>
                        <h3>Measurement:</h3>
                        <ul>
                            <li>Adjust the liquid level within the desired range of operation.</li>
                            <li>Measure the corresponding output voltage or capacitance using the data acquisition system.</li>
                            <li>Record the liquid level readings for analysis.</li>
                        </ul>
                    </li>

                    {/* Add more steps as necessary */}
                </ul>
            </div>

            {/* Add more sections for remaining steps */}
        </div>
    )
}
