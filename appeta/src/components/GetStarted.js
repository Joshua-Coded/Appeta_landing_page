import React from 'react';
import '../styles/GetStarted.css';

const GetStarted = () => {
    return (
        <div className="get-started">
            <h2>How to Get Started</h2>
            <div className="steps">
                <div className="step">
                    <h3>Step 1</h3>
                    <p>Download the Appeta app from the App Store or Google Play.</p>
                </div>
                <div className="step">
                    <h3>Step 2</h3>
                    <p>Create an account and log in to start browsing restaurants.</p>
                </div>
                <div className="step">
                    <h3>Step 3</h3>
                    <p>Select your favorite dishes and place your order.</p>
                </div>
                <div className="step">
                    <h3>Step 4</h3>
                    <p>Enjoy your meal delivered to your doorstep quickly and reliably.</p>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;
