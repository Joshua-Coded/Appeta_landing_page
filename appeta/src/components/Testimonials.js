import React from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
    return (
        <div className="testimonials">
            <h2>What Our Clients Say</h2>
            <div className="testimonial-cards">
                <div className="testimonial-card">
                    <p>"Appeta has transformed the way I order food. The delivery is always quick and the food is hot and fresh!"</p>
                    <h4>- Jane Doe</h4>
                </div>
                <div className="testimonial-card">
                    <p>"I love the convenience of Appeta. It's so easy to use and I can track my order in real-time."</p>
                    <h4>- John Smith</h4>
                </div>
                <div className="testimonial-card">
                    <p>"The variety of restaurants on Appeta is amazing. I can always find something new to try!"</p>
                    <h4>- Sarah Lee</h4>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
