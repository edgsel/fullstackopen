import React from "react";

const Statistic = ({text, value}) => {
    return (
        <tbody>
            <tr>
                <td>{text}</td>
                <td>{value}</td>
            </tr>
        </tbody>
    )
};

export default Statistic;
