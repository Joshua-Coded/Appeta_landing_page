import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Submitting form data:', formData);

        axios.post('http://localhost:5000/send', formData)
            .then(response => {
                console.log('Response:', response);
                setResponseMessage('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch(error => {
                console.error('Error:', error);
                setResponseMessage('Failed to send message.');
            });
    };

    return (
        <div className="contact">
            <h2>Contact Us</h2>
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            required
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
                {responseMessage && <p className="response-message">{responseMessage}</p>}
            </div>
            <div className="contact-info">
                <p>If you have any questions, feel free to reach out to us:</p>
                <p>Email: support@appeta.com</p>
                <p>Phone: +250 123 456 789</p>
                <p>Address: 123 Kigali Street, Rwanda</p>
            </div>
        </div>
    );
};

export default Contact;
