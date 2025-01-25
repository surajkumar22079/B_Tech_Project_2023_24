import React from 'react';
import img1 from "..//Assets/img_potentiometer1.png"
import img2 from "..//Assets/img_potentiometer.png"
import "./Theory.css";

const PotentiometerInfo = () => {
    return (
        <div className='theory'>
            <h2>Potentiometer and Loading effect on Potentiometer</h2>
            {/* <h3>Sensors and Transducers</h3> */}
            <div className="theory1-box">
                <h3>Potentiometer</h3>
                <p>
                    A potentiometer is a device where a resistive wire is wound on an insulating core provided with a sliding contact. It can be excited with a DC or AC voltage source. The slider movement can be translational (straight), rotational, or a combination of both.
                
                    Schematic diagram of a resistive potentiometer is shown in figure.
                </p>
                <img src={img1} alt="Potentiometer Diagram" />
                <p className="caption"><em>Fig1:</em></p>
                <p>
                    Here, Xt is the total length between two endpoints and the resistance between these two endpoints is always constant. The resistance between the sliding point and endpoint will change with respect to the input displacement X0.
                <br />
                    If V is the excitation voltage, then the output voltage V0 can be expressed as
                <br /><br />
                    V<sub>0</sub> = (X<sub>0</sub> / X<sub>t</sub>) * V
                </p>
                <p>
                    If the total resistance is Rt and the resistance between the sliding point and the endpoint is R0, then by the voltage dividing rule V0 can be expressed as
               <br />
                    V<sub>0</sub> = (R<sub>0</sub> / R<sub>t</sub>) * V
                </p>
                <p>
                    It is clear that the output voltage in the potentiometer is proportional to the displacement.
                </p>
            </div>
            <br />
            <div className="theory1-box">
                <h3>Loading effect on Potentiometer</h3>
                <p>
                    The output of a potentiometer is generally connected to an amplifier or a meter (measuring device). The input impedance of this connected device acts as a load of the potentiometer and it will affect the current between the sliding contact and the end terminal. This situation is called the loading effect on a potentiometer.
                </p>
                <img src={img2} alt="Loading Effect Diagram" />
                <p className="caption"><em>Fig2:</em></p>
                <p>
                    If the input resistance of the connected meter is Rm, and the resistance between the sliding point and the endpoint is R0, then the total effective resistance is given by
                    <br />
                    R<sub>e</sub> = (R<sub>0</sub> * R<sub>m</sub>) / (R<sub>0</sub> + R<sub>m</sub>)
                </p>
                <p>
                    The effective voltage after connecting the load is
                <br />
                    V<sub>e</sub> = (R<sub>e</sub> * V) / ((R<sub>t</sub> - R<sub>0</sub>) + R<sub>e</sub>)
                </p>
                <p>
                    The error occurred by connecting the load is
                <br />
                    E = (V<sub>e</sub> - V<sub>0</sub>) / V<sub>0</sub>
                </p>
            </div>
        </div>
    );
};

export default PotentiometerInfo;
