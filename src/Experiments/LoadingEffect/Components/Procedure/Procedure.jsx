import React from 'react'
import "./Procedure.css"

export default function Procedure() {
    return (
        <div className="theory1">
            <h1>Potentiometer Loading Effect Experiment Report</h1>

            <div className='theory1-box'>
                <h3>Equipment and Materials:</h3>
                <ul>
                    <li>Potentiometer (variable resistor)</li>
                    <li>Power supply</li>
                    <li>Load resistor(s)</li>
                    <li>Voltage measurement device (such as a voltmeter)</li>
                    <li>Connecting wires and accessories</li>
                </ul>
            </div>

            <div className='theory1-box'>
                <h3>Procedure:</h3>
                <ul>
                    <li>
                        <h3>Setup:</h3>
                        <ul>
                            <li>Connect the potentiometer to the power supply and load resistor(s) in series.</li>
                            <li>Ensure the circuit connections are secure and properly insulated.</li>
                            <li>Connect the voltage measurement device across the load resistor(s).</li>
                            <li>Adjust the potentiometer to a desired resistance value.</li>
                        </ul>
                    </li>

                    <li>
                        <h3>Measurement:</h3>
                        <ul>
                            <li>Measure the voltage across the load resistor(s) with the potentiometer at the desired resistance value.</li>
                            <li>Record the voltage reading as the unloaded voltage.</li>
                            <li>Gradually change the resistance of the potentiometer.</li>
                            <li>Observe and record any changes in voltage across the load resistor(s).</li>
                        </ul>
                    </li>

                    <li>
                        <h3>Analysis:</h3>
                        <ul>
                            <li>Analyze the relationship between potentiometer resistance and voltage across the load resistor(s).</li>
                            <li>Determine the effect of changing potentiometer resistance on the voltage output.</li>
                            <li>Calculate the loading effect by comparing the loaded and unloaded voltage readings.</li>
                        </ul>
                    </li>

                    {/* Add more steps as necessary */}
                </ul>
            </div>

            {/* Add more sections for remaining steps */}
        </div>
    )
}
