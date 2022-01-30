import React, {useState} from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-logo">
                   Words Words Words <i className="fab fa-artstation"></i>
                </a>
            </div>
        </nav>
    </>
  )
}

export default Navbar;
