import React from "react";

const Statistics = ({text, clicks}) => {
    return(
        <p name={text}> {text}: {clicks}</p>
    )
};

export default Statistics;
