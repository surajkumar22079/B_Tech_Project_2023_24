
import React, { useState, useEffect } from 'react'
import './Utube.css'
import '../Manometer_App.css'

const Utube = ({ selectedButtonliquid, sliderValue }) => {
  let height = (((sliderValue - 101.3) / 1.314) * 44) + 48; // Parse sliderValue as a number
  let height_real = ((sliderValue - 101.3) / (9.8 * 997)) * 100000; // Parse sliderValue as a number
  height_real = height_real.toFixed(2);
  if (selectedButtonliquid === "button2") {
    height = (((sliderValue - 101.3) / 1.314) * 44) + 48
    height_real = ((sliderValue - 101.3) / (9.8 * 700)) * 100000; // Parse sliderValue as a number
    height_real = height_real.toFixed(2);
  };
  if (selectedButtonliquid === "button3") {
    height = (((sliderValue - 101.3) / 1.314) * 3.3) + 48
    height_real = ((sliderValue - 101.3) / (9.8 * 13545)) * 100000; // Parse sliderValue as a number
    height_real = height_real.toFixed(2);
  };
  const [color, setColor] = useState("#d4d4d4");
  useEffect(() => {
    if (selectedButtonliquid === "button1") {
      setColor("blue");
    } else if (selectedButtonliquid === "button2") {
      setColor("yellow");
    } else if (selectedButtonliquid === "button3") {
      setColor("#d4d4d4");
    }
  }, [selectedButtonliquid]);
  return (
    <div>
      <p className='utube-head'>U-Tube filled with {selectedButtonliquid === "button1" ? "Water" : null}{selectedButtonliquid === "button2" ? "Oil" : null}{selectedButtonliquid === "button3" ? "Mercury" : null}</p>

      <div className="utube-box">
        <div className='container-Utube '>
          <div className="cylinder-left"></div>
          <div className="cylinder"></div>
          <div className="cylinder-right"></div>
          <div className="liquid-left" style={{ backgroundColor: color, height: `${height}px` }}></div>
          <div className="liquid" style={{ backgroundColor: color }}></div>
          <div className="liquid-right" style={{ backgroundColor: color }}></div>
          <div className="liquid-right2" style={{ height: `${height}px` }} ></div>
          <div className="cylinder-right-bottom"></div>
          <div className="liquid-bottom"></div>
          <div className="circle"></div>
          <div className="circle-liqid"></div>
        </div>
        <div className="utube-details">
          <p>Change in the height : {height_real}cm</p>
          <p>Density of {selectedButtonliquid === "button1" ? "Water : 997 Kg/m^3" : null}{selectedButtonliquid === "button2" ? "Oil : 700 Kg/m^3" : null}{selectedButtonliquid === "button3" ? "Mercury : 13545.8 Kg/m^3" : null}</p>
          <p>Atmospheric pressure(Patm) : 101.3kPa</p>
        </div>
      </div>
    </div>
  )
}

export default Utube

