import React, { useState, useEffect } from 'react';
import { FaBars } from "react-icons/fa";
import logo from '../img/RVLogo-_1_.svg';


//Makingf so the link goes to component, import said component and put it where the # is

function Navbar() {

    const [showLinks, setShowLinks] = useState(false);
    const checkSize = () => {
        if (window.innerWidth > 768){
          setShowLinks(true);
        }
        if (window.innerWidth <= 768){
          setShowLinks(false);
        }
      };
      useEffect(() => {
        checkSize();
        window.addEventListener('resize', checkSize);
        return (() => {
          window.removeEventListener('resize', checkSize)
        })
      }, [])

    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="logo" className="logo" />
                    <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
                        <FaBars />
                    </button>
                </div>
                <div className={`links-container ${showLinks && 'show'}`}>
                    <ul className="links">
                        <li className="link"><a href="#">Home</a></li>
                        {/* <li className="link"><a href="#">SlideShow</a></li> */}
                        <li className="link"><a href="#">Services</a></li>
                        <li className="link"><a href="#">Gallery</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
