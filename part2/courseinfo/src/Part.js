import React from "react";
import Total from "./Total";

const Part = ({course}) => {
    return (
        <div>
            {
                course.parts.map(item =>
                    <p key={item.id}>{item.name} {item.exercises}</p>
                )
            }
            <Total course={course}/>
        </div>
    )
};

export default Part;
