import React, { useState, useEffect } from 'react'
import { socials } from "../utils/const";

function Footer() {
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
    <div className="footer">
      <h4>
      <ul className={`social-icons ${showLinks && 'show'}`}>
                    {socials.map((social) => {
                    const { url, id, icon } = social;
                    return (
                    <li key={id}>
                        <a href={url}>{icon}</a>
                    </li>
                    );
                    })}
        </ul>
      </h4>
      <h4>Briggs RV Repair LLC</h4>
      <h5>24710 W Dove Trail</h5>
      <h5>Buckeye, AZ 85326</h5>
      <h5>+1(623) 474 5069</h5>
      <p>Copyright © 2021 Briggs RV Repair LLC - All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
