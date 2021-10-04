import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import Hero from '../Hero/Hero';
import './Home.css'

const Home = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('/courseData.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    const sliced = courses.slice(0,4)
     return (
        <div>
             <Hero />
             <h2>Our Courses</h2>
           <div className='container'>
           {
                sliced.map(course => <Course key={Course.id} course={course}></Course>)
            }
            
           </div>
           <button className='mybtn'>See All Courses</button>
        </div>
    );
};

export default Home;