import React from 'react';
import './Hero.css'
import bg from './bg.jpg'
import { NavLink } from 'react-router-dom';
const Hero = () => {
    return (
        <div className='hero'>
           <h1>Be A Great Developer</h1>
           <button className="mybtn">
                <NavLink style={{textDecoration:'none', color: '#fff'}} to="/courses">Explore Courses</NavLink>{" "}
      </button> 
        </div>
    );
};

export default Hero;