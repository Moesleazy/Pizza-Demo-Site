import React from 'react';


import images from '../../constants/image';
import './header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
        <div className="app__wrapper_info">
      <div className="subheading"><p className = "p__opensans">authentic hand tossed pizza</p>
        <div style={{ marginBottom: '1rem' }}>
    <p className="p__opensans"></p>
    <img src={images.spoon} alt="spoon_image" className="spoon__img" />
  </div><div/>
      <h1 className="app__header-h1">BEST PIZZA IN TOWN</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Authentic Italian Cuisine Made With Fresh And Local Ingredients.</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>
    </div>
  </div>
);

export default Header;