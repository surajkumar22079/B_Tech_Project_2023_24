import React from 'react'
import "./Procedure.css"
import img5 from  "../../../Images/img5.jpg"
import  img6 from "../../../Images/img6.jpg"

const Procedure = () => {
  return (
    <div className='procedure'>
     
    <h1>Procedure</h1>
    <h2>Piezometer Measurement:</h2>
    <ol>
        <li>Select a suitable location to insert the piezometer into the fluid.</li>
        <li>Insert the piezometer vertically into the fluid until it is fully submerged.</li>
        <li>Ensure that there is no air trapped inside the piezometer.</li>
        <li>Measure and record the height of the fluid column above the reference point.</li>
        <li>Calculate the pressure using the hydrostatic pressure formula.</li>
    </ol>
    <img src={img6} alt="" />

    <h2>U-tube Manometer Measurement:</h2>
    <ol>
        <li>Connect one end of the U-tube manometer to the point where the pressure is to be measured.</li>
        <li>Ensure that both arms of the U-tube are filled with the measuring fluid and there are no air bubbles.</li>
        <li>Measure and record the difference in height between the fluid levels in the two arms of the U-tube.</li>
        <li>Calculate the pressure difference using the equation for pressure difference in a U-tube manometer.</li>
    </ol>
   <img src={img5} alt="" />

    <h2>Analysis:</h2>
    <ol>
        <li>Compare the pressure measurements obtained from both the piezometer and the U-tube manometer.</li>
        <li>Analyze the accuracy and reliability of the measurements.</li>
        <li>Consider factors such as fluid density, gravitational acceleration, and instrument calibration.</li>
        <li>Draw conclusions based on the experimental results.</li>
    </ol> 
    </div>
  )
}

export default Procedure
