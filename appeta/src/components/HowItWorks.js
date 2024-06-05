import React from 'react';
import '../styles/HowItWorks.css';
import step1Image from '../images/logo.png';
import step2Image from '../images/logo.png';
import step3Image from '../images/logo.png';
import step4Image from '../images/logo.png';

const HowItWorks = () => {
    return (
        <div className="how-it-works">
            <h2>Fast Delivery You Can Rely On.</h2>
            <p>Get Your food delivered within 30 minutes of placing order, yes!, swift delivery is our top most priority.</p>
            <div className="steps">
                <div className="step">
                    <img src={step1Image} alt="Browse" />
                    <h3>Browse</h3>
                    <p>Discover a wide variety of local restaurants and their delicious menus.</p>
                </div>
                <div className="step">
                    <img src={step2Image} alt="Order" />
                    <h3>Order</h3>
                    <p>Select your favorite dishes and place your order with ease.</p>
                </div>
                <div className="step">
                    <img src={step3Image} alt="Track" />
                    <h3>Track</h3>
                    <p>Stay updated with real-time tracking from preparation to delivery.</p>
                </div>
                <div className="step">
                    <img src={step4Image} alt="Enjoy" />
                    <h3>Enjoy</h3>
                    <p>Receive your order promptly and enjoy a delightful dining experience.</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
