import React from 'react';
import '../styles/HeroSection.css';
import logo from '../images/logo.png';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1>Savor Convenience with Appeta</h1>
                <p>Discover Kigali's premier food delivery service that brings your favorite meals right to your doorstep. Experience the ease of ordering from the best restaurants in town with just a few clicks.</p>
                <a href="#" className="cta-button">Download App</a>
            </div>
            <div className="hero-image">
                <img src={logo} alt="Appeta Hero" />
            </div>
        </div>
    );
};

export default HeroSection;
