import React from 'react';

import SubHeading from '../../components/menu/subheading';
import image from '../../constants/image';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__dynapuff" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">1600 Pennsylvania Avenue NW, Washington, DC 20500</p>
        <p className="p__dynapuff" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 10:00 PM</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 11:00 PM</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={image.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;