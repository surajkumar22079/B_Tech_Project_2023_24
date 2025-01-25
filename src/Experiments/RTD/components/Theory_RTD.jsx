import React from 'react'
import img1 from "../Images/img1.jpg"
import img2 from "../Images/img2.jpg"
import img3 from "../Images/img3.jpg"
import "./Theory.css";

const Theory_RTD = () => {
    return (
        <div className='theory-rtd'>
            <h1>Introduction</h1>
            <p>An RTD (Resistance Temperature Detector) is a sensor whose resistance changes as its temperature changes. The resistance increases as the temperature of the sensor increases. The resistance vs temperature relationship is well known and is repeatable over time. An RTD is a passive device.</p>
            <h1>Prerequisite:</h1> 
            <h3>Before Performing the Practical on RTD, One Must Be Well Versed With:</h3>
            <ul>
                <li>Various units of temperature measurement and conversion of one unit to another.</li>
                <li>Knowledge of various methods of temperature measurement.</li>
                <li>Meaning of terms like process lag, positive and negative temperature coefficient, negative temperature, virtual temperature, etc.</li>
                <li>Knowledge of active and passive transducers.</li>
                <li>Importance of temperature measurement.</li>
            </ul>

            <h1>Temperature:</h1>

            <p>
                Temperature is a measure of the average heat or thermal energy of the particles in a substance. Since it is an average measurement, it does not depend on the number of particles in an object. In that sense it does not depend on the size of it. For example, the temperature of a small cup of boiling water is the same as the temperature of a large pot of boiling water. Even if the large pot is much bigger than the cup and has millions and millions more water molecules. The basic unit of temperature (T) in the International System of Units (SI) is the Kelvin (K). The commonly used other units of temperature are Degree Celsius (°C) and Degree Fahrenheit (°F).
            </p>

            <h1>Electrical Resistance:</h1>
            <p>
                The electrical resistance of an object is a measure of its opposition to the flow of an electric current. For a wide range of materials and conditions, the electrical resistance does not depend on the amount of current through or the potential difference (voltage) across the object. That means the resistance R is constants for the given temperature and material. Therefore, the resistance of an object can be defined as the ratio of voltage to current, in accordance with
            </p>
            <h2>
                Ohm Law  V=IR
            </h2>
            <p>
                The unit of resistance is ohm (Ω)
            </p>
            <h1>Working Principle</h1>
            <p>The working principle of an RTD (Resistance Temperature Detector) is based on the fact that the electrical resistance of certain metals changes predictably with temperature. Here's how it works:

Temperature Sensitivity: RTDs are typically made of materials with a predictable and linear change in resistance with temperature, such as platinum (Pt), nickel (Ni), or copper (Cu). Among these, platinum is the most common due to its stable and repeatable characteristics over a wide temperature range.
Resistance Variation: As the temperature of the RTD sensing element changes, its electrical resistance changes accordingly. For example, as the temperature increases, the resistance of the RTD typically increases as well. This change in resistance follows a known and repeatable relationship with temperature.
Wheatstone Bridge Circuit: To measure the resistance of the RTD accurately, it's often connected in a Wheatstone bridge circuit along with precision resistors. The Wheatstone bridge configuration allows for highly accurate measurement of small changes in resistance.
Excitation Current: A constant current is passed through the RTD element, causing a voltage drop across it proportional to its resistance. This voltage drop is measured and used to determine the resistance of the RTD, which in turn correlates to the temperature.
Temperature Calculation: Using the known resistance-temperature relationship of the RTD material (often specified by manufacturers), the measured resistance can be converted into temperature using calibration tables or mathematical formulas. Modern RTDs often come with pre-calibrated conversion tables or built-in circuitry to directly output temperature readings.
Signal Processing: In some applications, signal conditioning and processing may be employed to filter noise, linearize the response, and compensate for any non-linearities in the RTD's characteristics.</p>
                <h1>Application</h1>
                <ul>
                <li>Industrial Process Control: RTDs are extensively used in industrial processes to measure and control temperatures in systems such as chemical reactors, furnaces, boilers, and distillation columns. Their accuracy and stability make them essential for maintaining precise temperature control, ensuring product quality, and enhancing process efficiency.</li>
<li>HVAC (Heating, Ventilation, and Air Conditioning): RTDs are used in HVAC systems for temperature sensing and control in heating and cooling systems, air handling units, chillers, and refrigeration equipment. They help maintain comfortable indoor temperatures, optimize energy efficiency, and ensure proper operation of HVAC equipment.</li>
<li>Automotive: RTDs are employed in automotive applications for monitoring engine temperature, coolant temperature, exhaust gas temperature, and cabin temperature. They play a critical role in engine management systems, climate control systems, and safety systems, helping to prevent overheating and ensure optimal engine performance.</li>
<li>Medical Devices: RTDs are used in medical equipment such as incubators, sterilizers, blood analyzers, and laboratory equipment for precise temperature measurement and control. They help maintain stable and controlled temperature environments necessary for various medical and diagnostic procedures.</li>
<li>Aerospace and Defense: RTDs are utilized in aerospace and defense applications for temperature monitoring and control in aircraft engines, avionics systems, missile guidance systems, and satellite payloads. Their accuracy and reliability are essential for ensuring safe and reliable operation in harsh environments.</li>
            </ul>
            <h1>Temperature Measurement Using RTD</h1>
            <p>
                For measurement of Temperature number of sensors are available. One of the most linear, stable, and reproducible temperature sensors is the RTD, Resistance Temperature Detector. In RTD, the output resistance changes with temperature. RTD is a positive temperature coefficient device. The resistance of the metal increases with temperature. The resistive property of the metal is called its resistivity. The resistive property defines length and cross sectional area required to fabricate an RTD of a given value. The resistance is proportional to length and inversely proportional to the cross sectional area and is given by the relationship
            </p>
            <h2>R = ρl/A</h2>
            <p>
                Where 'R' is resistance of the metal, 'ρ' is the resistivity of the metal, 'l' is the length of the metal and 'A' is the area of cross section of the metal.
            </p>
            <img src={img1} alt="" className='figures'/>
            <p className='caption'><em>fig1. RTD</em></p>
            <p>
                Resistance Temperature Detector (RTD), as the name implies, is a sensor used to measure temperature by correlating the resistance with temperature. Most RTD elements consist of a length of fine coiled wire wrapped around a ceramic or glass core. The element is usually quite fragile, so it is often placed inside a sheathed probe to protect it. The RTD element is made from a pure metals as mentioned below. The material property to have predictable change in resistance as the temperature changes, is used to determine temperature.

                <h3>Commonly used RTD Materials:</h3>
                <li>Platinum (most popular and accurate)</li>

                <li>Platinum (most popular and accurate)</li>
                <li>Nickel</li>
                <li>Copper</li>
                <li>Balco (rare)</li>
                <li>Tungsten (rare)</li>
            </p>
            <h1>Temperature calculations:</h1>
            <p>
                RTDs are manufactured from metals whose resistance increases with temperature. Within a limited temperature range, its resistance increases linearly with temperature: Rt = R0[1+ α (t-t0)]

                Where: Rt = resistance at temperature 't'
                R0 = resistance at a reference temperature ( Generally 0 degree C)
                α = temperature coefficient of resistance (°C‾1)

                Setting t0 to 0°C and rearranging to the standard linear y = m*x+b form, it is clear that resistance vs. temperature is linear with a slope equal to
            </p>
            <h2>R / R0 = α*t + 1 </h2>
            <img src={img2} alt="" />
            <p className="caption"><em>Graph1: Resistance vs Temperature</em></p>
            <p>
                Theoretically, any metal can be used to measure temperature. The metal selected should have a high melting point and an ability to withstand the effects of corrosion. Therefore Platinum is selected for most of the applications. Its desirable characteristics include chemical stability, availability in a pure form, and electrical properties that are highly reproducible.

                Solving Equation (1) for α: α = (R100 - R0) /( R0 *(t-t0))
                Where,

                t = 100°C & t0 = 0°C

                For platinum, α = 0.00385 Ω/Ω/°C

                The relationship between resistance and temperature of RTD can be approximated by the Callendar-Van Dusen equation which is given by,
            </p>
            <h2>  Rt / R0 = 1+ α [ t – δ((t/100)-1)(t/100) –β((t/100)-1)(t/100)3]  </h2>
            <p>
                <p>Where,</p>

                <li>t = temperature (°C)</li>
                <li>Rt = Resistance at temperature, t°C</li>
                <li>R0 = Resistance at 0°C</li>
                <li>α = Constant ( 0.00385Ω/Ω/°C )</li>

                <p>δ & β are Linearization coefficients, where β = 0 for t &gt; 0°C

                    The Callendar Van Dusen Equation is used in the standard IEC 751 which is the most popular standard used for RTD. The equation for RTD given in IEC 751 is:</p>
            </p>

            <h2>Rt =R0 [1+ At+ Bt2 +C(t-100)t3 ]   </h2>
            <p>
                <p>Where, A,B,C are constants and C = 0 for t &gt; 0°C.</p>

                <p>The values of A,B and C for α = 0.00385 are</p>
                <li>A = 3.908310-3°C‾1</li>
                <li>B = -5.77510-7°C‾2</li>
                <li>C = -4.183*10-12°C‾4</li>

                <p>Platinum RTDs are defined by standards such as DIN 43760 (BS1904), IEC 751-1983, and JIS C1604.</p>
            </p>

            <h1>RTD Materials</h1>
            <p>The criteria for selecting a material for an RTD include:</p>
            <ul>
                <li>Malleability to form small wires.</li>
                <li>Linear relationship of resistance and temperature.</li>
                <li>Repeatability and stability.</li>
                <li>Corrosion resistance.</li>
                <li>Low cost.</li>
                <li>Easy availability.</li>
            </ul>

            <h1>RTD Performance Specifications</h1>
            <ul>
                <li><strong>Temperature Coefficient:</strong> The change in resistance of the material per degree change in temperature. Higher values provide higher accuracy.</li>
                <img src={img3} alt="" className='graph'/>
                <p className="caption"><em>Graph2: RTD resistance vs temperature of RTD</em></p> 
            {/* <p className="caption"><em>Graph2: Resistance vs Temperature</em></p> */}
                <li><strong>Accuracy:</strong> Comparison of measurement with standard results. It indicates the degree of closeness of measurements to the actual value.</li>
                <li><strong>Stability:</strong> Measurement of drift over time. It's affected by sensor design and environmental factors.</li>
                <li><strong>Interchangeability:</strong> Measure of change in base tolerance and temperature coefficient from sensor to sensor. Important for consistent performance.</li>
                <li><strong>Response Time:</strong> Time taken by the sensor to react to temperature changes in a process.</li>
                <li><strong><h4>Factors influencing sensor response:</h4></strong>
                    <ul>
                        <li>Thermal lag when combined with the thermowell.</li>
                        <li>Immersion length.</li>
                        <li>Flow velocity of the process fluid.</li>
                        <li>Process fluid transients.</li>
                        <li>Fluid boundary or film on sensing surface.</li>
                        <li>Influences from the wall or vessel.</li>
                        <li>Environmental factors.</li>
                    </ul>
                </li>
                <li><strong>Insulation Resistance:</strong> It's the largest cause of errors and failure of RTD. Factors affecting it include inadequate seal, high humidity environment, or a failed seal. Baking the RTD assembly can sometimes recover it.</li>
                <li><strong>Self Heating:</strong> Small cross-sectional areas in the sensing elements tend to heat when electrical current is applied. RTDs are usually specified to be operated with a current of 1 milliampere or less.</li>
            </ul>
        </div>
    )
}

export default Theory_RTD
