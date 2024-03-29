import { memo, useContext } from "react";
import { GameContext } from "../../contexts/GameContext";

import css from "./GameInfo.module.css";
import Timer from "../Timer/Timer";
import { InfoModal } from "../InfoModal/InfoModal";

export const GameInfo = () => {
    const { gameStart, gameStop, targetNumber, symbolClicks, onModalActivate, isModalActive } = useContext(GameContext);

    return (
        <>
            {isModalActive && <InfoModal />}
            <div id={css['game-info']}>
                <div className={css.buttons}>
                    <button onClick={gameStart}>START</button>
                    {/* <button onClick={onModalActivate}>MODAL</button> */}
                    <button onClick={gameStop}>STOP</button>
                </div>

                <h6>GOAL NUMBER:</h6>

                <div className={css['target-number']}>{targetNumber === 0 ? '???' : targetNumber}</div>

                <Timer />

                <div className={css['symbol-clicks']}>
                    <p>Operations:</p>
                    <p>{symbolClicks} / 3</p>
                </div>
            </div>
        </>
    );
};