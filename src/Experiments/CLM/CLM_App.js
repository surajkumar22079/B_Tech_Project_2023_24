// import logo from './logo.svg';
import './CLM_App.css';
import Landingpage from "./components/landing_page.js";
import Part2 from './components/Part2.js';
import Navbar from "./components/Navbar/Navbar.jsx"
import Footer from "./components/Footer/Footer.jsx"
import { FiSidebar } from "react-icons/fi";
import { useState } from 'react';
import Aim from "./components/Aim/Aim.jsx";
import Theory from "./components/Theory/Theory.jsx";
import PreTest from "./components/Pretest/Pretest.jsx"
import PostTest from "./components/PostTest/PostTest.jsx"
import Procedure from './components/Procedure/Procedure.jsx';

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
            <button onClick={() => setDisp('pre-test')}>PreTest</button>
          </div>
          <div className="button-box">
            <FiSidebar />
            <button onClick={() => setDisp('procedure')}>Procedure</button>
          </div>
          <div className="button-box">
            <FiSidebar />
            <button onClick={() => setDisp('main')}>Simulation</button>
          </div>
          <div className="button-box">
            <FiSidebar />
            <button onClick={() => setDisp('post-test')}>Post Test</button>
          </div>
        </div>
        {disp === "main" && <Landingpage />}
        {disp === "aim" && <Aim />}
        {disp === "theory" && <Theory />}
        {disp === "pre-test" && <PreTest />}
        {disp === "post-test" && <PostTest />}
        {disp === "procedure" && <Procedure />}
      </div>
      {/* <Part2></Part2> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
