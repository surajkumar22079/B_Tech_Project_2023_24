import React from 'react'
import "./Procedure.css"

export default function Procedure() {
    return (
        <div className="theory1">
            <h1>LVDT Experiment Report</h1>

            <div className='theory1-box'>
                <h3>Equipment and Materials:</h3>
                <ul>
                    <li>LVDT (Linear Variable Differential Transformer)</li>
                    <li>Signal conditioning amplifier</li>
                    <li>Data acquisition system (DAQ)</li>
                    <li>Excitation source (typically a sine wave generator)</li>
                    <li>Measurement device (such as an oscilloscope or data acquisition module)</li>
                    <li>Test setup (including fixtures and connections)</li>
                    <li>Connecting cables and accessories</li>
                </ul>
            </div>

            <div className='theory1-box'>
                <h3>Procedure:</h3>
                <ul>
                    <li>
                        <h3>Setup:</h3>
                        <ul>
                            <li>Mount the LVDT securely in the test setup, ensuring proper alignment.</li>
                            <li>Connect the LVDT to the signal conditioning amplifier using appropriate cables.</li>
                            <li>Connect the signal conditioning amplifier to the data acquisition system (DAQ).</li>
                            <li>Connect the excitation source to the LVDT primary winding.</li>
                            <li>Ensure all connections are secure and properly insulated.</li>
                        </ul>
                    </li>

                    <li>
                        <h3>Calibration:</h3>
                        <ul>
                            <li>Perform calibration of the LVDT to establish its output characteristics.</li>
                            <li>Apply known displacements to the LVDT and record corresponding output voltages.</li>
                            <li>Plot the input-output curve and determine calibration coefficients.</li>
                        </ul>
                    </li>

                    <li>
                        <h3>Measurement:</h3>
                        <ul>
                            <li>Apply varying displacements to the LVDT within the desired range of operation.</li>
                            <li>Measure the corresponding output voltages using the data acquisition system.</li>
                            <li>Record the input-output relationship for analysis.</li>
                        </ul>
                    </li>

                    {/* Add more steps as necessary */}
                </ul>
            </div>

            {/* Add more sections for remaining steps */}
        </div>
    )
}
