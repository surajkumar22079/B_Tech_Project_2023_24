import React from 'react'
import "./Theory.css";
import img1 from "../../Images/img1.jpg"
import img2 from "../../Images/img2.jpg"
import img3 from "../../Images/img3.jpg"
import img4 from "../../Images/img4.jpg"
import img7 from "../../Images/img7.jpg"
import img8 from "../../Images/img8.jpg"
const Theory = () => {
    return (
        <div className='theory'>
            {/* <h1>Theory</h1> */}
            <h2>Piezometer:</h2>
            <img src={img8} alt="" className='main-img'/>
            <p>A piezometer is a simple device used to measure fluid pressure at a specific point in a pipe or vessel. It consists of a vertical tube inserted into the fluid whose pressure is to be measured. The height of the fluid column in the piezometer directly corresponds to the pressure exerted by the fluid. The pressure at the point of measurement can be calculated using the hydrostatic pressure formula:</p>
            <p>P = ρgh</p>
            <ul>
                <li>P is the pressure</li>
                <li>ρ is the fluid density</li>
                <li>g is the acceleration due to gravity</li>
                <li>h is the height of the fluid column</li>
            </ul>

            <p>A piezometer consists of a vertical tube open to atmospheric pressure at one end. A force balance determines the height of the fluid:</p>
            <img src={img1} alt="" className='formula'/>
            <ul>
                <li>Pf is the absolute pressure</li>
                <li>Patm is atmospheric pressure (101.3 kPa)</li>
                <li>γf is specific weight of the fluid,</li>
                <li>h is height of fluid in the piezometer. Specific weight is</li>
            </ul>
            <img src={img2} alt="" className='formula'/>
            <p>where ρf
                is fluid density and
                is g the gravitational constant, 9.81 m/s2.</p>
            <p>
                Unlike the piezometer, a U-tube manometer has two components: the fluid being measured and the manometer fluid, which is typically a dense, non-volatile liquid like mercury. A U-tube manometer can measure the pressure of a gas or a liquid, whereas a piezometer can only measure liquid pressure, because gas would escape the manometer. For a U-tube manometer:
            </p>
            <img src={img3} alt="" className='formula'/>
            <p>
                where γm
                is the specific gravity of the manometer fluid. Gauge pressure is:
            </p>
            <img src={img4} alt="" className='formula'/>

            <h2>U-tube Manometer:</h2>
            <img src={img7} alt="" className='main-img'/>
            <p>A U-tube manometer is another device used to measure fluid pressure. It consists of a U-shaped tube filled with a fluid, usually mercury or water, and one end is connected to the fluid whose pressure is to be measured. The height difference between the fluid levels in the two arms of the U-tube provides a measure of the pressure difference between the two points. The pressure difference can be calculated using the equation:</p>
            <p>ΔP = ρgΔh</p>
            <ul>
                <li>ΔP is the pressure difference</li>
                <li>ρ is the density of the fluid in the U-tube</li>
                <li>g is the acceleration due to gravity</li>
                <li>Δh is the difference in height between the two fluid levels in the U-tube</li>
            </ul>
        </div>
    )
}

export default Theory
