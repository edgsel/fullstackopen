import React from "react";

const Statistics = ({opinions}) => {
    return Object.entries(opinions[0]).map(([key, value]) => {
        return <p>{key} {value}</p>
    })
};

export default Statistics;
