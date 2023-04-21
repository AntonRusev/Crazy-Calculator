import { useContext } from "react";

import { Score } from "../Score/Score"
import { GameContext } from "../../contexts/GameContext";

import css from "./ScoresTable.module.css";

export const ScoresTable = () => {

    const { bestTimes } = useContext(GameContext)

    return (
        <div id={css['best-times']}>
            <p>Highest scores this session:</p>
            {bestTimes.length > 0 ? bestTimes.sort().map(x => <Score key={x} score={x} />) : 'No high-scores yet'}
        </div>
    );
};