import React from 'react'
// import oscilloscope_img from "../../Assets/oscilloscope_img.png"
// import signal_gen from "../../Assets/signal_generator.jpg"
import "./Theory.css"
import img1 from "../Assets/ntc_thermistor.jpg"
import img2 from "../Assets/ptc_thermistor.jpg"
import img3 from "../Assets/thermistor_img.jpg"

const Theory = () => {
    return (
        <div className='theory1'>
            <h2>Introduction</h2>
            <div className="theory1-box">
                <p>A thermistor is a semiconductor that contains greater resistance material than conducting material and a resistor that reacts to temperature. The resistance of a thermistor is dependent on the material from which it is made. Their construction material consists of metallic oxides, binders and stabilizers that are pressed into wafers and cut into chips, with the ratio of composite materials determining their resistance or temperature curve.
                    The term “thermistor” refers to thermally sensitive resistors that are very accurate and effective sensors for measuring temperature. The two forms of thermistors are Positive Temperature Coefficient (PTC thermistors) and Negative Temperature Coefficient (NTC thermistors), where a NTC thermistor’s resistance decreases as the temperature rises and a PTC thermistor’s resistance increases as the temperature increases.
                    Thermistors are a passive component whose resistance changes as the temperature in a system changes. They serve as an inexpensive, accurate, and dynamic method for measuring temperature.</p>
                <img src={img3} alt="" />
                <p className="caption"><em>Fig1:</em></p>
            </div>
            <div className="theory1-box">
                <h3>How Thermistors are Used</h3>
                <p>The precise monitoring of temperature is a crucial aspect of many manufacturing processes. The precision and accuracy of temperature control can determine the success or failure of an application. The primary role of a thermistor’s thermally sensitive resistor is to show significant, predictable, and accurate change in electrical resistance in response to temperature.

                    Wherever and whenever temperature needs to be measured, whether it is in industrial applications or home cooking, a thermistor is used to determine, control, and monitor the temperature. A common use for thermistors is as a part of an HVAC system, which are responsible for thermal support and air flow.

                    The working temperature for thermistors is between 32 °F and 212 °F (0 °C to 100 °C), with Class A thermistors offering the greatest accuracy while Class B thermistors are used where exact measurements are not required. Thermistors are a highly stable instrument that do not lose accuracy over time. </p>
            </div>
            <h2>Types of Thermistors</h2>
            <div className="theory1-box">
                <h3>Negative Temperature Coefficient (NTC) Thermistors</h3>
                <img src={img1} alt="" />
                <p className="caption"><em>Fig2:</em></p>
                <p>With NTC thermistors, resistance decreases as the temperature increases. NTC thermistors are made of semiconductor material with conductivity between electrical and non-electrical conductors. When a component heats up, electrons are loosened from the lattice atoms. They leave and transport electricity easily. As the temperature increases, a thermistor moves electricity quickly and efficiently.
                    The behavior of a NTC thermistor varies depending on its components. Producers change the mixing ratio of oxides or doping metals to meet the desired requirements. Another factor in the manufacturing process is the oxygen content in the firing and the variations in the cooling rate.</p>
                {/* <img src={oscilloscope_img} alt="" /> */}

                </div>
                <div className="theory1-box">
                    <h3>Positive Temperature Coefficient (PTC) Thermistors</h3>
                    <img src={img2} alt="" />
                    <p className="caption"><em>Fig3:</em></p>
                    <p>PTC thermistors work in the opposite direction from NTC thermistors. As the temperature increases, the resistance in the thermistor increases. There are two types of PTC thermistors, with one showing linear increase while the other shows sudden changes in resistance. The two types are known as switching and silistor.
                        Switching PTC thermistors are non-linear. The resistance initially falls a little with an increase in temperature. Once it reaches a certain level, the resistance increases rapidly, which makes it ideal for protective use.
                        Silistor PTC thermistors have a semiconductor as their base material and are linear. PTC thermistors are typically found in a variety of temperature-sensing equipment. They are made from doped silicon; the level of doping determines their characteristics.</p>
                    {/* <img src={signal_gen} alt="" /> */}


                </div>
            </div>
            )
}

            export default Theory
