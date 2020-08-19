import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Header from "./Header";
import Statistics from "./Statistics";
import Buttons from "./Buttons";

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

    const calculatePositiveRating = () => {
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

    const isAnyFeedbackGiven = allClicks.some((click) => click > 0);

    const statistics = {
        good: allClicks[0],
        neutral: allClicks[1],
        bad: allClicks[2],
        all: countAllClicks,
        average: calculateAverageRating(),
        positive: calculatePositiveRating()
    };

    const buttons = {
        good: handleGoodClicks,
        neutral: handleNeutralClicks,
        bad: handleBadClicks
    };

    return (
        <div>
            <Header text={"Give Feedback"}/>
            <Buttons data={buttons}/>
            <Header text={"Statistics"}/>
            {isAnyFeedbackGiven ? (<Statistics data={statistics}/>) : <p>No feedback given</p> }
        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
