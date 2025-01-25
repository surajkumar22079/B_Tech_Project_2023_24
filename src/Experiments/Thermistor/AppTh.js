// import logo from './logo.svg';
import './AppTh.css';
import Main from './Components/Main';
import { FiSidebar } from "react-icons/fi";
import Aim from './Components/Aim/Aim.jsx';
import Theory from './Components/Theory/Theory.jsx';
import { useState } from 'react'; 
import PreTest from "./Components/Pretest/Pretest.jsx"
import PostTest from "./Components/PostTest/PostTest.jsx"
import Procedure from './Components/Procedure/Procedure.jsx';

function App() {
  
  const [disp, setDisp] = useState("aim");
  return (
    <div className="App">
    {/* <h1>Oscilloscope</h1> */} 
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
          <button onClick={() => setDisp('post-test')}>PostTest</button>
        </div>
      </div>
      {disp === "main" && <Main />}
      {disp === "aim" && <Aim />}
      {disp === "theory" && <Theory/>} 
      {disp === "pre-test" && <PreTest/>}
        {disp === "post-test" && <PostTest/>}
        {disp === "procedure" && <Procedure/>}

    </div>
    {/* <Signal_input/> */} 
  </div>
  );
}

export default App;
