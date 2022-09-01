import React from 'react';

import './App.css';
import Navbar from './components/navbar/navbar.jsx';
import Header from './components/header/header.jsx';
import About from './components/about/about.jsx';
import Menu from './components/menu/menu.jsx'
import Video from './components/video/video';
import Gallery from './components/gallery/gallery.jsx';
import FindUs from './components/findus/findus';
import Footer from './components/footer/footer';
const App = () => (
  <div>
    <Navbar/>
    <Header/>
    <About/>
    <Menu/>
    <Video/>
    <Gallery/>
    <FindUs/>
    <Footer/>
  </div>
);

export default App;
