import { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";

import css from "./GameInfo.module.css";

export const GameInfo = () => {
    const { generateTargetNumber, targetNumber, symbolClicks} = useContext(GameContext);

    return (
        <div id={css['game-info']}>
            <h3>Crazy Calculating Challenge</h3>
            <p>You can test your reflexes by clicking on the "START" button below, to start the CCC.</p>
            <h5>Rules:</h5>
            <p>Once you click the "START" button, a random three-digit number will be generated. Your goal is to get that number on the dispay of the calculator, with minimum of 3 actions(using one or a mix of +, -, / or x).</p>
            <button onClick={generateTargetNumber}>START</button>
            <div className={css['symbol-clicks']}>{symbolClicks} out of 3 operations!</div>
            <h6>GOAL NUMBER:</h6>
            <div className={css['target-number']}>{targetNumber === 0 ? '???' : targetNumber}</div>
        </div>
    );
};