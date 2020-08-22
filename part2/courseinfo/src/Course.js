import React from 'react';
import Header from "./Header";
import Part from "./Part";

const Course = ({course}) => {
    return(
        <div>
        <Header course={course}/>
        <Part course={course}/>
        </div>
    )
};

export default Course;
