import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";

import css from "./GameInfo.module.css";
import Timer from "../Timer/Timer";
import { Score } from "../Score/Score";

export const GameInfo = () => {
    const { gameStart, gameStop, targetNumber, symbolClicks, bestTimes } = useContext(GameContext);

    return (
        <>
            <div id={css['game-info']}>
                <h3>Crazy Calculating Challenge</h3>
                <p>You can test your reflexes by clicking on the "START" button below, to start the CCC.</p>
                <h5>Rules:</h5>
                <p>Once you click the "START" button, a random three-digit number will be generated. Your goal is to get that number on the dispay of the calculator, with minimum of 3 actions(using one or a mix of +, -, / or x).</p>
                <button onClick={gameStart}>START</button>
                <button onClick={gameStop}>STOP</button>
                <div className={css['symbol-clicks']}>{symbolClicks} out of 3 operations!</div>
                <h6>GOAL NUMBER:</h6>
                <div className={css['target-number']}>{targetNumber === 0 ? '???' : targetNumber}</div>
                <Timer />
            </div>
            <div id={css['best-times']}>
                <p>Highest scores this session:</p>
                {bestTimes.length > 0 ? bestTimes.sort().map(x => <Score key={x} score={x} />) : 'No high-scores yet' }
            </div>
        </>
    );
};