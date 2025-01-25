import React from 'react'
import oscilloscope_img from "../../Assets/oscilloscope_img.png"
import signal_gen from "../../Assets/signal_generator.jpg"
import "./Theory.css"

const Theory = () => {
    return (
        <div className='theory1'>
            <h2>Oscilloscope</h2>
            <div className="theory1-box">
            <h3>Introduction</h3>
                <p>To measure an electrical voltage you would use a voltmeter. But what happens if the
                    electrical voltage you want to measure is varying rapidly in time? The voltmeter display
                    may oscillate rapidly preventing you making a good reading, or it may display some
                    average of the time varying voltage. In this case, an oscilloscope can be used to observe,
                    and measure, the entire time-varying voltage, or "signal". The oscilloscope places an
                    image of the time-varying signal on the screen of a cathode ray tube (CRT) allowing us to
                    observe the shape of the signal and measure the voltage at different times. If the signal is
                    periodic (it repeats itself over and over) as is often the case, we can also measure the
                    frequency, the rate of repeating, of the signal. </p>
            </div>
            <div className="theory1-box">
                <h3>What the Oscilloscope Does</h3>
                <p>There are two types of voltages AC and DC. AC (derived from ALTERNATING
                    CURRENT) indicates a voltage, the magnitude of which varies as a function of time. An
                    AC signal is shown in Figure 1. In contrast, DC (derived from DIRECT CURRENT)
                    indicates a voltage whose magnitude is constant in time.
                    The voltage is on the vertical (y) axis and the time is on the horizontal (x) axis. A
                    constant voltage (DC) shows up as a flat horizontal line. The scope has controls to make
                    the x and y scales larger or smaller. These act like the controls for magnification on a
                    microscope. They don’t change the actual voltage any more than magnification makes a
                    cell on the microscope slide bigger; they just let us see small details more easily.
                    There are also controls to shift the center points of the voltage scales. These “offset”
                    knobs are like the controls to move the stage of the microscope to look at different parts
                    of a sample. You will learn about other adjustments in the course of the lab. </p>
            </div>
            <div className="theory1-box">
                <h3>How the Oscilloscope Works</h3>
                <p>An oscilloscope contains a cathode ray tube (CRT), in which the deflection of an electron
                    beam that falls onto a phosphor screen is directly proportional to the voltage applied
                    across a pair of parallel deflection plates. A measurement of this deflection yields a
                    measurement of the applied voltage. The oscilloscope can be used to display and
                    measure rapidly varying electrical phenomena. The internal subsystems of the
                    oscilloscope are shown in Figure 3a and the front panel of the oscilloscope is shown in
                    Figure 3b. To see the front panel of the oscilloscope in more detail, open the pdf file for
                    this lab on the course web page and use Adobe’s magnify option. </p>
                <img src={oscilloscope_img} alt="" />
                <p>A vertical amplifier is connected to the y-axis deflection plates. It serves to amplify the
                    input signal to the y-plates so that the CRT can show an appreciable vertical displacement
                    for a small signal. The horizontal amplifier serves the same purpose for the x-axis plates
                    and the horizontal display. Although an external input signal can be applied to the x-axis
                    input, this function of the oscilloscope is not used in this course. Instead, a sweep
                    generator internal to the oscilloscope is used to control the horizontal display. The sweep
                    generator makes a beam move in the x-direction at a constant, but adjustable speed. The
                    beam’s speed is adjusted using the time base (TB) control knob. This allows the
                    oscilloscope to display the external y-input signal as a function of time. </p>
                <p>The sweep generator functions as follows. A saw-tooth voltage is applied to the
                    horizontal deflection plates. A saw-tooth voltage is a time-varying periodic voltage and
                    is shown in figure 4a. The voltage first increases linearly with time and then abruptly
                    drops to zero. As the voltage increases the beam is deflected more and more to the right
                    of the CRT screen. When the voltage reaches its maximum value, the beam trace will be
                    at the far right hand side of the screen (x = 10 cm). The voltage then abruptly retraces
                    back to zero – during this phase the signal is not displayed on the scope. The result is the
                    beam spot sweeps across the screen with the same frequency as the saw-tooth signal.
                    The horizontal position of the beam spot is shown in figure 4b. Note: the time it takes the
                    beam spot to move across the screen (sweep time) is equal to the period of the saw-tooth
                    signal. The rate at which the beam spot sweeps across the screen is selected by using the
                    time base (TB) selector knob and is calibrated in time/cm. Because both the phosphor
                    screen and the human eye have some finite retention time, the beam spot looks like a
                    continuous line at frequencies higher than about 15 Hz. </p>


            </div>
            <div className="theory1-box">
                <h3>Applications</h3>
                <p><b>Electronics and Electrical Engineering:</b> Oscilloscopes are fundamental tools for troubleshooting, testing, and debugging electronic circuits. Engineers and technicians use oscilloscopes to visualize and analyze electrical signals, such as voltage and current waveforms, in both analog and digital circuits. They are indispensable for tasks such as measuring signal amplitude, frequency, phase, and timing, as well as detecting and diagnosing issues such as noise, distortion, glitches, and timing errors.</p>
<p><b>Telecommunications:</b> In telecommunications, oscilloscopes are used for analyzing analog and digital signals in communication systems, including radio frequency (RF) signals, microwave signals, pulse-width modulation (PWM) signals, and digital data streams. They help engineers and technicians troubleshoot and optimize the performance of transmitters, receivers, antennas, amplifiers, filters, and other communication components.</p>
<p><b>Automotive and Transportation:</b> Oscilloscopes are employed in automotive diagnostics and testing for analyzing electrical signals in vehicle systems such as ignition systems, fuel injection systems, sensors, actuators, communication networks (CAN bus), and onboard electronic control units (ECUs). They are used to diagnose engine problems, analyze sensor signals, check ignition timing, verify communication protocols, and troubleshoot electronic issues in modern vehicles.</p>
<p><b>Power Electronics: </b>In power electronics applications, oscilloscopes are used to analyze and characterize electrical signals in power converters, inverters, motor drives, switching power supplies, and renewable energy systems. Engineers use oscilloscopes to measure voltage and current waveforms, assess power quality, evaluate switching behavior, diagnose switching losses, and optimize efficiency in power electronic circuits.</p>
    <p><b>Medical and Healthcare:</b> Oscilloscopes are utilized in medical instrumentation and healthcare devices for monitoring and analyzing physiological signals, such as electrocardiogram (ECG) signals, electromyogram (EMG) signals, electroencephalogram (EEG) signals, and blood pressure waveforms. They help healthcare professionals diagnose cardiac arrhythmias, muscle disorders, brain activity, and other medical conditions by visualizing and interpreting bioelectric signals.</p>
    <p><b>Research and Development:</b> Oscilloscopes play a crucial role in research and development (R&D) laboratories, where they are used for prototyping, experimentation, and characterization of electronic circuits, sensors, actuators, and systems. Researchers use oscilloscopes to study signal behavior, validate theoretical models, verify simulation results, and explore new technologies in fields such as electronics, physics, materials science, and biomedical engineering.</p>
            </div>

            <h2>The Signal Generator</h2>
            <div className="theory1-box">
                <p>To investigate how the oscilloscope works in this first experiment, we will need to give it
                    a test input signal. To accomplish this, we will be using a signal generator like the one
                    pictured below. </p>
                <img src={signal_gen} alt="" />
                <p>It is important to understand the function of all of the dials and switches on the signal
                    generator. </p>
                <ul>
                    <li>The digital read out (upper left) displays the frequency that the signal generator is
                        currently set to. This readout is in Hertz (Hz). </li>
                    <li>The RANGE buttons (to the right of the display) will move the decimal in the
                        read out left or right. This means that by pressing the button once, we can change
                        the frequency by a factor of ten. In the example pictured, one press of the button
                        would change the frequency from over 999 Hz to over 9,999 HZ or over 99 Hz,
                        depending on which direction we move the decimal. This will allow us to
                        generate a large number of different frequencies quickly and easily. This only
                        moves the decimal; it does not change the numbers that are displayed. </li>
                    <li> If we wish to make a different numerical value, we need to turn the knob
                        immediately range buttons, marked ADJUST. This adjustment works in a rather
                        unique way. If the knob is turned quickly the numbers change quickly. If we turn
                        the knob slowly, the digits change slowly. So, with our frequency set at 999.99
                        Hz, as in the example above, if we wish to set it to 999.48 Hz, we could turn the
                        knob slowly. If we wanted to set it to a 188.34 Hz, we could turn the knob the
                        same amount, but just turn faster and the digits change faster. It may seem a little
                        bit awkward at first, but it gives us quick access to a large range of frequencies.
                    </li>
                    <li>At the top is a setting labeled WAVEFORM. By changing this setting, we can
                        create smooth sine curves, square waves or triangular waves. The LED will light
                        up next to the type of wave selected. </li>
                    <li>Below the waveform setting is a knob labeled AMPLITUDE. By rotating this
                        knob, we can change the amplitude or height of our wave. This amplitude will be
                        measured using the oscilloscope.</li>
                    <li>The far right hand side is the OUTPUT of the signal generator. This is where we
                        connect the cables to take the signal to an oscilloscope or an external circuit. We
                        will use the two banana jacks at the bottom (the red and black ones) to connect
                        banana plugs to a cable that has a BNC connector on the other end (the BNC
                        connector is the round metal one that will connect to the “input” on the
                        oscilloscope).</li>
                </ul>
            </div>

        </div>
    )
}

export default Theory
