import React from 'react';
import './contact.css'
const Contact = () => {
    return (
        <div className='form'>
            <h2>Contact with us</h2>
            <div className="form-container">
                <div className="col-md-6">
                    <input placeholder="Enter Your Name" type="text" className='form-control mb-3' />
                    <input placeholder="Enter Your Email" type="Email" className='form-control mb-3' />
                    <textarea placeholder="Your Message" className='form-control mb-3' rows='5'></textarea>
                    <button className='mybtn'>Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;