import React from "react";
import "./about.css";
import img from './code.jfif'
const About = () => {
  return (
    <div className="about">
      <h2 className="about-title">About Us</h2>
      <main className="content">
        <div className="row">
          <div className="col-md-6">
            <h2>
              Our Goal is to Spread <span style={{color: '#28B463'}}>Knowledge</span> <br></br>
              Throughout The Whole World.
            </h2>
            <button className="mybtn">Learn More</button>
          </div>
          <div className="col-md-6">
              <img src={img} alt="" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
