import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import FooterOverlay from './footerOverlay.jsx';
import Newsletter from './newsletter.jsx';
import image from '../../constants/image';
import './footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">1600 Pennsylvania Avenue NW, Washington, DC</p>
        <p className="p__opensans">+1 123-456-7590</p>
        <p className="p__opensans">+1 987-654-3210</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={image.pizza} alt="footer_logo" />
        <p className="p__opensans">&quot;The best pizza in town for the best pizza lovers in town.&quot;</p>
        <img src={image.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Operating Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 10:00 PM</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">08:00 am - 11:00 PM</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2022 Pizza&trade; All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;