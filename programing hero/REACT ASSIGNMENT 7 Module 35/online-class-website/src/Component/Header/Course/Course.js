import React from 'react';
import './Course.css';

const Course = (props) => {
   
    const { img, course, title, price } = props.data;
    const addCourse = props.addCourse;
    return (
        <div className="courseOutSiteStyle">
            <div className="CourseStyle">
                <img style={{ height: "220px", width: "500px",borderRadius: "5px" }} src={img} alt="" />
                <h2>{course}</h2>
                <h3>{title}</h3>
                <p>Price: {price}</p>
                <button onClick={()=> addCourse(props.data)}>Enroll Now</button>

            </div>
        </div>
    );
};

export default Course;