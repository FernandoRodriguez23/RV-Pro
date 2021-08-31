import React, { useState, useEffect } from 'react';
import {links, socials} from '../utils/const';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-body">
                <div className="nav-header">
                    {/* <img src="" alt="logo" className="logo" /> */}
                </div>
                <div className="nav-sec-links">
                    <ul className="links">
                       {links.filter((link) => {
                           const {id, text, page} = link;
                           return (
                               <li key={id}>
                                   <a to={page}>{text}</a>
                               </li>
                           )
                       })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
