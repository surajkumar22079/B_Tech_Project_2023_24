import React from 'react';
import iitrlogo from '../Images/iitrLogo.png';
import './Navbar.css';

const Navbar = () => {
  const logoStyle = {
    marginTop: '-15px',
    height: '50px',
    width: '400px',
  };

  return (
    <div className="navbar navbar-default">
      <div className="container-nav">
        <div className="navbar-header">
         
          <a className="navbar-brand" href="http://iitr.ac.in">
            <span>
              <img src={iitrlogo} style={logoStyle} alt="IITR Logo" />
            </span>
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbar-ex-collapse"></div>
      </div>
    </div>
  );
};

export default Navbar;
