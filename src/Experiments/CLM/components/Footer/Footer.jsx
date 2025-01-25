import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <footer className="section section-primary">
        <div className="container-footer">
          <div className="row">
            <div className="col-sm-18">
              <h1>Vlabs-Dev Team</h1>
              <p>
                INDIAN INSTITUTE OF TECHNOLOGY ROORKEE
                <br />
                ROORKEE, UTTARAKHAND
                <br />
                INDIA
              </p>
            </div>
            <div className="col-sm-18">
              <p className="text-info text-right">
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
