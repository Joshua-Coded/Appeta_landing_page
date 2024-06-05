import React from 'react';
import { Link } from 'react-router-dom';
import { ReactTyped as Typed } from 'react-typed';
import '../styles/AboutAppeta.css';
import aboutImage from '../images/logo.png'; // Update with your image path

const AboutAppeta = () => {
    return (
        <div className="about-appeta">
            <div className="about-image">
                <img src={aboutImage} alt="About Appeta" />
            </div>
            <div className="about-content">
                <h1>About Appeta</h1>
                <Typed
                    strings={[
                        'Fast Delivery',
                        'Delicious Meals',
                        'Convenient Ordering',
                        'Reliable Service'
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                    className="typed-text"
                />
                <p>
                    Appeta is Kigali's premier food delivery service, connecting you with the best restaurants in town. We ensure that your favorite meals are delivered quickly and reliably, right to your doorstep.
                    Appeta is Kigali's premier food delivery service, connecting you with the best restaurants in town. We ensure that your favorite meals are delivered quickly and reliably, right to your doorstep.

                </p>
                <Link to="/about-us" className="read-more-button">Read More</Link>
            </div>
        </div>
    );
};

export default AboutAppeta;
