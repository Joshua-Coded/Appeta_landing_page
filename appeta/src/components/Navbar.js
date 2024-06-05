import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../images/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Appeta Logo" className="logo-img" />
                    </Link>
                </div>
                <nav className="nav">
                    <ul className={`nav-list ${isOpen ? 'active' : ''}`}>
                        <li className="nav-item"><Link to="/">Home</Link></li>
                        <li className="nav-item"><Link to="/about-us">About Us</Link></li>
                        {/* <li className="nav-item"><Link to="#">How It Works</Link></li> */}
                        <li className="nav-item"><Link to="/contact">Contact Us</Link></li>
                    </ul>
                    <div className="menu-toggle" onClick={toggleMenu}>
                        <div className="hamburger"></div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
