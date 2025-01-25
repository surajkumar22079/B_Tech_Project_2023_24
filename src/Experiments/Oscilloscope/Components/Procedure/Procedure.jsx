import React from 'react'
import "./Procedure.css"

export default function Procedure() {
    return (
        <div className="theory1">
            <h1>Oscilloscope Experiment Report</h1>

            <div className='theory1-box'>
                <h3>Equipment and Materials:</h3>
                <ul>
                    <li>Oscilloscope</li>
                    <li>Signal generator</li>
                    <li>Probe(s)</li>
                    <li>Connecting cables</li>
                    <li>Test circuit or signal source</li>
                    <li>Power supply (if necessary)</li>
                </ul>
            </div>

            <div className='theory1-box'>
                <h3>Procedure:</h3>
                <ul>
                    <li>
                        <h3>Setup:</h3>
                        <ul>
                            <li>Connect the signal generator to the input of the oscilloscope.</li>
                            <li>Connect the probe(s) to the appropriate channel(s) of the oscilloscope.</li>
                            <li>Ensure all connections are secure and properly insulated.</li>
                            <li>Power on the oscilloscope and signal generator.</li>
                        </ul>
                    </li>

                    <li>
                        <h3>Signal Display:</h3>
                        <ul>
                            <li>Adjust the settings on the oscilloscope to display the desired signal parameters (e.g., amplitude, frequency).</li>
                            <li>Trigger the oscilloscope to stabilize the waveform display.</li>
                            <li>Observe and analyze the displayed waveform(s).</li>
                        </ul>
                    </li>

                    <li>
                        <h3>Measurement:</h3>
                        <ul>
                            <li>Use the cursors or measurement tools on the oscilloscope to measure signal parameters (e.g., peak-to-peak voltage, frequency).</li>
                            <li>Record the measured values for analysis.</li>
                        </ul>
                    </li>

                    {/* Add more steps as necessary */}
                </ul>
            </div>

            {/* Add more sections for remaining steps */}
        </div>
    )
}
