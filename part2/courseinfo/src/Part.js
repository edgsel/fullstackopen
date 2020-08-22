import React from "react";

const Part = ({course}) => {
    return (
        course.parts.map(item =>
            <p key={item.id}>{item.name} {item.exercises}</p>
        )
    )
};

export default Part;
