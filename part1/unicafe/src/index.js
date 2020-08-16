import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Header from "./Header";
import Button from "./Button";
import Statistics from "./Statistics";

const App = () => {
    const [clicks, setClicks] = useState({
        good: 0,
        neutral: 0,
        bad: 0
    });

    const handleGoodClicks = () => setClicks({...clicks, good: clicks.good + 1});
    const handleNeutralClicks = () => setClicks({...clicks, neutral: clicks.neutral + 1});
    const handleBadClicks = () => setClicks({...clicks, bad: clicks.bad + 1});

    const allClicks = [clicks.good, clicks.neutral, clicks.bad];
    // overkill
    const countAllClicks = allClicks.reduce((sum, current) => {
        return sum + current;
    }, 0);

    const calculatePositiveClicks = () => {
        const result = (clicks.good * 100) / countAllClicks;
        // As the result is NaN because of division by 0
        return result >= 0 ? result : 0;
    };

    const calculateAverageRating = () => {
        const weights = {
            good: 1,
            neutral: 0,
            bad: -1
        };
        const result = ((clicks.good * weights.good) + (clicks.neutral * weights.neutral) + (clicks.bad * weights.bad))
            / countAllClicks;
        return result >= 0 ? result : 0;
    };

    return (
        <div>
            <Header text={"Give Feedback"}/>
            <Button text={"good"} handleClick={handleGoodClicks}/>
            <Button text={"neutral"} handleClick={handleNeutralClicks}/>
            <Button text={"bad"} handleClick={handleBadClicks}/>
            <Header text={"Statistics"}/>
            <Statistics text={"good"} clicks={clicks.good}/>
            <Statistics text={"neutral"} clicks={clicks.neutral}/>
            <Statistics text={"bad"} clicks={clicks.bad}/>
            <Statistics text={"all"} clicks={countAllClicks}/>
            <Statistics text={"average"} clicks={calculateAverageRating()}/>
            <Statistics text={"positive"} clicks={calculatePositiveClicks() + " %"}/>
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));