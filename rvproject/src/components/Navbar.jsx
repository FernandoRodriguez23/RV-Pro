import React, { useState, useEffect } from 'react';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-body">
                <div className="nav-header">
                    {/* <img src="" alt="logo" className="logo" /> */}
                </div>
                <div className="nav-sec-links">
                    <ul className="links">
                        <li className="link"><a href="#">About</a></li>
                        <li className="link"><a href="#">SlideShow</a></li>
                        <li className="link"><a href="#">Gallery</a></li>
                        <li className="link"><a href="#">Footer</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
