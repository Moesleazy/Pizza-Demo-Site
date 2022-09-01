import React from 'react';

import Menuitem from './menuitem';
import SubHeading from './subheading';

import image from '../../constants/image';
import data from '../../constants/data';

import './menu.css';

const Menu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title = "Menu that fits your palatte" />
      <h1 className="headtext__dynapuff">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_pizza  flex__center">
        <p className="app__specialMenu-menu_heading">Pizza & Pasta</p>
        <div className="app__specialMenu_menu_items">
          {data.pizza.map((pizza, index) => (
            <Menuitem key={pizza.title + index} title={pizza.title} price={pizza.price} tags={pizza.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={image.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_calzone flex__center">
        <p className="app__specialMenu-menu_heading">Calzones & Stromboli</p>
        <div className="app__specialMenu_menu_items">
          {data.calzone.map((calzone, index) => (
             <Menuitem key={calzone.title + index} title={calzone.title} price={calzone.price} tags={calzone.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div>
  </div>
);

export default Menu;