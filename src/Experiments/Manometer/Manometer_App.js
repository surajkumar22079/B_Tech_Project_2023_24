import { useState } from "react";
import Main from "./Main.jsx";
import { FiSidebar } from "react-icons/fi";
import Aim from "./Components/Aim/Aim.jsx";
import Theory from "./Components/Theory/Theory.jsx";
import Procedure from "./Components/Footer/Procedure/Procedure.jsx";
import PreTest from "./Components/Pretest/Pretest.jsx"
import PostTest from "./Components/PostTest/PostTest.jsx"

export default function App() {
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
          </div><div className="button-box">
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
        {disp === "main" && <Main />}
        {disp === "aim" && <Aim />}
        {disp === "theory" && <Theory/>}
        {disp === "procedure" && <Procedure/>} 
        {disp === "pre-test" && <PreTest/>}
        {disp === "post-test" && <PostTest/>}
      </div>
    {/* <Footer/> */}
    </div>
  );
}
