import React from 'react'
/*
// using map(), just pass props with only one call of component
const Part = (props) => {
    let result = props.parts.map((key, index) =>
        <p key={index}>{key} {props.exercises[index]}</p>
    );

    return (
        <div>
            {result}
        </div>
    )
};
*/

const Part = (props) => {
    return (
        <p>{props.parts} {props.exercises}</p>
    )
};

export default Part;
