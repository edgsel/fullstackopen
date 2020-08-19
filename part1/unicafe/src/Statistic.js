import React from "react";

const Statistic = ({text, value}) => {
    return (
        <p name={text}> {text}: {value}</p>
    )
};

export default Statistic;
