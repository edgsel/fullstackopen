import React from "react";
import Statistic from "./Statistic";

const Statistics = (props) => {
    return(
        <div>
            <table>
                <Statistic text={"good"} value={props.data.good}/>
                <Statistic text={"neutral"} value={props.data.neutral}/>
                <Statistic text={"bad"} value={props.data.bad}/>
                <Statistic text={"all"} value={props.data.all}/>
                <Statistic text={"average"} value={props.data.average}/>
                <Statistic text={"positive"} value={props.data.positive + "%"}/>
            </table>
        </div>
    )
};

export default Statistics;
