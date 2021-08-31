import React, { useState, useEffect } from 'react'
import RvForest from '../img/RvUpForest.jpg';
import RvPalm from '../img/RvPalmTrees.jpg';
import ToolsImg from '../img/ToolsOnWall.jpg';

function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(0);
  

  const delay = 2500;
  return (
    <div className="Slideshow-container">
      <div className="Slideshow-header"></div>
      <ul className="slides">
          <li className="slide">
          <img src={RvForest} alt="slide-img-1" className="slide-img" />
          </li>
          <li className="slide"></li>
          <li className="slide"></li>
      </ul>
    </div>
  );
}

export default Slideshow;
