import React from 'react';

import images from '../../constants/image';
import './about.css';

const About = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.p} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__dynapuff">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">All of our food is prepared to order and made with the freshest ingredients from local distributers and made with the utmost care.</p>
        <button type="button" className="custom__button">Read More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__dynapuff">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Pizza's was established in 2008 by John and Jane Doe. Our original store was a small humble store and we quickly gained an amazing reputation.</p>
        <button type="button" className="custom__button">Read More</button>
      </div>
    </div>
  </div>
);

export default About;