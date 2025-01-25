import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Experiments from './Experiment_list';
import Navbar from "./Navbar/Navbar.jsx"
import Footer from "./Footer/Footer.jsx"
import MainPage from './MainPage.jsx';
import LVDT_app from "./Experiments/LVDT/LVDT_app.js"
import RTD_app from "./Experiments/RTD/RTD_App.js"
import Oscilloscope_App from './Experiments/Oscilloscope/Oscilloscope_App.js';
import Manometer from "./Experiments/Manometer/Manometer_App.js"
import CLM from "./Experiments/CLM/CLM_App.js"
import Thermocouple from "./Experiments/Thermocouple/Thermo_App.js"
import LoadingEffect from "./Experiments/LoadingEffect/App1.js";
import Thermistor from "./Experiments/Thermistor/AppTh.js";
import Strain from "./Experiments/Strain_Gauge/AppStrain.js";

function App() {
  return (
    <Router> {/* Wrap your App component with Router */} 
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path="/experiments" element={<Experiments />} />
          <Route path="/LVDT" element={<LVDT_app />} />
          <Route path="/rtd" element={<RTD_app />} />
          <Route path="/osc" element={<Oscilloscope_App />} />
          <Route path="/man" element={<Manometer/>} />
          <Route path="/clm" element={<CLM/>} />
          <Route path="/thermo" element={<Thermocouple/>} />
          <Route path="/loading" element={<LoadingEffect/>} />
          <Route path="/thermistor" element={<Thermistor/>} />
          <Route path='/strain' element = {<Strain />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
