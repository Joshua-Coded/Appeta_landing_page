import React from 'react';
import '../styles/AboutUs.css';
import aboutImage from '../images/logo.png'; // Update with your image path

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="about-image">
                <img src={aboutImage} alt="About Appeta" />
            </div>
            <div className="about-content">
                <h1>About Appeta</h1>
                <p>
                    Appeta is Kigali's premier food delivery service, connecting you with the best restaurants in town. We ensure that your favorite meals are delivered quickly and reliably, right to your doorstep.
                    Appeta is Kigali's premier food delivery service, connecting you with the best restaurants in town. We ensure that your favorite meals are delivered quickly and reliably, right to your doorstep.
                    Appeta is Kigali's premier food delivery service, connecting you with the best restaurants in town. We ensure that your favorite meals are delivered quickly and reliably, right to your doorstep.
                    Appeta is Kigali's premier food delivery service, connecting you with the best restaurants in town. We ensure that your favorite meals are delivered quickly and reliably, right to your doorstep.
                    Appeta is Kigali's premier food delivery service, connecting you with the best restaurants in town. We ensure that your favorite meals are delivered quickly and reliably, right to your doorstep.
                </p>
            </div>
        </div>
    );
};

export default AboutUs
