import React from "react";

const Total = ({ course }) => {
    const sum = course.parts.reduce((acc, courseObj) => acc + courseObj.exercises, 0);
    return(
        <p style={{fontWeight: "bold"}}>Total of {sum} exercises</p>
    )
};

export default Total;
