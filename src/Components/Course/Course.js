import React from "react";
import './Course.css'
const Course = (props) => {
  const { name, instructor, img, price, duration, lectures } = props.course;
  return (
    <div className='course'>
        <img src={img} alt="" />
        <h4>{name}</h4>
        <p>{duration} . {lectures} Lectures</p>
        <div style={{display: 'flex', justifyContent:'space-around'}}>
            <h4>{instructor}</h4>
            <h2>${price}</h2>
        </div>             
    </div>
  );
};

export default Course;
