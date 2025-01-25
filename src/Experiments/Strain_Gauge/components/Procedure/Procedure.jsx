import React from 'react'
import "./Procedure.css"

export default function Procedure() {
    return (
        <div className="theory1">
            <h1>Strain Gauge Experiment Report</h1>

            <div className='theory1-box'>
                <h3>Equipment and Materials:</h3>
                <ul>
                    <li>Strain gauge</li>
                    <li>Strain gauge adhesive</li>
                    <li>Wheatstone bridge circuit</li>
                    <li>Signal conditioning amplifier</li>
                    <li>Data acquisition system (DAQ)</li>
                    <li>Test specimen or structure</li>
                    <li>Excitation source (constant current or voltage)</li>
                    <li>Connecting cables and accessories</li>
                </ul>
            </div>

            <div className='theory1-box'>
                <h3>Procedure:</h3>
                <ul>
                    <li>
                        <h3>Strain Gauge Installation:</h3>
                        <ul>
                            <li>Mount the strain gauge securely on the test specimen using strain gauge adhesive.</li>
                            <li>Ensure proper alignment and bonding to minimize strain measurement errors.</li>
                            <li>Allow sufficient curing time for the adhesive to set.</li>
                        </ul>
                    </li>

                    <li>
                        <h3>Wheatstone Bridge Setup:</h3>
                        <ul>
                            <li>Construct the Wheatstone bridge circuit with the strain gauge as one of the arms.</li>
                            <li>Connect the bridge circuit to the signal conditioning amplifier.</li>
                            <li>Calibrate the bridge circuit to null out any initial strain or temperature effects.</li>
                        </ul>
                    </li>

                    <li>
                        <h3>Excitation and Measurement:</h3>
                        <ul>
                            <li>Apply the excitation voltage or current to the Wheatstone bridge circuit.</li>
                            <li>Monitor the output voltage from the bridge circuit using the signal conditioning amplifier and data acquisition system.</li>
                            <li>Record the strain gauge output for different loading conditions or applied strains.</li>
                        </ul>
                    </li>

                    {/* Add more steps as necessary */}
                </ul>
            </div>

            {/* Add more sections for remaining steps */}
        </div>
    )
}
