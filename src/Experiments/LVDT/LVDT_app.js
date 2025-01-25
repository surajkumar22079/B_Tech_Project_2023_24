// import logo from './logo.svg';
import './LVDT_app.css';
import LVDT from '../LVDT/Components/LVDT.js'
import LVDT_graph from '../LVDT/Components/LVDT_graph'
// import "../src/Components/LVDT.css";
import Theory_comp from "../LVDT/Components/Theory_comp.js"
import Aim_comp from "../LVDT/Components/Aim_comp.js"
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import reportWebVitals from './reportWebVitals';
import { registerLicense } from '@syncfusion/ej2-base';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import { FiSidebar } from "react-icons/fi";
import Pretest from "./Components/Pretest/Pretest.jsx"
import PostTest from "./Components/PostTest/PostTest.jsx"
import React, { useState } from 'react';
import Procedure from './Components/Procedure/Procedure.jsx';


// Registering Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF5cWWJCf1JpRGVGfV5yd0VHYFZUTXxeS00SNHVRdkdgWH9feHRTQ2dfVUNyVkI=');


function App() {
  const [disp, setDisp] = useState("aim");
  return (
    <div className="App">
      {/* <h1 className="main_heading">LVDT experiment</h1>
      <div className="navbar">
        <a href="/">Aim</a>
        <a href="/theory">Theory</a>
        <a href="/simulation">Simulation</a>
      </div> */}
      {/* <Navbar /> */}
      {/* <LVDT /> */}
      {/* <div className="lvdt-box">

      <BrowserRouter>
      <Routes>
        <Route path="/" > 
          <Route index element={<Aim_comp/>} /> 
          <Route path="simulation" element={<LVDT/>} /> 
          <Route path="/" element={<Aim_comp/>} /> 
          <Route path="theory" element={<Theory_comp/>} /> 
        </Route>
      </Routes>
    </BrowserRouter>
      </div> */}

      <div className="box">
        <div className="side-nav">
          <div className="button-box">
            <FiSidebar />
            <button onClick={() => setDisp('aim')}>Aim</button>
          </div>
          <div className="button-box">
            <FiSidebar />
            <button onClick={() => setDisp('theory')}>Thoery</button>
          </div>
          <div className="button-box">
            <FiSidebar />
            <button onClick={() => setDisp('pre-test')}>Pretest</button>
          </div>
          <div className="button-box">
            <FiSidebar />
            <button onClick={() => setDisp('main')}>Simulation</button>
          </div>
          <div className="button-box">
            <FiSidebar />
            <button onClick={() => setDisp('procedure')}>Procedure</button>
          </div>
          <div className="button-box">
            <FiSidebar />
            <button onClick={() => setDisp('post-test')}>Post-Test</button>
          </div>
        </div>
        {disp === "main" && <LVDT />}
        {disp === "aim" && <Aim_comp className="aim_comp" />}
        {disp === "theory" && <Theory_comp />}
        {disp === "pre-test" && <Pretest />}
        {disp === "post-test" && <PostTest/>}
        {disp === "procedure" && <Procedure/>}
      </div>
      {/* <Signal_input/> */}
      {/* <Routes>
        <Route path="/" element={<LVDT />}/>
      </Routes> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
