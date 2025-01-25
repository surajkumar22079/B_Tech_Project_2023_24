import React, { useState, useEffect } from 'react';
import "./Main.css"
import CircularKnob from './Circular_Knob';
import SineCurve from "./Graph.jsx"
// import { Line } from 'react-chartjs-2';
import up_arrow from "../Assets/up_arrow_icon.png"
import down_arrow from "../Assets/down_arrow_icon.png"
import LogicCircuit from './Playground';

const Oscilloscope = () => {

  const [xScale1, setxScale1] = useState(0);
  const [yOffset1, setYOffset1] = useState(0);
  const [yOffset2, setYOffset2] = useState(0);
  const [yScale1, setyScale1] = useState(20);
  const [yScale2, setyScale2] = useState(20);
  const [timeScale, setTimeScale] = useState(1);

  //graph input
  const [amplitude1, setAmplitude1] = useState(1);
  const [frequency1, setFrequency1] = useState(1);
  const [selectedFunction1, setSelectedFunction1] = useState('sine');

  const [amplitude2, setAmplitude2] = useState(1);
  const [frequency2, setFrequency2] = useState(1);
  const [selectedFunction2, setSelectedFunction2] = useState('sine');

  const [time, setTime] = useState(0);
  const [signalValue1, setSignalValue1] = useState(0);
  const [signalValue2, setSignalValue2] = useState(0);


  useEffect(() => {
    const getSignalValue = (selectedFunction, amplitude, frequency, time) => {
      switch (selectedFunction) {
        case 'sine':
          return amplitude * Math.sin(2 * Math.PI * frequency * time);
        case 'cosine':
          return amplitude * Math.cos(2 * Math.PI * frequency * time);
        case 'step':
          return amplitude >= time ? amplitude : 0;
        case 'ramp':
          return amplitude * (time >= 0 ? time : 0);
        // Add more cases for other functions as needed
        default:
          return 0;
      }
    };
    // Update the signal values for Signal 1
    setSignalValue1(getSignalValue(selectedFunction1, amplitude1, frequency1, time));

    // Update the signal values for Signal 2
    setSignalValue2(getSignalValue(selectedFunction2, amplitude2, frequency2, time));
  }, [amplitude1, frequency1, selectedFunction1, amplitude2, frequency2, selectedFunction2, time]);

  // Update time at regular intervals to simulate continuous time
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 0.1);
    }, 100);

    return () => clearInterval(interval);
  }, []);




  const yOffsetinc1 = () => {
    if (yOffset1 <= 9)
      setYOffset1(yOffset1 + 1);
  }
  const yOffsetinc2 = () => {
    if (yOffset2 <= 9)
      setYOffset2(yOffset2 + 1);
  }
  const yOffsetdec1 = () => {
    if (yOffset1 >= -9)
      setYOffset1(yOffset1 - 1);
  }
  const yOffsetdec2 = () => {
    if (yOffset2 >= -9)
      setYOffset2(yOffset2 - 1);
  }

  const scaleinc1 = () => {
    if (yScale1 <= 100000)
      setyScale1(yScale1 + 5);
  }
  const scaledec1 = () => {
    if (yScale1 >= 0.0001)
      setyScale1(yScale1 - 5);
  }
  const scaleinc2 = () => {
    if (yScale2 <= 100000)
      setyScale2(yScale2 + 5);
  }
  const scaledec2 = () => {
    if (yScale2 >= 0.0001)
      setyScale2(yScale2 - 5);
  }

  const timeScaleinc = () => {
    if (timeScale === 1) setTimeScale(5);
    else
      setTimeScale(timeScale + 0.5);
  }
  const timeScaledec = () => {
    setTimeScale(timeScale - 0.5);
  }
  const xScale1inc = () => {
    setxScale1(xScale1 + 5);
  }
  const xScale1dec = () => {
    setxScale1(xScale1 - 5);
  }

  return (
    <div className="container">
     <div className='oscilloscope-container'>
      <h1>Oscilloscope</h1>
      <div className='oscilloscope'>
        <div className="main-left-col main-left-first">
          <div className="graph-area">
            {/* Replace with your Graph component */}
            {/* <SineCurve
              frequency1={frequency1}
              amplitude1={amplitude1}
              function1={selectedFunction1}
              xScale1={xScale1} 
              yOffset1={yOffset1}
              yScale1={yScale1}
              color1="blue" 
              frequency2={frequency2}
              amplitude2={amplitude2}
              function2={selectedFunction2}
              yOffset2={yOffset2}
              yScale2={yScale2}
              color2="red"
            /> */}
            <SineCurve 
            frequency1={frequency1}
            amplitude1={amplitude1}
            function1={selectedFunction1}
            frequency2={frequency2}
              amplitude2={amplitude2}
              function2={selectedFunction2}
            yScale1={yScale1} xOffset={xScale1} yOffset1={yOffset1} yScale2={yScale2} yOffset2={yOffset2} className = "sineCurve"/>
          </div>
        </div>
        <div className="main-left-col main-left-second">
          Vertical
          <hr />
          <div className='vertical'>
            <div className="main-left-second-a">
              <div className="y-position">
                <p className="subhead">Y-Position</p>
                <button onClick={yOffsetinc1} className='updownbtn'><img src={up_arrow} alt="" /></button>
                {yOffset1}
                <button onClick={yOffsetdec1} className='updownbtn'><img src={down_arrow} alt="" /></button>
              </div>
              <br />
              <div className="scale">
                Scale (CH1)
                <button onClick={scaleinc1} className='updownbtn'><img src={up_arrow} alt="" /></button>
                {yScale1} V/Unit
                <button onClick={scaledec1} className='updownbtn'><img src={down_arrow} alt="" /></button>
              </div>
              <br />
              <div className="Channel">
                Channel 1
                <div className="ch1-circle"></div>
              </div>
            </div>
            <div className="main-left-second-a">
              <div className="y-position">
                Y-Position
                <button onClick={yOffsetinc2} className='updownbtn'><img src={up_arrow} alt="" /></button>
                {yOffset2}
                <button onClick={yOffsetdec2} className='updownbtn'><img src={down_arrow} alt="" /></button>
              </div>
              <br />
              <div className="scale">
                Scale (CH2)
                <button onClick={scaleinc2} className='updownbtn'><img src={up_arrow} alt="" /></button>
                {yScale2} V/Unit
                <button onClick={scaledec2} className='updownbtn'><img src={down_arrow} alt="" /></button>
              </div>
              <br />
              <div className="Channel">
                Channel 2
                <div className="ch1-circle"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-left-col main-left-third">
          Horizontal
          <hr />
          <div className="x-pos-div">
          <p>x-position</p>    
          <div className="x-position">
            <button className='updownbtn' onClick={xScale1dec}><img className='left_arrow' src={up_arrow} alt="" /></button>
            {xScale1}
            <button className='updownbtn' onClick={xScale1inc}><img className='right_arrow' src={up_arrow} alt="" /></button>
          </div>
          </div>
          <br />
          <div className="x-scale-div">
          <p>Time Scale</p>
          <div className="x-scale">
            <button onClick={timeScaleinc} className='updownbtn'><img src={up_arrow} alt="" /></button>
            {timeScale} sec/div
            <button onClick={timeScaledec} className='updownbtn'><img src={down_arrow} alt="" /></button>
          </div>
          </div>
          <br />
          <div className="gnd">
            Ground
            <div className="ch1-circle"></div>
          </div>
        </div>
        <div className="main-left-col main-left-fourth">
          Trigger
        </div>
      </div>
      </div>
      <div className="input-values">
       <h1> Signal generator</h1>
        <div className='control-panel-box'> 

{/* Signal 1 input section */}
<div>
  <h2>Signal 1</h2>
  <h3> f1(t) = {amplitude1}{selectedFunction1}({2*3.14*frequency1}t)</h3>
  <label>
    Amplitude:
    <input
      type="number"
      value={amplitude1}
      onChange={(e) => setAmplitude1(parseFloat(e.target.value))}
    />
  </label>
  <label>
    Frequency:
    <input
      type="number"
      value={frequency1}
      onChange={(e) => setFrequency1(parseFloat(e.target.value))}
    />
  </label>
  <div>
    <button onClick={() => setSelectedFunction1('sine')}>Sine</button>
    <button onClick={() => setSelectedFunction1('cosine')}>Cosine</button>
    <button onClick={() => setSelectedFunction1('step')}>Step Input</button>
    <button onClick={() => setSelectedFunction1('ramp')}>Ramp Signal</button>
    {/* Add more buttons for other functions */}
  </div>
</div>

{/* Signal 2 input section */}
<div>
  <h2>Signal 2</h2>
  <h3> f2(t) = {amplitude2}{selectedFunction2}({2*3.14*frequency2}t)</h3>
  <label>
    Amplitude:
    <input
      type="number"
      value={amplitude2}
      onChange={(e) => setAmplitude2(parseFloat(e.target.value))}
    />
  </label>
  <label>
    Frequency:
    <input
      type="number"
      value={frequency2}
      onChange={(e) => setFrequency2(parseFloat(e.target.value))}
    />
  </label>
  <div>
    <button onClick={() => setSelectedFunction2('sine')}>Sine</button>
    <button onClick={() => setSelectedFunction2('cosine')}>Cosine</button>
    <button onClick={() => setSelectedFunction2('step')}>Step Input</button>
    <button onClick={() => setSelectedFunction2('ramp')}>Ramp Signal</button>
    {/* Add more buttons for other functions */}
  </div>
</div>
 

        </div>
      </div>

      {/* <LogicCircuit className='playground' /> */}
    </div>
  );
};

export default Oscilloscope;
