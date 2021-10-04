import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch('/courseData.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    return (
        <div className='container'>
          {
                courses.map(course => <Course key={Course.id} course={course}></Course>)
            }
        </div>
    );
};

export default Courses;