import React, { useState } from "react";
import './Button.css'
import Utube from "./Components/Utube";
import Piezometer from "./Components/Piezometer";

const Main = () => {
    const [selectedButtoninstructions, setSelectedButtoninstructions] = useState(null);
    const [sliderValue, setSliderValue] = useState(102);

    const handleClickinstructions = (buttonId) => {
        setSelectedButtoninstructions(buttonId);
    };

    const [selectedButtoninstrument, setSelectedButtoninstrument] = useState("button1");

    const handleClickinstrument = (buttonId) => {
        setSelectedButtoninstrument(buttonId);
    };
    const handleSliderChange = (event) => {
        setSliderValue(event.target.value);
    };

    const [selectedButtonliquid, setSelectedButtonliquid] = useState("button3");

    const handleClickliquid = (buttonId) => {
        setSelectedButtonliquid(buttonId);
    };

    return (
        <div className="simulation-manometer">
            <div className="my-4 container">
                {selectedButtoninstrument === "button1" ? <Piezometer selectedButtonliquid={selectedButtonliquid} sliderValue={sliderValue} /> : null}
                {selectedButtoninstrument === "button2" ? <Utube selectedButtonliquid={selectedButtonliquid} sliderValue={sliderValue} /> : null}
                {selectedButtoninstrument === "button3" ? <Utube /> : null}
                <div className='Control-pannel' style={{ position: 'relative' }}>
                    <h1 style={{ textAlign: 'center' }}>Control Pannel</h1>
                    <div style={{ alignContent: 'center ' }} className="manometer-box">
                        {/* <div className="button-group">
            <button
              className={`button ${selectedButtoninstructions === 'button1' ? 'active' : 'inactive'}`}
              id="button1"
              onClick={() => handleClickinstructions('button1')}
            >
              Details
            </button>
            <button
              className={`button ${selectedButtoninstructions === 'button2' ? 'active' : 'inactive'}`}
              id="button2"
              onClick={() => handleClickinstructions('button2')}
            >
              Directions
            </button>
            <button
              className={`button ${selectedButtoninstructions === 'button3' ? 'active' : 'inactive'}`}
              id="button3"
              onClick={() => handleClickinstructions('button3')}
            >
              About
            </button>
          </div> */}

                        <p className="control-panel-head">Select the liquid filled </p>
                        <div className="button-group">
                            <button
                                className={`button ${selectedButtonliquid === 'button1' ? 'active' : 'inactive'}`}
                                id="button1"
                                onClick={() => handleClickliquid('button1')}
                            >
                                water
                            </button>
                            <button
                                className={`button ${selectedButtonliquid === 'button2' ? 'active' : 'inactive'}`}
                                id="button2"
                                onClick={() => handleClickliquid('button2')}
                            >
                                Oil
                            </button>
                            <button
                                className={`button ${selectedButtonliquid === 'button3' ? 'active' : 'inactive'}`}
                                id="button3"
                                onClick={() => handleClickliquid('button3')}
                            >
                                Mercury
                            </button>
                        </div>
                        <p className="control-panel-head">Select Instrument</p>
                        <div className="button-group">
                            <button
                                className={`button ${selectedButtoninstrument === 'button1' ? 'active' : 'inactive'}`}
                                id="button1"
                                onClick={() => handleClickinstrument('button1')}
                            >
                                Piezometer
                            </button>
                            <button
                                className={`button ${selectedButtoninstrument === 'button2' ? 'active' : 'inactive'}`}
                                id="button2"
                                onClick={() => handleClickinstrument('button2')}
                            >
                                U-Tube
                            </button>
                        </div>
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <label for="customRange1" class="form-label">absolute fluid pressure Pf</label>
                        <input
                            type="range"
                            className="form-range"
                            id="customRange1"
                            value={sliderValue}
                            min={102}
                            max={selectedButtonliquid==="button3"?220:110}
                            step={0.2}
                            onChange={handleSliderChange}
                        />

                        <p>{sliderValue} kPa</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
