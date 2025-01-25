// import logo from './logo.svg';
import './RTD_App.css';
import Landingpage from "./components/landing_page.js";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Part2 from './components/Part2.js';
import { FiSidebar } from "react-icons/fi";
import { useState } from 'react';
import Aim from './components/Aim/Aim.jsx';
import Theory_RTD from './components/Theory_RTD.jsx';
import PreTest from "./components/Pretest/Pretest.jsx"
import PostTest from "./components/PostTest/PostTest.jsx"
import ProcedurePage from './components/Procedure/Procedure.jsx';

function App() {
  const [disp, setDisp] = useState("aim");
  return (
    <div className="App"> 
    {/* <Navbar/> */}
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
        {disp === "main" && <Landingpage />}
        {disp === "aim" && <Aim/>}
        {disp === "theory" && <Theory_RTD/>}
        {disp === "pre-test" && <PreTest/>}
        {disp === "post-test" && <PostTest/>}
        {disp === "post-test" && <PostTest/>}
        {disp === "procedure" && <ProcedurePage/>}
      </div>
      {/* <Signal_input/> */}
      {/* <Part2></Part2> */}
      {/* <Footer/> */}
    </div>
  );
  }

export default App;
