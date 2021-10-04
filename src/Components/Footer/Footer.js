import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="row">
            <div className='col-md-6'>
                <h1>DevSchool.com</h1>
                <p>
                   Location: House 4, Road 3, Progoti Soroni, Dhaka, Bangladesh.
                   Email: devschool@gmail.com <br></br>
                   Helpline : 01302-010101
                </p>   
            </div>
            <div className='col-md-6'>
                <p>
                    <span><a href="">About Us</a></span>
                    <span><a href="">Success</a></span>
                    <span><a href="">Refund Policy</a></span>
                    <span><a href="">Terms And Conditions</a></span>
                </p>
            </div>
            </div>
        </div>
    );
};

export default Footer;